import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';
import { buildFormData } from '@/utils/utils';
import moment from 'moment';

const url = 'log-thanh-toan-bidv';

export async function getList(params: any) {
  const { start, end } = params;
  return axios.get(`${ip3}/${url}/giao-dich/pageable`, {
    params: {
      ...params,
      start: moment(start).format('yyyy-MM-DD'),
      end: moment(end).format('yyyy-MM-DD'),
    },
  });
}

export async function getThongKe(params: { type: DoiSoatThanhToan.LoaiThongKe }) {
  return axios.get(`${ip3}/${url}/thong-ke`, { params });
}

export async function getThongKeTheoNgay(params: { start: string; end: string }) {
  const { start, end } = params;
  return axios.get(`${ip3}/${url}/thong-ke-theo-ngay`, {
    params: {
      start: moment(start).format('yyyy-MM-DD'),
      end: moment(end).format('yyyy-MM-DD'),
    },
  });
}

export async function exportBaoCaoThanhToan(params: { start: string; end: string }) {
  const { start, end } = params;
  return axios.get(`${ip3}/${url}/thong-ke-theo-ngay/export`, {
    params: {
      start: moment(start).format('yyyy-MM-DD'),
      end: moment(end).format('yyyy-MM-DD'),
    },
    responseType: 'arraybuffer',
  });
}

export const getSaoKePageable = async (payload: {
  condition: any;
  page: number;
  limit: number;
}) => {
  return axios.get(`${ip3}/${url}/sao-ke/pageable`, { params: payload });
};

export async function importLogCongThanhToan(payload: { file: any }) {
  const formData = buildFormData(payload);
  return axios.post(`${ip3}/${url}/log-cong-tt`, formData);
}

export async function importLogSaoKe(payload: { file: any }) {
  const formData = buildFormData(payload);
  return axios.post(`${ip3}/${url}/log-sao-ke`, formData);
}

export const exportLogDaGhiNhanThanhToanAndChuaSaoKeBIDV = async (payload: {
  seconds?: number;
  minutes?: number;
  hours?: number;
  days?: number;
  dateString?: number;
}) => {
  return axios.get(`${ip3}/${url}/log-cong-tt`, { params: payload, responseType: 'arraybuffer' });
};

export const exportLogDaGhiNhanSaoKeBIDVAndChuaGhiNhanThanhToan = async (payload: {
  seconds?: number;
  minutes?: number;
  hours?: number;
  days?: number;
  dateString?: number;
}) => {
  return axios.get(`${ip3}/${url}/log-sao-ke`, { params: payload, responseType: 'arraybuffer' });
};

export const getDuLieuNenPageable = async (payload: {
  page: number;
  limit: number;
  condition?: any;
}) => {
  return axios.get(`${ip3}/${url}/du-lieu-nen/pageable`, { params: payload });
};
