import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';

export async function getGiaoNhiemVu(payload: {
  page: number;
  limit: number;
  condition?: any;
  nam: number;
}) {
  return axios.get(
    `${ip3}/quan-ly-khoa-hoc/quan-ly-de-tai-nckh/giao-nhiem-vu/pageable/nam/${payload.nam}`,
    {
      params: payload,
    },
  );
}

export async function getGiaoNhiemVuById(idGiaoNhiemVu: string) {
  return axios.get(`${ip3}/quan-ly-khoa-hoc/quan-ly-de-tai-nckh/giao-nhiem-vu/${idGiaoNhiemVu}`);
}

export async function postGiaoNhiemVu(payload: QuanLyKhoaHoc.GiaoNhiemVu) {
  return axios.post(`${ip3}/quan-ly-khoa-hoc/quan-ly-de-tai-nckh/giao-nhiem-vu`, payload);
}

export async function putGiaoNhiemVu(payload: {
  data: QuanLyKhoaHoc.GiaoNhiemVu;
  idGiaoNhiemVu: string;
}) {
  return axios.put(
    `${ip3}/quan-ly-khoa-hoc/quan-ly-de-tai-nckh/giao-nhiem-vu/${payload.idGiaoNhiemVu}`,
    payload.data,
  );
}

export async function deleteGiaoNhiemVu(idGiaoNhiemVu: string) {
  return axios.delete(`${ip3}/quan-ly-khoa-hoc/quan-ly-de-tai-nckh/giao-nhiem-vu/${idGiaoNhiemVu}`);
}
