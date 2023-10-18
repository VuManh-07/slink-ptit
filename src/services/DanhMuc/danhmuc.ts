import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';

export async function getDanhMucS(payload: { loaiDanhMuc: string }) {
  return axios.get(`${ip3}/danh-muc/loai-danh-muc/${payload?.loaiDanhMuc}`);
}

export async function addDanhMuc(payload: any) {
  return axios.post(`${ip3}/danh-muc`, payload);
}

export async function putDanhMuc(payload: any) {
  return axios.put(`${ip3}/danh-muc/${payload?.id}`, payload.data);
}

export async function delDanhMuc(payload: any) {
  return axios.delete(`${ip3}/danh-muc/${payload?.id}`, payload);
}
