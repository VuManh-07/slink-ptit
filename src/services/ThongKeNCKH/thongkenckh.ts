import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';

const url = 'quan-ly-khcn';

export async function getDanhSachDaKhaiBao(
  idDot: string,
  payload: { page: number; limit: number; condition?: any },
) {
  return axios.get(`${ip3}/${url}/thong-ke/danh-sach-khai-bao/pageable/dot/${idDot}`, {
    params: payload,
  });
}

export async function thongKeSoLuongCongTrinhTheoLoai(idDot: string) {
  return axios.get(`${ip3}/${url}/thong-ke/general/dot-khai-bao/${idDot}`);
}

export async function thongKeSoLuongNguoiKhaiBaoTheoDonVi(idDot: string, condition?: any) {
  return axios.get(`${ip3}/${url}/thong-ke/nguoi-kb-theo-dv/dot/${idDot}`, {
    params: { condition },
  });
}

export async function getTinhGioNCKHMe(payload: { namKhaiBao: number[] }) {
  return axios.get(`${ip3}/${url}/tinh-gio?namKhaiBao=%5B${payload.namKhaiBao.join('%2C')}%5D`);
}

export async function getTinhGioNCKHPageable(payload: {
  page: number;
  limit: number;
  condition?: any;
}) {
  return axios.get(`${ip3}/${url}/tinh-gio/pageable`, { params: payload });
}

export async function getTinhGioNCKH(payload: { namKhaiBao: number[]; idLyLichKhoaHoc: string }) {
  return axios.get(
    `${ip3}/${url}/tinh-gio/nguoi-khai-bao/${
      payload.idLyLichKhoaHoc
    }?namKhaiBao=%5B${payload.namKhaiBao.join('%2C')}%5D`,
  );
}
