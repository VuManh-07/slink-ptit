import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';
import {
  reqGetNganHangCauHoi,
  resDataCreateCauHoi,
  resDataUpdateCauHoi,
} from '@/models/nganhangcauhoi';
export interface DataImportNganHang {
  file: string | Blob;
  maMonHoc: string;
}
export async function getCauHoi(data: reqGetNganHangCauHoi) {
  return axios.get(`${ip3}/cau-hoi-ngan-hang`, {
    params: {
      page: data.page,
      limit: data.limit,
      condition: {
        maMonHoc: data.maMonHoc,
        loaiCauHoi: data.loaiCauHoi,
      },
    },
  });
}
export async function getCauHoiNganHang(
  data: { page: number; limit: number; condition: any },
) {
  return axios.get(`${ip3}/cau-hoi-ngan-hang`, {
    params: { ...data },
  });
}
export async function createCauHoi(data: resDataCreateCauHoi) {
  return axios.post(`${ip3}/cau-hoi-ngan-hang/many`, data);
}
export async function updateCauHoi(id: string, data: resDataUpdateCauHoi) {
  return axios.put(`${ip3}/cau-hoi-ngan-hang/${id}`, data);
}
export async function deleteCauHoi(id: string) {
  return axios.delete(`${ip3}/cau-hoi-ngan-hang/${id}`);
}
export async function importExcelNganHang(data: DataImportNganHang) {
  const form = new FormData();
  form.append('file', data.file);
  form.append('maMonHoc', data.maMonHoc);
  return axios.post(`${ip3}/thi-online/ngan-hang-de/import/cau-hoi-ngan-hang`, form);
}
export async function importWordNganHang(data: {
  file: any;
  maMonHoc: string;
  khoiKienThuc: string;
  doKho: string;
}) {
  const form = new FormData();
  form.append('file', data.file);
  form.append('maMonHoc', data.maMonHoc);
  form.append('khoiKienThuc', data.khoiKienThuc);
  form.append('doKho', data.doKho);
  return axios.post(`${ip3}/thi-online/ngan-hang-de/import/cau-hoi-ngan-hang-by-word`, form);
}
