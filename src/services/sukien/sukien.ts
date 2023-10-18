import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';

export async function getSuKienUserByNam(year: number, selectValue: string) {
  return axios.get(`${ip3}/odoo-su-kien/user/year/${year}?types=${selectValue}`);
}

export async function getSuKienFromDateToDate(firstDay: string, lastDay: string, selectValue: any) {
  return axios.get(`${ip3}/odoo-su-kien/user/from/${firstDay}/to/${lastDay}?types=${selectValue}`);
}

export async function getSuKienTheoNamVaThang(year: number, month: number, selectValue: any) {
  return axios.get(`${ip3}/odoo-su-kien/user/year/${year}/month/${month}?types=${selectValue}`);
}

export async function postSuKienAdmin(payload: any) {
  return axios.post(`${ip3}/odoo-su-kien`, payload);
}

export async function postSuKienCaNhan(payload: any) {
  return axios.post(`${ip3}/odoo-su-kien/me`, payload);
}

export async function putSuKienCaNhan(id: string, payload: any) {
  return axios.put(`${ip3}/odoo-su-kien/me/${id}`, payload);
}
export async function putSuKienAdmin(id: string, payload: any, kieuUpdate: string) {
  return axios.put(`${ip3}/odoo-su-kien/${id}?kieuUpdate=${kieuUpdate}`, payload);
}

export async function getSuKienPageable(payload: { page: number; limit: number; condition: any }) {
  return axios.get(`${ip3}/odoo-su-kien`, { params: payload });
}

export async function deleteSuKien(idSuKien: string, kieuXoa?: string) {
  return axios.delete(`${ip3}/odoo-su-kien/${idSuKien}?kieuXoa=${kieuXoa}`);
}

export async function deleteSuKienCaNhan(idSuKien: string) {
  return axios.delete(`${ip3}/odoo-su-kien/me/${idSuKien}`);
}
