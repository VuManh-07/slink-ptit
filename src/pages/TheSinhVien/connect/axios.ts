import axios from 'axios';
 

// Tạo một instance của Axios với cấu hình mặc định
const instanceCard = axios.create({
    baseURL: 'http://139.162.47.179:3030', // Thay thế bằng URL của API của bạn
    timeout: 5000, // Thời gian chờ tối đa cho mỗi yêu cầu
});

const instancePtit= axios.create({
  baseURL: 'http://139.162.47.179:3040', // Thay thế bằng URL của API của bạn
  timeout: 5000, // Thời gian chờ tối đa cho mỗi yêu cầu
});

const instancePayment = axios.create({
  baseURL: 'http://localhost:8888', // Thay thế bằng URL của API của bạn
  timeout: 5000, // Thời gian chờ tối đa cho mỗi yêu cầu
});
  
export  {
  instanceCard,
  instancePtit,
  instancePayment
};