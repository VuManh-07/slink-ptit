import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';

const url = 'loai-thanh-toan';

export async function getLoaiThanhToan(payload: { page: number; limit: number; condition?: any }) {
  return axios.get(`${ip3}/${url}`, { params: payload });
}

export async function putLoaiThanhToan(payload: { id: string; data: LoaiThanhToan.Record }) {
  return axios.put(`${ip3}/${url}/${payload.id}`, payload.data);
}

export async function postLoaiThanhToan(payload: LoaiThanhToan.Record) {
  return axios.post(`${ip3}/${url}`, payload);
}

export async function delLoaiThanhToan(payload: { id: string }) {
  return axios.delete(`${ip3}/${url}/${payload.id}`);
}
