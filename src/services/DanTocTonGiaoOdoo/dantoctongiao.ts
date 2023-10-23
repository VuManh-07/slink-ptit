import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';

const url = 'odoo-slink-core';

export async function getDanTocOdoo() {
  return axios.get(`${ip3}/${url}/all-dan-toc`);
}

export async function getTonGiaoOdoo() {
  return axios.get(`${ip3}/${url}/all-ton-giao`);
}
