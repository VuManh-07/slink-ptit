import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';

const url = 'sotay/nghia-vu-mac-dinh';

export function getAllNghiaVuMacDinh(payload?: { condition?: any }) {
  return axios.get(`${ip3}/${url}/all`, { params: payload });
}

export function getNghiaVuMacDinhPageable(payload: {
  page: number;
  limit: number;
  condition?: any;
}) {
  return axios.get(`${ip3}/${url}`, { params: payload });
}

export function postNghiaVuMacDinh(payload: NghiaVuMacDinh.Record) {
  return axios.post(`${ip3}/${url}`, payload);
}

export function putNghiaVuMacDinh(idNghiaVuMacDinh: string, data: NghiaVuMacDinh.Record) {
  return axios.put(`${ip3}/${url}/${idNghiaVuMacDinh}`, data);
}

export function deleteNghiaVuMacDinh(id: string) {
  return axios.delete(`${ip3}/${url}/${id}`);
}
