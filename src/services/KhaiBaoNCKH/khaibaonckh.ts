import axios from '@/utils/axios';
import type { EKetQuaDuyet, ELoaiCongTrinhKhoaHoc, EModeKhaiBao } from '@/utils/constants';
import { ip3 } from '@/utils/ip';
import type { KhaiBaoNCKH } from './typings';

const url = 'quan-ly-khcn';

export async function getKhaiBaoNCKH(
  payload: {
    page: number;
    limit: number;
    mode?: EModeKhaiBao;
    condition?: any;
  },
  isCaNhan: boolean,
) {
  return axios.get(`${ip3}/${url}/khai-bao-nckh/pageable${isCaNhan ? '/cb-gv' : ''}`, {
    params: payload,
  });
}

export async function getQuanLyKhoaHoc(
  payload: {
    page: number;
    limit: number;
    condition?: any;
  },
  isCaNhan: boolean,
) {
  return axios.get(`${ip3}/${url}/cong-trinh-khoa-hoc/pageable${isCaNhan ? '/cb-gv' : ''}`, {
    params: payload,
  });
}

export async function getKhaiBaoNCKHById(idKhaiBao: string) {
  return axios.get(`${ip3}/${url}/khai-bao-nckh/${idKhaiBao}`);
}

export async function postKhaiBaoNCKH(payload: KhaiBaoNCKH.PayloadKhaiBaoNCKH) {
  return axios.post(`${ip3}/${url}/khai-bao-nckh`, payload);
}

export async function putKhaiBaoNCKH(
  idKHCN: string,
  payload: KhaiBaoNCKH.PayloadKhaiBaoNCKH,
  isCaNhan: boolean,
) {
  return axios.put(`${ip3}/${url}/khai-bao-nckh/${idKHCN}${isCaNhan ? '/cb-gv' : ''}`, payload);
}

export async function postQuanLyKhoaHoc(payload: KhaiBaoNCKH.QuanLyKhoaHoc) {
  return axios.post(`${ip3}/${url}/cong-trinh-khoa-hoc`, payload);
}

export async function putQuanLyKhoaHoc(idQLKH: string, payload: KhaiBaoNCKH.QuanLyKhoaHoc) {
  return axios.put(`${ip3}/${url}/cong-trinh-khoa-hoc/${idQLKH}`, payload);
}

export async function getQuanLyKhoaHocById(idCongTrinh: string) {
  return axios.get(`${ip3}/${url}/cong-trinh-khoa-hoc/${idCongTrinh}`);
}

export async function getUserPageable(payload: { page: number; limit: number; condition: any }) {
  return axios.get(`${ip3}/odoo-user/pageable`, { params: payload });
}

export async function duyetKhaiBaoNCKH(payload: {
  idLyLichList: string[];
  ketQuaDuyet: EKetQuaDuyet;
  ghiChu: string;
}) {
  return axios.put(`${ip3}/${url}/khai-bao-nckh/duyet`, payload);
}

export async function importData(path: string, payload: { file: string | Blob }) {
  const form = new FormData();
  form.append('file', payload?.file);
  return axios.post(`${ip3}/${url}/import/${path}`, form);
}

export async function deleteKhaiBaoNCKH(idKhaiBaoNCKH: string, isCaNhan: boolean) {
  return axios.delete(`${ip3}/${url}/khai-bao-nckh/${idKhaiBaoNCKH}${isCaNhan ? '/cb-gv' : ''}`);
}

export async function getGioNghienCuuKhaiBao(idKhaiBaoNCKH: string) {
  return axios.get(`${ip3}/${url}/tinh-gio/khai-bao/${idKhaiBaoNCKH}`);
}

export async function getAllGioNghienCuuKhaiBao(idKhaiBaoNCKH: string) {
  return axios.get(`${ip3}/${url}/tinh-gio/khai-bao/${idKhaiBaoNCKH}/all`);
}

export async function resetTrangThaiKhaiBao(idKhaiBaoNCKH: string) {
  return axios.put(`${ip3}/${url}/khai-bao-nckh/reset-trang-thai/khai-bao/${idKhaiBaoNCKH}`);
}

