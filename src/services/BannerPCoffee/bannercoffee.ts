import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';

export async function getBanner(data: { page: number; limit: number; condition: any }) {
  return axios.get(`${ip3}/banner-hien-thi`, {
    params: data,
  });
}
export async function createBanner(data: IBanner.DataReq) {
  return axios.post(`${ip3}/banner-hien-thi`, data);
}
export async function updateBanner(id: string, data: IBanner.DataReq) {
  return axios.put(`${ip3}/banner-hien-thi/${id}`, data);
}
export async function changeActive(id: string, active: boolean) {
  return axios.put(`${ip3}/banner-hien-thi/${id}/active-banner`, { active: active });
}
export async function deleteBanner(id: string) {
  return axios.delete(`${ip3}/banner-hien-thi/${id}`);
}
