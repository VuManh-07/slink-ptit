import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';

const url = 'odoo-tien-trinh-hoc-tap';

export function getTienTrinhChuongTrinhKhung() {
  return axios.get(`${ip3}/${url}/tien-trinh-khung`);
}

export function getTienTrinhThucTe() {
  return axios.get(`${ip3}/${url}/tien-trinh-thuc-te`);
}
