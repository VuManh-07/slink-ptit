/* eslint-disable no-param-reassign */
import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';

export async function get(payload: { page: number; limit: number; condition?: any }) {
  return axios.get(`${ip3}/quan-ly-khoa-hoc/huong-dan-ncs-hvch/me/pageable`, {
    params: payload,
  });
}

export async function post(payload: { values: HuongDanNghienCuuSinh.Record }) {
  return axios.post(`${ip3}/quan-ly-khoa-hoc/huong-dan-ncs-hvch/me`, payload.values);
}

export async function udp(payload: { id: string; values: HuongDanNghienCuuSinh.Record }) {
  return axios.put(`${ip3}/quan-ly-khoa-hoc/huong-dan-ncs-hvch/${payload.id}/me`, payload.values);
}

export async function del(payload: { id: string }) {
  return axios.delete(`${ip3}/quan-ly-khoa-hoc/huong-dan-ncs-hvch/${payload.id}/me`);
}
