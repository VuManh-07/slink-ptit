/* eslint-disable no-param-reassign */
import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';

export async function get(payload: { page: number; limit: number; condition?: any }) {
  return axios.get(`${ip3}/quan-ly-khoa-hoc/sach-phuc-vu-dao-tao/me/pageable`, { params: payload });
}

export async function post(payload: { values: BienSoanSach.Record }) {
  return axios.post(`${ip3}/quan-ly-khoa-hoc/sach-phuc-vu-dao-tao/me`, payload.values);
}

export async function udp(payload: { id?: string; values: BienSoanSach.Record }) {
  const idNew = payload.id;
  delete payload.id;
  return axios.put(`${ip3}/quan-ly-khoa-hoc/sach-phuc-vu-dao-tao/${idNew}/me`, payload.values);
}

export async function del(payload: { id: string }) {
  return axios.delete(`${ip3}/quan-ly-khoa-hoc/sach-phuc-vu-dao-tao/${payload.id}/me`);
}
