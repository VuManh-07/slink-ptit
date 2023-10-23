import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';

export async function khoaSinhVien(payload: { page: number; limit: number; condition?: any }) {
  return axios.get(`${ip3}/odoo-khoa-sinh-vien/pageable`, { params: payload });
}
export async function sendDonVi(payload: {condition?: any }) {
  return axios.get(`${ip3}/odoo-don-vi/all`, { params: payload });
}


export async function sendNotification(payload: ThongBaoPCoffee.PostRecord) {
  return axios.post(`${ip3}/notification/general`, payload);
}
