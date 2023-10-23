import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';

export async function getKeHoachNamToi(payload: {
  page: number;
  limit: number;
  condition?: any;
  nam: number;
}) {
  return axios.get(
    `${ip3}/quan-ly-khoa-hoc/quan-ly-de-tai-nckh/ke-hoach-khcn-nam-toi/pageable/nam/${payload.nam}`,
    {
      params: payload,
    },
  );
}

export async function getKeHoachNamToiById(idKeHoachNamToi: string) {
  return axios.get(
    `${ip3}/quan-ly-khoa-hoc/quan-ly-de-tai-nckh/ke-hoach-khcn-nam-toi/${idKeHoachNamToi}`,
  );
}

export async function postKeHoachNamToi(payload: QuanLyKhoaHoc.KeHoachNamToi) {
  return axios.post(`${ip3}/quan-ly-khoa-hoc/quan-ly-de-tai-nckh/ke-hoach-khcn-nam-toi`, payload);
}

export async function putKeHoachNamToi(payload: {
  data: QuanLyKhoaHoc.KeHoachNamToi;
  idKeHoachNamToi: string;
}) {
  return axios.put(
    `${ip3}/quan-ly-khoa-hoc/quan-ly-de-tai-nckh/ke-hoach-khcn-nam-toi/${payload.idKeHoachNamToi}`,
    payload.data,
  );
}

export async function deleteKeHoachNamToi(idKeHoachNamToi: string) {
  return axios.delete(
    `${ip3}/quan-ly-khoa-hoc/quan-ly-de-tai-nckh/ke-hoach-khcn-nam-toi/${idKeHoachNamToi}`,
  );
}
