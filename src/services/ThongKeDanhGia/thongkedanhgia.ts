/* eslint-disable no-param-reassign */
import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';

export async function getThongKe(payload: { page: number; limit: number; idDot?: string }) {
  const { idDot } = payload;
  delete payload.idDot;
  return axios.get(`${ip3}/danh-gia-giang-vien/thong-ke/pageable/dot-danh-gia/${idDot}`, {
    params: payload,
  });
}
