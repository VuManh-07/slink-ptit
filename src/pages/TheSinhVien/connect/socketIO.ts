import { io, Socket } from 'socket.io-client';

// Tạo biến singleton để lưu trữ kết nối Socket.io
let socketInstanceServerCard: Socket | null = null;
let socketInstanceServerPTIT: Socket | null = null;

// Hàm tạo kết nối Socket.io duy nhất
export const getSocketServerCard = () => {
  if (!socketInstanceServerCard) {
    // Nếu chưa có kết nối, tạo mới
    socketInstanceServerCard = io('http://localhost:3030'); 
  }
  return socketInstanceServerCard;
};
  
export const getSocketServerPTIT = () => {
  if (!socketInstanceServerPTIT) { 
      socketInstanceServerPTIT = io('http://localhost:3040'); 
  }
  return socketInstanceServerPTIT;
};