import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';

export async function getNhomDeTai(payload: { page: number; limit: number; condition?: any }) {
  return axios.get(`${ip3}/quan-ly-khoa-hoc/quan-ly-de-tai-nckh/de-tai-nhom/pageable`, {
    params: payload,
  });
}

export async function getAllNhomDeTai() {
  return axios.get(`${ip3}/quan-ly-khoa-hoc/quan-ly-de-tai-nckh/de-tai-nhom/`);
}

export async function countNhomDeTai() {
  return axios.get(`${ip3}/quan-ly-khoa-hoc/quan-ly-de-tai-nckh/de-tai-nhom/count`);
}

export async function getNhomDeTaiById(idNhomDeTai: string) {
  return axios.get(`${ip3}/quan-ly-khoa-hoc/quan-ly-de-tai-nckh/de-tai-nhom/${idNhomDeTai}`);
}

export async function postNhomDeTai(payload: { nhomDeTai: string; moTa: string }) {
  return axios.post(`${ip3}/quan-ly-khoa-hoc/quan-ly-de-tai-nckh/de-tai-nhom`, payload);
}

export async function putNhomDeTai(payload: {
  data: { nhomDeTai: string; moTa: string };
  idNhomDeTai: string;
}) {
  return axios.put(
    `${ip3}/quan-ly-khoa-hoc/quan-ly-de-tai-nckh/de-tai-nhom/${payload.idNhomDeTai}`,
    payload.data,
  );
}

export async function deleteNhomDeTai(idNhomDeTai: string) {
  return axios.delete(`${ip3}/quan-ly-khoa-hoc/quan-ly-de-tai-nckh/de-tai-nhom/${idNhomDeTai}`);
}
