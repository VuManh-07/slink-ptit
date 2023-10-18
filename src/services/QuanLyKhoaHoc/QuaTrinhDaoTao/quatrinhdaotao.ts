import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';

export async function putQTDT(payload: any) {
  console.log('payload>>>', payload);
  return axios.put(`${ip3}/quan-ly-khoa-hoc/qua-trinh-dao-tao`, payload);
}

export async function getQTDT() {
  return axios.get(`${ip3}/quan-ly-khoa-hoc/qua-trinh-dao-tao`);
}
