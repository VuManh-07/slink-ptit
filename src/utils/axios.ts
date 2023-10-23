// axios.js
import { notification } from 'antd';
import axios from 'axios';
import { history } from 'umi';
import data from './data';

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    if (
      // config.baseURL === baseApiAddress &&
      !config.headers.Authorization
    ) {
      const token = localStorage.getItem('token');
      if (token) {
        // eslint-disable-next-line no-param-reassign
        config.headers.Authorization = `Bearer ${token}`;
        // config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Add a response interceptor
axios.interceptors.response.use(
  (response) =>
    // Do something with response data
    response,
  (error) => {
    // const { response } = error;
    // const payloadRequest = JSON.parse(response?.config?.data ?? '');
    // if (payloadRequest?.showMes === false) {
    //   return Promise.reject(error);
    // }
    const descriptionError =
      data.error[error?.response?.data?.detail?.errorCode || error?.response?.data?.errorCode] ||
      error?.response?.data?.errorDescription ||
      error?.data?.detail?.message ||
      error?.message;
    switch (error?.response?.status) {
      case 400: {
        notification.error({
          message: 'Bad request',
          description: descriptionError,
        });
        break;
      }

      case 401:
        notification.error({
          message: 'Vui lòng đăng nhập lại',
          description: descriptionError,
        });
        // localStorage.removeItem('vaiTro');
        // localStorage.removeItem('token');
        // history.replace({
        //   pathname: '/user/login',
        // });
        break;

      case 403:
        notification.error({
          message: 'Xin lỗi, bạn không có quyền thực hiện thao tác này',
          description: descriptionError,
        });
        break;

      case 404:
        notification.error({
          message:
            'Lỗi không tìm thấy dữ liệu, bạn hãy thử f5 refresh lại trình duyệt để cập nhật phiên bản mới nhất.',
          description: descriptionError,
        });
        break;

      case 405:
        notification.error({
          message: 'Truy vấn không được phép',
          description: descriptionError,
        });
        break;

      case 409:
        notification.error({
          message: 'Dữ liệu chưa đúng',
          description: descriptionError,
        });
        break;

      case 500:
        notification.error({
          message: 'Server gặp lỗi',
          description: error?.response?.data?.detail?.message || error.message,
        });
        break;
      case 502:
        notification.error({
          message: 'Server gặp lỗi',
          description: error?.response?.data?.detail?.message || error?.message,
        });
        break;

      default:
        break;
    }
    // Do something with response error
    return Promise.reject(error);
  },
);

export default axios;
