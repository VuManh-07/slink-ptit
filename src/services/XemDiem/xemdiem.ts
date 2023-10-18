import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';


export async function getDiem(data: {
  page: number;
  limit: number;
  cond: any;
}) {
  return axios.get(`${ip3}/thi-online/ngan-hang-de/ket-qua-thi`, { params: data });
}
