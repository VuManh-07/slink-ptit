import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';

export async function getMember(data: { page: number; limit: number; condition: any }) {
  return axios.get(`${ip3}/membership/list-membership`, {
    params: data,
  });
}

export async function updateMember(id: string, data: IRanking.IDataReq) {
  return axios.put(`${ip3}/membership/${id}`, data);
}
export async function deleteMember(id: string) {
  return axios.delete(`${ip3}/membership/${id}`);
}
export async function createMember(data: IRanking.IDataReq) {
  return axios.post(`${ip3}/membership`, data);
}
export async function getLichSuDiem(data: { page: number; limit: number; condition: any }) {
  return axios.get(`${ip3}/membership/list-lich-su-diem`, {
    params: { ...data },
  });
}
