import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';

export async function getSoLuotCheckInKhoa(cond?: any) {
  return axios.get(`${ip3}/ql-thu-vien/khoa/so-luot-checkin`, {
    params: {
      cond: cond,
    },
  });
}
export async function getSoLuotCheckInNganh(cond?: any) {
  return axios.get(`${ip3}/ql-thu-vien/nganh/so-luot-checkin`, {
    params: {
      cond: cond,
    },
  });
}
export async function getSoLuotCheckInThang(data: { thang: number; nam: number; cond?: any }) {
  return axios.get(`${ip3}/ql-thu-vien/thang/so-luot-checkin`, {
    params: {
      ...data,
    },
  });
}
export async function getSoLuotCheckInTop(cond?: any) {
  return axios.get(`${ip3}/ql-thu-vien/top/so-luot-checkin`, {
    params: {
      cond: cond,
    },
  });
}

export async function getThuVien(data: { page: number; limit: number; cond: any }) {
  return axios.get(`${ip3}/ql-thu-vien/pageable`, {
    params: {
      ...data,
    },
  });
}

export async function exportDanhSach(condition?: any) {
  return axios.get(`${ip3}/ql-thu-vien/export/danh-sach`, {
    params: { cond: condition },
    responseType: 'arraybuffer',
  });
}

export async function exportThongKeKhoa(data?: {
  thoiGianBatDau: string;
  thoiGianKetThuc: string;
}) {
  const thoiGianBatDau = data?.thoiGianBatDau;
  const thoiGianKetThuc = data?.thoiGianKetThuc;
  return axios.get(`${ip3}/ql-thu-vien/export/thong-ke-khoa`, {
    params: { thoiGianBatDau, thoiGianKetThuc },
    responseType: 'arraybuffer',
  });
}

export async function exportThongKeNganh(data?: {
  thoiGianBatDau: string;
  thoiGianKetThuc: string;
}) {
  const thoiGianBatDau = data?.thoiGianBatDau;
  const thoiGianKetThuc = data?.thoiGianKetThuc;
  return axios.get(`${ip3}/ql-thu-vien/export/thong-ke-nganh`, {
    params: { thoiGianBatDau, thoiGianKetThuc },
    responseType: 'arraybuffer',
  });
}
export async function exportThongKeTheoTop(data?: {
  thoiGianBatDau: string;
  thoiGianKetThuc: string;
}) {
  const thoiGianBatDau = data?.thoiGianBatDau;
  const thoiGianKetThuc = data?.thoiGianKetThuc;
  return axios.get(`${ip3}/ql-thu-vien/export/top`, {
    params: { thoiGianBatDau, thoiGianKetThuc },
    responseType: 'arraybuffer',
  });
}

export async function exportThongKeTheoThang(data?: { thang: number; nam: number }) {
  const thang = data?.thang.toString();
  const nam = data?.nam.toString();
  return axios.get(`${ip3}/ql-thu-vien/export/thong-ke-thang`, {
    params: { thang, nam },
    responseType: 'arraybuffer',
  });
}

