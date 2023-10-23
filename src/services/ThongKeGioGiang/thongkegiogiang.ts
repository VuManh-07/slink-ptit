import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';

const url = 'odoo-can-bo';

export default function getThongKeGioGiangByNam(idNam: number) {
  return axios.get(`${ip3}/${url}/thong-ke-gio-giang/nam-hoc/${idNam}`);
}
