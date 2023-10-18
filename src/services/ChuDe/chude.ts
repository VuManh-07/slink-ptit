import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';

export async function getAllLoaiChuDe() {
  return axios.get(`${ip3}/common-topic/type/all`);
}

export async function getAllChuDe(payload: { condition: any; idHinhThuc?: number }) {
  return axios.get(`${ip3}/common-topic/all`, { params: payload });
}

export async function getChuDe(payload: {
  page: number;
  limit: number;
  condition?: any;
  idHinhThuc: number;
}) {
  return axios.get(`${ip3}/common-topic/pageable`, { params: payload });
}

export async function putChuDe(payload: { id: string; data: ChuDe.Record }) {
  return axios.put(`${ip3}/common-topic/${payload.id}`, payload.data);
}

export async function addChuDe(payload: ChuDe.Record) {
  return axios.post(`${ip3}/common-topic`, payload);
}

export async function delChuDe(payload: { id: string }) {
  return axios.delete(`${ip3}/common-topic/${payload.id}`);
}
