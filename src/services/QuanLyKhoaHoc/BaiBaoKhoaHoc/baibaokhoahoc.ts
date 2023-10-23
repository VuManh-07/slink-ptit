/* eslint-disable no-param-reassign */
import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';

export async function get(payload: { page: number; limit: number; condition?: any }) {
  return axios.get(`${ip3}/quan-ly-khoa-hoc/bai-bao-khoa-hoc/me/pageable`, {
    params: payload,
  });
}

export async function post(payload: { values: BaiBaoKhoaHoc.Record }) {
  return axios.post(`${ip3}/quan-ly-khoa-hoc/bai-bao-khoa-hoc/me`, payload.values);
}

export async function udp(payload: { id?: string; values: BaiBaoKhoaHoc.Record }) {
  const idNew = payload.id;
  delete payload.id;

  return axios.put(`${ip3}/quan-ly-khoa-hoc/bai-bao-khoa-hoc/${idNew}/me`, payload.values);
}

export async function del(payload: { id: string }) {
  return axios.delete(`${ip3}/quan-ly-khoa-hoc/bai-bao-khoa-hoc/${payload.id}/me`);
}
