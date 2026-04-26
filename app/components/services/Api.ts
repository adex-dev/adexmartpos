import axios from 'axios';

const api = import.meta.env.VITE_API;
const token = import.meta.env.VITE_TOKEN;
export const GetData = async (props:any) => {
  try {
    const response = await axios.get(props.address);
    // await saveProducts(data);
    return response.data;
  } catch (error) {
    if (error.response) {
      const { data, status } = error.response || {
        message: 'Unknown error occurred',
      };
      if (status === 404) {
        return { message: 'Data not found ' + status, status: false };
      } else {
        return data;
      }
    } else if (error.request) {
      return { message: 'No response received from server', status: false };
    } else {
      return { message: error.message || error.code, status: false };
    }
  }
};
export const PostData = async (props) => {
  const PostData = new FormData();
  PostData.append('token', token);
  if (props.form) {
    for (let key in props.form) {
      if (props.form.hasOwnProperty(key)) {
        PostData.append(key, props.form[key]);
      }
    }
  }
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.post(`${api}/${props.address}`, PostData);
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