//quan ly dot
export async function getDot(data: { page: number; limit: number; cond: any }) {
  return axios.get(`${ip3}/quan-ly-dot-nop-luan-van-luan-an-khoa-luan/pageable`, {
    params: {
      ...data,
    },
  });
}
export async function getAllDot(data: { cond: any }) {
  return axios.get(`${ip3}/quan-ly-dot-nop-luan-van-luan-an-khoa-luan/all`, {
    params: {
      ...data,
    },
  });
}export async function getAllDotSinhVien(data: { cond: any }) {
  return axios.get(`${ip3}/quan-ly-dot-nop-luan-van-luan-an-khoa-luan/me/all`, {
    params: {
      ...data,
    },
  });
}
export async function createDot(data: any) {
  return axios.post(`${ip3}/quan-ly-dot-nop-luan-van-luan-an-khoa-luan`, data);
}
export async function editDot(id: string, data: any) {
  return axios.put(`${ip3}/quan-ly-dot-nop-luan-van-luan-an-khoa-luan/${id}`, data);
}
export async function deleteDot(id: string) {
  return axios.delete(`${ip3}/quan-ly-dot-nop-luan-van-luan-an-khoa-luan/${id}`);
}
export async function activeDot(id: string) {
  return axios.put(`${ip3}/quan-ly-dot-nop-luan-van-luan-an-khoa-luan/${id}/active`);
}
export async function unActiveDot(id: string) {
  return axios.put(`${ip3}/quan-ly-dot-nop-luan-van-luan-an-khoa-luan/${id}/unactive`);
}
//quan ly luan an
export async function getLuanAn(data: { page: number; limit: number; cond: any }) {
  return axios.get(`${ip3}/quan-ly-luan-an-luan-van-khoa-luan/pageable`, {
    params: {
      ...data,
    },
  });
}
export async function getLuanAnSinhVien(data: { page: number; limit: number; cond: any }) {
  return axios.get(`${ip3}/quan-ly-luan-an-luan-van-khoa-luan/my/pageable`, {
    params: {
      ...data,
    },
  });
}
export async function createLuanAn(data: any) {
  return axios.post(`${ip3}/quan-ly-luan-an-luan-van-khoa-luan/luan-an`, data);
}
export async function createLuanAnAdmin(data: any) {
  return axios.post(`${ip3}/quan-ly-luan-an-luan-van-khoa-luan/admin/luan-an-luan-van`, data);
}
export async function editLuanAn(id: string, data: any) {
  return axios.put(`${ip3}/quan-ly-luan-an-luan-van-khoa-luan/${id}`, data);
}export async function editLuanAnSinhVien(id: string, data: any) {
  return axios.put(`${ip3}/quan-ly-luan-an-luan-van-khoa-luan/user/${id}`, data);
}
export async function deleteLuanAn(id: string) {
  return axios.delete(`${ip3}/quan-ly-luan-an-luan-van-khoa-luan/${id}`);
}export async function deleteLuanAnSinhVien(id: string) {
  return axios.delete(`${ip3}/quan-ly-luan-an-luan-van-khoa-luan/user/${id}`);
}
export async function changeTrangThaiLuanAn(id: string, data: any) {
  return axios.put(`${ip3}/quan-ly-luan-an-luan-van-khoa-luan/${id}/status`, data);
}
export async function exportLuanAn(id: string) {
  return axios.get(`${ip3}/quan-ly-luan-an-luan-van-khoa-luan/export/luan-an/${id}`, {
    responseType: 'arraybuffer',
  });
}
export async function exportLuanVan(id: string) {
  return axios.get(`${ip3}/quan-ly-luan-an-luan-van-khoa-luan/export/luan-van-khoa-luan/${id}`, {
    responseType: 'arraybuffer',
  });
}
//quan ly luan van
export async function getLuanVan(cond?: any) {
  return axios.get(`${ip3}/ql-thu-vien/khoa/so-luot-checkin`, {
    params: {
      cond: cond,
    },
  });
}
export async function createLuanVan(data: any) {
  return axios.post(`${ip3}/quan-ly-luan-an-luan-van-khoa-luan/luan-van-khoa-luan`, data);
}
export async function createLuanVanAdmin(data: any) {
  return axios.post(`${ip3}/quan-ly-luan-an-luan-van-khoa-luan/admin/luan-an-luan-van`, data);
}
export async function editLuanVan(id: string, data: any) {
  return axios.put(`${ip3}/quan-ly-luan-an-luan-van-khoa-luan/${id}`, data);
}
export async function editLuanVanSinhVien(id: string, data: any) {
  return axios.put(`${ip3}/quan-ly-luan-an-luan-van-khoa-luan/user/${id}`, data);
}
export async function deleteLuanVan(cond?: any) {
  return axios.get(`${ip3}/ql-thu-vien/khoa/so-luot-checkin`, {
    params: {
      cond: cond,
    },
  });
}
export async function getAllChuyenNganh(cond?: any) {
  return axios.get(`${ip3}/odoo-danh-muc-chuyen-nganh/all`, { params: cond });
}
