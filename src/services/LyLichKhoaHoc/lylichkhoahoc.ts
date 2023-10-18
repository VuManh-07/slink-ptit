import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';

const url = 'quan-ly-khcn';

export async function getLyLichKhoaHocMe() {
  return axios.get(`${ip3}/${url}/ly-lich/me`);
}

export async function putLyLichKhoaHocMe(idLyLich: string, payload: LyLichKhoaHoc.Record) {
  return axios.put(`${ip3}/${url}/ly-lich/${idLyLich}/me`, payload);
}

export async function postLyLichKhoaHoc(payload: {
  userId?: string;
  lyLich?: LyLichKhoaHoc.Record;
}) {
  return axios.post(`${ip3}/${url}/ly-lich`, payload);
}

export async function getCongTrinhTieuBieu() {
  return axios.get(`${ip3}/${url}/ly-lich/cong-trinh-tieu-bieu`);
}

export async function getLyLichKhoaHocPageable(payload: { page: number; limit: number }) {
  return axios.get(`${ip3}/${url}/ly-lich/pageable`, { params: payload });
}

export async function exportLyLichKhoaHocMe() {
  return axios.get(`${ip3}/${url}/ly-lich/me/export`, { responseType: 'arraybuffer' });
}
