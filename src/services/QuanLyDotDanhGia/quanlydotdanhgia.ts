import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';

export async function getAllDotDanhGia(payload: { page: number; limit: number; condition: any }) {
  return axios.get(`${ip3}/danh-gia-giang-vien/dot-danh-gia/pageable`, { params: payload });
}

export async function postDotDanhGia(payload: QuanLyDotDanhGia.Record) {
  return axios.post(`${ip3}/danh-gia-giang-vien/dot-danh-gia`, payload);
}

export async function putDotDanhGia(payload: {
  data: QuanLyDotDanhGia.Record;
  idDotDanhGia?: number;
}) {
  return axios.put(`${ip3}/danh-gia-giang-vien/dot-danh-gia/${payload.idDotDanhGia}`, payload.data);
}

export async function delDotDanhGia(idDotDanhGia: string) {
  return axios.delete(`${ip3}/danh-gia-giang-vien/dot-danh-gia/${idDotDanhGia}`);
}

export async function kichHoatDotDanhGia(idDotDanhGia: string, val: boolean) {
  return axios.post(`${ip3}/danh-gia-giang-vien/activate/dot-danh-gia/${idDotDanhGia}`, {
    active: val,
  });
}
