import axios from 'axios';

let accessToken = null;
let isRefreshing = false;
let failedQueue = [];
const apilink = import.meta.env.VITE_API;

export const setAccessToken = (token) => {
  accessToken = token;
};

const api = axios.create({
  baseURL: apilink,
  withCredentials: true,
});

// attach token ke setiap request
const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

api.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// handle refresh token otomatis
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return api(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }
      originalRequest._retry = true;
      isRefreshing = true;

      return new Promise((resolve, reject) => {
        axios
          .post(`${apilink}/public/auth/refresh`, {}, { withCredentials: true })
          .then((res) => {
            const newToken = res.data.access_token;
            setAccessToken(newToken); // Update token lokal

            // Jalankan semua request yang sedang mengantre
            processQueue(null, newToken);

            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            resolve(api(originalRequest));
          })
          .catch((err) => {
            processQueue(err, null);
            // Jika refresh gagal (sesi benar-benar habis), biarkan error mengalir
            // (Nanti akan ditangani oleh ProtectedRoute untuk redirect ke login)
            reject(err);
          })
          .finally(() => {
            isRefreshing = false;
          });
      });
    }

    return Promise.reject(error);
  },
);

export default api;
