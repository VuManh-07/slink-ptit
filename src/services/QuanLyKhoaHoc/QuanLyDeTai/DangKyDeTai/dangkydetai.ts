import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';

export async function getDangKyDeTai(payload: {
  page: number;
  limit: number;
  condition?: any;
  nam: number;
}) {
  return axios.get(
    `${ip3}/quan-ly-khoa-hoc/quan-ly-de-tai-nckh/dang-ky-de-tai/pageable/nam/${payload.nam}`,
    {
      params: payload,
    },
  );
}

export async function getDangKyDeTaiById(idDangKyDeTai: string) {
  return axios.get(`${ip3}/quan-ly-khoa-hoc/quan-ly-de-tai-nckh/dang-ky-de-tai/${idDangKyDeTai}`);
}

export async function postDangKyDeTai(payload: QuanLyKhoaHoc.DangKyDeTai) {
  return axios.post(`${ip3}/quan-ly-khoa-hoc/quan-ly-de-tai-nckh/dang-ky-de-tai`, payload);
}

export async function putDangKyDeTai(payload: {
  data: QuanLyKhoaHoc.DangKyDeTai;
  idDangKyDeTai: string;
}) {
  return axios.put(
    `${ip3}/quan-ly-khoa-hoc/quan-ly-de-tai-nckh/dang-ky-de-tai/${payload.idDangKyDeTai}`,
    payload.data,
  );
}

export async function deleteDangKyDeTai(idDangKyDeTai: string) {
  return axios.delete(
    `${ip3}/quan-ly-khoa-hoc/quan-ly-de-tai-nckh/dang-ky-de-tai/${idDangKyDeTai}`,
  );
}
