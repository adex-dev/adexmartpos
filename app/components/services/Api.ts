// import axios from 'axios';
import api from './axios';
export const PostData = async ({ form, address }) => {
  const PostData = new FormData();
  // eslint-disable-next-line no-useless-catch
  if (form) {
    Object.keys(form).forEach((key) => {
      PostData.append(key, form[key]);
    });
  }

  try {
    const response = await api.post(`/${address}`, PostData);
    // await saveProducts(data);
    return response.data;
  } catch (error) {
    if (error.response) {
      const { data, status } = error.response;
      if (data) {
        return data;
      } else {
        if (status === 404) {
          return { message: 'Data not found ' + status, status: false };
        } else {
          return data;
        }
      }
    } else if (error.request) {
      return { message: 'No response received from server', status: false };
    } else {
      return { message: error.message || error.code, status: false };
    }
  }
};

export const PostLogin = async ({ form, address }) => {
  const PostData = new FormData();
  // eslint-disable-next-line no-useless-catch
  if (form) {
    Object.keys(form).forEach((key) => {
      PostData.append(key, form[key]);
    });
  }

  try {
    const response = await api.post(`/${address}`, PostData);
    // await saveProducts(data);
    return response.data;
  } catch (error) {
    if (error.response) {
      const { data, status } = error.response;
      if (data) {
        return data;
      } else {
        if (status === 404) {
          return { message: 'Data not found ' + status, status: false };
        } else {
          return data;
        }
      }
    } else if (error.request) {
      return { message: 'No response received from server', status: false };
    } else {
      return { message: error.message || error.code, status: false };
    }
  }
};

export const FetchLogout = async ({ address }) => {
  try {
    const response = await api.get(`/${address}`);
    // await saveProducts(data);
    return response.data;
  } catch (error) {
    return { status: false };
  }
};
