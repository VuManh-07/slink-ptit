import { ip3 } from '@/utils/ip';
import axios from 'axios';

const url = 'quan-ly-khcn/lich-su-chinh-sua';

export const getLichSuChinhSuaPageable = (
  idKhaiBao: string,
  payload: {
    page: number;
    limit: number;
  },
  isCaNhan: boolean,
) => {
  return axios.get(`${ip3}/${url}/${idKhaiBao}${isCaNhan ? '/cb-gv' : ''}`, { params: payload });
};
