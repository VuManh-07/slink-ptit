import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';

export async function getAllDonVi(params?: any) {
  return axios.get(`${ip3}/odoo-don-vi/all`, { params });
}

export async function postDonVi(payload: DonVi.Record) {
  return axios.post(`${ip3}/odoo-don-vi`, payload);
}

export async function putDonVi(payload: DonVi.Record, idDonVi: number) {
  return axios.put(`${ip3}/odoo-don-vi/${idDonVi}`, payload);
}

export async function delDonVi(idDonVi: number) {
  return axios.delete(`${ip3}/odoo-don-vi/${idDonVi}`);
}
