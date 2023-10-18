import type { ETrangThaiDuyetThanhVien, ETypeRequestThanhVien } from '@/utils/constants';
import { ip3 } from '@/utils/ip';
import axios from 'axios';

const url = 'quan-ly-khcn/request-thanh-vien';

export const canBoQLKHGetRequestPageable = (payload: {
  page: number;
  limit: number;
  condition?: any;
}) => {
  return axios.get(`${ip3}/${url}/pageable`, { params: payload });
};

export const canBoGiangVienGetRequestGuiDen = (payload: {
  page: number;
  limit: number;
  condition?: any;
}) => {
  return axios.get(`${ip3}/${url}/send-to-me/pageable`, { params: payload });
};

export const canBoGiangVienGetRequestGuiDi = (payload: {
  page: number;
  limit: number;
  condition?: any;
}) => {
  return axios.get(`${ip3}/${url}/me/pageable`, { params: payload });
};

export const sendRequest = (
  idCongTrinhTrungTen: string,
  payload: { type: ETypeRequestThanhVien; yeuCau: string },
) => {
  return axios.post(`${ip3}/${url}/khai-bao-khcn/${idCongTrinhTrungTen}`, payload);
};

export const duyetRequest = (
  idRequest: string,
  payload: {
    ketQuaDuyet: ETrangThaiDuyetThanhVien;
    lyDoDuyet: string;
  },
) => {
  return axios.put(`${ip3}/${url}/${idRequest}/duyet`, payload);
};
