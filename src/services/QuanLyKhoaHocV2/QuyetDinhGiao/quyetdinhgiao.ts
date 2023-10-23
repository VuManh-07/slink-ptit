import { ip3 } from '@/utils/ip';
import axios from 'axios';

const url = 'de-tai-khcn/quyet-dinh-giao';

export const giaoQuyetDinh = (idQuyetDinh: string) => {
  return axios.put(`${ip3}/${url}/${idQuyetDinh}/giao-qd`);
};

export const exportQuyetDinhGiao = (idQuyetDinh: string) => {
  return axios.get(`${ip3}/${url}/${idQuyetDinh}/export`, { responseType: 'arraybuffer' });
};
