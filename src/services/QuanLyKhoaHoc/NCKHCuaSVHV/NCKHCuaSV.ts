import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';

export async function getNCKH(payload: { page: number; limit: number; condition?: any }) {
  console.log('payload>>', payload);
  return axios.get(`${ip3}/quan-ly-khoa-hoc/nhiem-vu-khcn/me/pageable`, {
    params: payload,
  });
}

export async function postNCKH(payload: { values: NhiemVuKHCN.Record }) {
  console.log('payload>>', payload);
  return axios.post(`${ip3}/quan-ly-khoa-hoc/nhiem-vu-khcn/me`, payload.values);
}

export async function udpNCKH(payload: { id?: string; values: NhiemVuKHCN.Record }) {
  const idNew = payload.id;
  delete payload.id;
  return axios.put(`${ip3}/quan-ly-khoa-hoc/nhiem-vu-khcn/${idNew}/me`, payload.values);
}

export async function delNCKH(payload: { id: string }) {
  return axios.delete(`${ip3}/quan-ly-khoa-hoc/nhiem-vu-khcn/${payload.id}/me`);
}
