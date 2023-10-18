import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';

export async function getDonVi(payload: { page: number; limit: number; condition?: any }) {
  return axios.get(`${ip3}/quan-ly-khoa-hoc/quan-ly-de-tai-nckh/don-vi-dang-ky-de-tai/pageable`, {
    params: payload,
  });
}

export async function getAllDonVi() {
  return axios.get(`${ip3}/quan-ly-khoa-hoc/quan-ly-de-tai-nckh/don-vi-dang-ky-de-tai`);
}

export async function getDonViById(idDonVi: string) {
  return axios.get(`${ip3}/quan-ly-khoa-hoc/quan-ly-de-tai-nckh/don-vi-dang-ky-de-tai/${idDonVi}`);
}

export async function postDonVi(payload: QuanLyKhoaHoc.DonVi) {
  return axios.post(`${ip3}/quan-ly-khoa-hoc/quan-ly-de-tai-nckh/don-vi-dang-ky-de-tai`, payload);
}

export async function putDonVi(payload: { data: QuanLyKhoaHoc.DonVi; idDonVi: string }) {
  return axios.put(
    `${ip3}/quan-ly-khoa-hoc/quan-ly-de-tai-nckh/don-vi-dang-ky-de-tai/${payload.idDonVi}`,
    payload.data,
  );
}

export async function deleteDonVi(idDonVi: string) {
  return axios.delete(
    `${ip3}/quan-ly-khoa-hoc/quan-ly-de-tai-nckh/don-vi-dang-ky-de-tai/${idDonVi}`,
  );
}
