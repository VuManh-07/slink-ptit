import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';

export async function getRank() {
  return axios.get(`${ip3}/hang-the/all`);
}

export async function updateRank(id: string, data: IRanking.IDataReq) {
  return axios.put(`${ip3}/hang-the/${id}`, data);
}
