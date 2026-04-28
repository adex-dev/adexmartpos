import axios from 'axios';

let accessToken = null;
const apilink = import.meta.env.VITE_API;

export const setAccessToken = (token) => {
  accessToken = token;
};

const api = axios.create({
  baseURL: apilink,
  withCredentials: true, // penting untuk cookie
});

// attach token ke setiap request
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
      originalRequest._retry = true;

      try {
        const res = await axios.post(
          `${apilink}/public/auth/refresh`,
          {},
          { withCredentials: true },
        );

        accessToken = res.data.access_token;

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (err) {
        console.error('refresh gagal');
      }
    }

    return Promise.reject(error);
  },
);

export default api;
