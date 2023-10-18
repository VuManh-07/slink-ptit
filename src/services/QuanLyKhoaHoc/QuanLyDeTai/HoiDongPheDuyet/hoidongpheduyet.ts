import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';

export async function getHoiDongPheDuyet(payload: {
  page: number;
  limit: number;
  condition?: any;
  nam: number;
}) {
  return axios.get(
    `${ip3}/quan-ly-khoa-hoc/quan-ly-de-tai-nckh/hoi-dong-phe-duyet/pageable/nam/${payload.nam}`,
    {
      params: payload,
    },
  );
}

export async function getHoiDongPheDuyetById(idHoiDongPheDuyet: string) {
  return axios.get(
    `${ip3}/quan-ly-khoa-hoc/quan-ly-de-tai-nckh/hoi-dong-phe-duyet/${idHoiDongPheDuyet}`,
  );
}

export async function postHoiDongPheDuyet(payload: QuanLyKhoaHoc.HoiDongPheDuyet) {
  return axios.post(`${ip3}/quan-ly-khoa-hoc/quan-ly-de-tai-nckh/hoi-dong-phe-duyet`, payload);
}

export async function putHoiDongPheDuyet(payload: {
  data: QuanLyKhoaHoc.HoiDongPheDuyet;
  idHoiDongPheDuyet: string;
}) {
  return axios.put(
    `${ip3}/quan-ly-khoa-hoc/quan-ly-de-tai-nckh/hoi-dong-phe-duyet/${payload.idHoiDongPheDuyet}`,
    payload.data,
  );
}

export async function deleteHoiDongPheDuyet(idHoiDongPheDuyet: string) {
  return axios.delete(
    `${ip3}/quan-ly-khoa-hoc/quan-ly-de-tai-nckh/hoi-dong-phe-duyet/${idHoiDongPheDuyet}`,
  );
}
