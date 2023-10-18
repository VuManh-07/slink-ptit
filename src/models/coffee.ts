import {
  addBieuMau,
  delBieuMau,
  kichHoatBieuMau,
  getBieuMauById,
  getBieuMauAdmin,
  getBieuMauUser,
  putBieuMau,
} from '@/services/BieuMau/bieumau';
import { message } from 'antd';
import { useState } from 'react';
import { confirmCoffee, getCoffee } from '@/services/Coffee/coffee';
import moment from 'moment';

export default () => {
  const [danhSach, setDanhSach] = useState<BieuMau.Record[]>([]);
  const [loaiBieuMau, setLoaiBieuMau] = useState<string | undefined>(undefined);
  const [record, setRecord] = useState<BieuMau.Record>({} as BieuMau.Record);
  const [loading, setLoading] = useState<boolean>(true);
  const [edit, setEdit] = useState<boolean>(false);
  const [visibleForm, setVisibleForm] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [condition, setCondition] = useState<any>({
    trangThaiDon: { $ne: 'Giỏ hàng' },
    createdAt: {
      $lte: moment().endOf('day').toDate(),
      $gte: moment().startOf('day').toDate(),
    },
  });
  const [filterInfo, setFilterInfo] = useState<any>({});
  const getCoffeeModel = async (data: { page: number; limit: number }) => {
    setLoading(true);
    // setCondition(data.condition);
    const res = await getCoffee({ data: { ...data, condition: condition } });
    if (res) {
      setDanhSach(res?.data?.data?.result);
      setTotal(res?.data?.data?.total);
    }
    setLoading(false);
  };
  const confirm = async (
    id: string,
    status: 'Chờ xử lý' | 'Hoàn thành' | 'Từ chối' | 'Hoàn tất' | string,
    reason?: string,
  ) => {
    setLoading(true);
    let data: any;
    if (reason) {
      data = {
        trangThaiDon: status,
        liDoTuChoi: reason,
      };
    } else {
      data = {
        trangThaiDon: status,
      };
    }
    const res = await confirmCoffee(id, data);
    if (res) {
    }
    setLoading(false);
  };
  return {
    setRecord,
    edit,
    setEdit,
    visibleForm,
    setVisibleForm,
    setLoaiBieuMau,
    setPage,
    setLimit,
    danhSach,
    record,
    loading,
    total,
    page,
    loaiBieuMau,
    limit,
    getCoffeeModel,
    condition,
    setCondition,
    filterInfo,
    setFilterInfo,
    confirm,
    setLoading,
  };
};
