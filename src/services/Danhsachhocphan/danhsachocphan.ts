import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';

export async function getDanhSachHocPhan(idHinhThuc: number) {
  return axios.get(`${ip3}/odoo-ky-hoc/all`, {
    params: { idHinhThuc: idHinhThuc,kyHocOrder:true },
  });
}
export async function getDanhSachMon(cond: any) {
  return axios.get(`${ip3}/odoo-slide-channel/admin/all`, {
    params: {
      condition: cond,
    },
  });
}
