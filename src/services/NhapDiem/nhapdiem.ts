import { ip3 } from '@/utils/ip';
import axios from 'axios';

export async function getProfile() {
  return axios.get(`${ip3}/odoo-user/me/profile`);
}
export async function getListCourse(idHinhThuc: number) {
  return axios.get(`${ip3}/odoo-ky-hoc/all`,{params:{idHinhThuc:idHinhThuc}});
}
export async function importExcelFile(id: string, template: string, file: any) {
  const form = new FormData();
  form.append('file', file);
  return axios.post(
    `${ip3}/odoo-sv-ltc-ds/nhan-vien/import-file-diem/ky-hoc/${id}?template=${template}`,
    form,
  );
}
export async function validateExcelFile(id: string, template: string, file: any) {
  const form = new FormData();
  form.append('file', file);
  return axios.post(
    `${ip3}/odoo-sv-ltc-ds/nhan-vien/validate-file-diem/ky-hoc/${id}?template=${template}`,
    form,
  );
}
