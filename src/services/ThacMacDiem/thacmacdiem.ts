import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';

const url = 'thac-mac-diem';

export async function adminGetPageable(payload: {
  page: number;
  limit: number;
  condition?: any;
  idHinhThuc?: number;
}) {
  return axios.get(`${ip3}/${url}/pageable`, { params: payload });
}

export async function sinhVienGetPageable(payload: {
  page: number;
  limit: number;
  condition?: any;
}) {
  return axios.get(`${ip3}/${url}/me/pageable`, { params: payload });
}

export async function sinhVienPostThacMacDiem(payload: {
  kyHocId: number;
  hocPhanId: number;
  noiDung: string;
  urlDinhKem: string;
}) {
  return axios.post(`${ip3}/${url}`, payload);
}

export async function adminTraLoiThacMac(idThacMac: string, payload: { noiDungDuyet: string }) {
  return axios.post(`${ip3}/${url}/${idThacMac}/tra-loi`, payload);
}
