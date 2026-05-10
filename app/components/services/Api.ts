// import axios from 'axios';
import api from './axios';
const apilink = import.meta.env.VITE_API;
const apiversion = import.meta.env.VITE_API_VERSION;
export const GetData = async ({ address,pagination }) => {
  const params = new URLSearchParams();
  // params.append('usernamekeys',userskeys)
  if (pagination !=0) {
   params.append('pagination',pagination)
  }
  try {
    const response = await api.get(`/${address}?${params}`);
    // await saveProducts(data);
    return response.data;
  } catch (error:unknown) {
  return MessageErrors(error)
  }
    
};
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
  } catch (error:unknown) {
  return MessageErrors(error)
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
    return MessageErrors(error)
  }
  
};
function MessageErrors (error:unknown){
   if (typeof error ==="object" && error !==null) {
    const err = error as any
     if (err.response) {
      const { data, status } = err.response;
      if (data) {
        return data;
      } else {
        if (status === 404) {
          return { message: 'Data not found ' + status, status: false };
        } else {
          return data;
        }
      }
    } else if (err.request) {
      return { message: 'No response received from server', status: false };
    } else {
      return { message: err.message || err.code, status: false };
    }
  }
   
}
export const FetchLogout = async ({ address }) => {
  try {
    const response = await api.post(`${apilink+"/"+apiversion+"/"+address}`,{},{
      withCredentials: true,
    });
    // await saveProducts(data);
    return response.data;
  } catch (error) {
      return MessageErrors(error)
  }
};

