import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';

export async function getCoffee(payload: {
  data: {
    page: number;
    limit: number;
    condition: any;
  };
}) {
  return axios.get(`${ip3}/p-coffee/pageable`, {
    params: { ...payload.data, condition: { ...payload.data.condition }, },
    // sort: { _id: 1 }
  });
}

export async function confirmCoffee(id: string, data: any) {
  return axios.put(`${ip3}/p-coffee/${id}/xac-nhan`, data);
}