export async function searchCongTrinhTrungByTen(payload: {
  ten: string;
  danhMucNCKH: ELoaiCongTrinhKhoaHoc;
  page: number;
  limit: number;
  id?: string;
}) {
  return axios.get(`${ip3}/${url}/search/cong-trinh-khoa-hoc`, { params: payload });
}

export async function getGioNghienCuuKhoaHocPageable(payload: {
  page: number;
  limit: number;
  condition?: any;
}) {
  return axios.get(`${ip3}/${url}/gio-nckh/pageable`, { params: payload });
}

export async function duyetAllTongGioNCKH(idDotKhaiBao: string) {
  return axios.get(`${ip3}/${url}/gio-nckh/duyet/all/dot-khai-bao/${idDotKhaiBao}`);
}

export async function duyetTongGioNCKH(idGioNCKH: string) {
  return axios.get(`${ip3}/${url}/gio-nckh/${idGioNCKH}/duyet`);
}

export async function xacNhanTongGioNCKH(idGioNCKH: string) {
  return axios.get(`${ip3}/${url}/gio-nckh/${idGioNCKH}/xac-nhan`);
}

export const exportMauThongKeCongTrinhCBGV = (nam: number) => {
  return axios.get(`${ip3}/${url}/bao-cao/gv/me/nam/${nam}`, { responseType: 'arraybuffer' });
};
export const exportPhongQLKHMauThongKeCongTrinhCBGV = (maGV: string, nam: number) => {
  return axios.get(`${ip3}/${url}/bao-cao/gv/${maGV}/nam/${nam}`, { responseType: 'arraybuffer' });
};
export const exportMauThongKeAllDonViPhongQLKH = (nam: number) => {
  return axios.get(`${ip3}/${url}/bao-cao/gio/all/nam/${nam}`, { responseType: 'arraybuffer' });
};
export const exportMauThongKeDonViPhongQLKH = (idDonVi: number, nam: number) => {
  return axios.get(`${ip3}/${url}/bao-cao/gio/don-vi/${idDonVi}/nam/${nam}`, {
    responseType: 'arraybuffer',
  });
};
export const exportMauThongKeDonViTruongDonVi = (nam: number) => {
  return axios.get(`${ip3}/${url}/bao-cao/gio/my-don-vi/nam/${nam}`, {
    responseType: 'arraybuffer',
  });
};
export const exportMauThamDinhDonVi = (idDonVi: number, nam: number, tinhDiem: boolean) => {
  return axios.get(
    `${ip3}/${url}/bao-cao/tham-dinh/don-vi/${idDonVi}/nam/${nam}?tinhDiem=${tinhDiem}`,
    {
      responseType: 'arraybuffer',
    },
  );
};
export const exportMauThamDinhAll = (nam: number, tinhDiem: boolean) => {
  return axios.get(`${ip3}/${url}/bao-cao/tham-dinh/all/nam/${nam}?tinhDiem=${tinhDiem}`, {
    responseType: 'arraybuffer',
  });
};

export const exportDanhSachBaiBaoTheoNam = (nam: number) => {
  return axios.get(`${ip3}/${url}/bao-cao/danh-sach-bai-bao/nam/${nam}`, {
    responseType: 'arraybuffer',
  });
};

export const exportCongTrinhTuongUngDeTai = (
  nam: number,
  maDonVi?: string,
  maDinhDanh?: string,
) => {
  return axios.get(`${ip3}/${url}/bao-cao/tuong-ung-de-tai/nam/${nam}`, {
    params: { maDonVi, maDinhDanh },
    responseType: 'arraybuffer',
  });
};

export const exportSoLuongDeTaiTheoNam = (nam: number) => {
  return axios.get(`${ip3}/${url}/bao-cao/so-luong-de-tai/nam/${nam}`, {
    responseType: 'arraybuffer',
  });
};

export const exportSoLuongBaiBaoTheoNam = (nam: number) => {
  return axios.get(`${ip3}/${url}/bao-cao/so-luong-bai-bao/nam/${nam}`, {
    responseType: 'arraybuffer',
  });
};
