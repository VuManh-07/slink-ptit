import type { dataReqCaThi, dataReqCreateCaThi, dataReqTaoCauTrucDe } from '@/models/quanlycathi';
import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';
export interface DataImportExcel {
  file: any;
  maMonHoc: string;
  maKyHoc: string;
  soPhutThi: string;
}
export async function getCauHoi(data: dataReqCaThi, condition: any) {
  return axios.get(`${ip3}/thi-online/ngan-hang-de`, {
    params: {
      ...data,
      condition: condition,
    },
  });
}
export async function createCathi(data: dataReqCreateCaThi) {
  return axios.post(`${ip3}/thi-online/ngan-hang-de`, data);
}
export async function dinhChiThi(data: { maDinhDanh: string; idCaThi: string;loai:string }) {
  return axios.post(`${ip3}/thi-online/ngan-hang-de/dinh-chi-thi`, {
    ...data
    }
  );
}
export async function getMaMon(data: { condition: string | undefined }) {
  return axios.get(`${ip3}/odoo-slide-channel/admin/all`, { params: data });
}

export async function getLopSinhVien(data: {
  condition: { ma_ky_hoc: string; ma_hoc_phan: string };
}) {
  return axios.get(`${ip3}/odoo-lop-tin-chi/all`, { params: data });
}
export async function getDanhSachGiaoVien(data: { page: number; limit: number; condition: any }) {
  return axios.get(`${ip3}/odoo-user/pageable`, {
    params: {
      page: data.page,
      limit: data.limit,
      condition: {
        ...data.condition,
        vai_tro: 'nhan_vien',
      },
    },
  });
}
export async function createCauTrucDe(data: dataReqTaoCauTrucDe) {
  return axios.put(`${ip3}/thi-online/ngan-hang-de/admin/tao-cau-truc-de`, data);
}
export async function createDeThi(data: string[]) {
  return axios.put(`${ip3}/thi-online/ngan-hang-de/admin/tao-de`, data);
}
export async function deleteCaThi(idLichThi: string[]) {
  return axios.delete(`${ip3}/thi-online/ngan-hang-de/delete-list-ca-thi`, { data: idLichThi });
}
export async function updateCaThi(idCaThi: string, data: dataReqCreateCaThi) {
  return axios.put(`${ip3}/thi-online/ngan-hang-de/${idCaThi}`, data);
}

export async function getStatusCaThi(idCaThi: string) {
  return axios.get(`${ip3}/thi-online/ngan-hang-de/${idCaThi}/list-sv-trang-thai`);
}
export async function getAllLogs(idCaThi: string) {
  return axios.get(`${ip3}/log-action/${idCaThi}/list-log-thi`);
}
export async function getLogsByMaDinhDanh(idCaThi: string, maDinhDanh: string) {
  return axios.get(`${ip3}/log-action/chi-tiet-log-sinh-vien`, {
    params: {
      idCaThi: idCaThi,
      maDinhDanh: maDinhDanh,
    },
  });
}
export async function getDiem(data: { cond: { nganHangDeId: string; ma_dinh_danh: string } }) {
  return axios.get(`${ip3}/thi-online/ngan-hang-de/ket-qua-thi`, { params: data });
}
export async function exportDiem(idCaThi: string) {
  return axios.get(`${ip3}/thi-online/ngan-hang-de/${idCaThi}/export-excel/ket-qua-thi`, {
    responseType: 'arraybuffer',
  });
}
export async function importExcelCaThi(data: DataImportExcel) {
  const form = new FormData();
  form.append('file', data?.file);
  form.append('maMonHoc', data?.maMonHoc);
  form.append('maKyHoc', data?.maKyHoc);
  form.append('soPhutThi', data?.soPhutThi);
  return axios.post(`${ip3}/thi-online/ngan-hang-de/import/ca-thi`, form);
}
export async function getTemplateCauHoi() {
  return axios.get(`${ip3}/thi-online/ngan-hang-de/export-excel/file-mau-cau-hoi`, {
    responseType: 'arraybuffer',
  });
}
export async function getTemplateCaThi() {
  return axios.get(`${ip3}/thi-online/ngan-hang-de/export-excel/file-mau-ca-thi`, {
    responseType: 'arraybuffer',
  });
}
export async function getDeThi(idCaThi: string, maSinhVien: string) {
  return axios.get(`${ip3}/thi-online/ngan-hang-de/chi-tiet-bai-lam-sinh-vien`, {
    params: {
      idCaThi: idCaThi,
      maDinhDanh: maSinhVien,
    },
  });
}
