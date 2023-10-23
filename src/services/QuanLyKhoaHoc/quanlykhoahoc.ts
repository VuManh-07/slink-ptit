/* eslint-disable no-param-reassign */
import axios from '@/utils/axios';
import type { ELoaiCongTrinhKhoaHoc } from '@/utils/constants';
import { ip3 } from '@/utils/ip';
import type { KhaiBaoNCKH } from '../KhaiBaoNCKH/typings';

const url = 'quan-ly-khcn';

export async function getTongKetByUser(condition: any) {
  return axios.get(`${ip3}/quan-ly-khoa-hoc/thong-ke-khoa-hoc/me/all`, { params: condition });
}

export async function getDSGVDaKhaiBao(payload: { page: number; limit: number; condition: any }) {
  return axios.get(`${ip3}/${url}/nguoi-khai-bao-kh/pageable`, { params: payload });
}

export async function getTongKetByCode(payload: { condition: any }) {
  return axios.get(`${ip3}/${url}/thong-ke-khoa-hoc/nhan-vien/all`, { params: payload });
}

export async function countThongKeKhoaHoc(payload: { condition: any }) {
  return axios.get(`${ip3}/${url}/thong-ke-khoa-hoc/count`, { params: payload });
}

export async function exportGioNCKHByNamAndMaDonVi(maDonVi: string, nam: number) {
  return axios.get(`${ip3}/${url}/xuat-bao-cao/thong-ke-gio-nckh/don-vi/${maDonVi}/nam/${nam}`, {
    responseType: 'arraybuffer',
  });
}

export async function exportGioNCKHByNam(nam: number) {
  return axios.get(`${ip3}/${url}/xuat-bao-cao/thong-ke-gio-nckh/all/nam/${nam}`, {
    responseType: 'arraybuffer',
  });
}

export async function exportCongTrinhNCKHByMaDinhDanhAndNamThongKe(
  maDinhDanh: string,
  namThongKe: number,
) {
  return axios.get(
    `${ip3}/${url}/xuat-bao-cao/thong-ke-cong-trinh-nckh/nhan-vien/${maDinhDanh}/nam/${namThongKe}`,
    {
      responseType: 'arraybuffer',
    },
  );
}

export async function exportCongTrinhNCKHByNam(nam: number) {
  return axios.get(`${ip3}/${url}/xuat-bao-cao/thong-ke-cong-trinh-nckh/me/nam/${nam}`, {
    responseType: 'arraybuffer',
  });
}

export async function exportBaiBaoKhoaHoc(payload: { condition: any }) {
  return axios.get(`${ip3}/${url}/xuat-bao-cao/thong-ke-bai-bao`, {
    responseType: 'arraybuffer',
    params: payload,
  });
}

export async function exportSoLuongBaiBaoKhoaHocByNam(nam: number) {
  return axios.get(`${ip3}/${url}/xuat-bao-cao/thong-ke-bai-bao/don-vi/nam/${nam}`, {
    responseType: 'arraybuffer',
  });
}

export async function exportSoLuongBaiBaoKhoaHoc(payload: { condition: any }) {
  return axios.get(`${ip3}/${url}/xuat-bao-cao/thong-ke-so-luong-bai-bao`, {
    responseType: 'arraybuffer',
    params: payload,
  });
}

export async function exportDeTaiNCKH(payload: { condition: any }) {
  return axios.get(`${ip3}/${url}/xuat-bao-cao/thong-ke-de-tai`, {
    responseType: 'arraybuffer',
    params: payload,
  });
}

export async function exportSoLuongDeTai(payload: {
  condition: any;
  namThucHien?: number;
  namKhaiBao?: number;
}) {
  return axios.get(`${ip3}/${url}/xuat-bao-cao/thong-ke-de-tai-cac-mien`, {
    responseType: 'arraybuffer',
    params: payload,
  });
}

export async function exportPhieuXacNhanKetQuaThamDinh(payload: {
  namKhaiBao: number;
  maDonVi?: string;
}) {
  return axios.get(`${ip3}/${url}/xuat-bao-cao/thong-ke-tieu-chi-khuyen-khich`, {
    responseType: 'arraybuffer',
    params: payload,
  });
}

export async function exportTongHopDanhSachISISCOPUS(payload: { condition: any }) {
  return axios.get(`${ip3}/${url}/xuat-bao-cao/thong-ke-bai-bao-isi-scopus/nam`, {
    responseType: 'arraybuffer',
    params: payload,
  });
}

export async function getGioNckhMe(idDotKhaiBao: string) {
  return axios.get(`${ip3}/${url}/gio-nckh/me/dot-khai-bao/${idDotKhaiBao}`);
}

export async function putGioNckhMe(id: string, payload: KhaiBaoNCKH.GioNghienCuuKhoaHoc) {
  return axios.put(`${ip3}/${url}/gio-nckh/${id}`, payload);
}

export async function chuyenVienGetGioNckh(idLyLich: string, idDot: string) {
  return axios.get(`${ip3}/${url}/gio-nckh/ly-lich/${idLyLich}/dot-khai-bao/${idDot}`);
}

export async function exportDotKhaiBao(idDot: string, loaiCongTrinh: ELoaiCongTrinhKhoaHoc) {
  return axios.get(`${ip3}/${url}/khai-bao-nckh/export/dot-khai-bao/${idDot}`, {
    responseType: 'arraybuffer',
    params: { loaiCongTrinh },
  });
}

export const getThongKeCongTrinhMe = (idDotKhaiBao: string, loai?: ELoaiCongTrinhKhoaHoc) => {
  return axios.get(`${ip3}/${url}/thong-ke/general/me/dot-khai-bao/${idDotKhaiBao}`, {
    params: { loai },
  });
};
export const getThongKeCongTrinhByIdDot = (idDotKhaiBao: string, loai?: ELoaiCongTrinhKhoaHoc) => {
  return axios.get(`${ip3}/${url}/thong-ke/general/dot-khai-bao/${idDotKhaiBao}`, {
    params: { loai },
  });
};
export const getThongKeCongTrinhByIdGiangVien = (
  idDotKhaiBao: string,
  idGiangVien: string,
  loai?: ELoaiCongTrinhKhoaHoc,
) => {
  return axios.get(
    `${ip3}/${url}/thong-ke/general/nv/${idGiangVien}/dot-khai-bao/${idDotKhaiBao}`,
    {
      params: { loai },
    },
  );
};
