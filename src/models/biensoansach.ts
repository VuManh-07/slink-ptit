import { get, post, udp, del } from '@/services/QuanLyKhoaHoc/BienSoanSach/biensoansach';
import { useState } from 'react';
import { message } from 'antd';

export default () => {
  const [danhSach, setDanhSach] = useState<BienSoanSach.Record[]>([]);
  const [record, setRecord] = useState<BienSoanSach.Record>({} as BienSoanSach.Record);
  const [filterInfo, setFilterInfo] = useState<any>({});
  const [condition, setCondition] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [visibleForm, setVisibleForm] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [year, setYear] = useState<number>(2022);
  const getModel = async () => {
    setLoading(true);
    const response = await get({
      page,
      limit,
      condition: { ...condition, namKhaiBao: year },
    });
    setDanhSach(response?.data?.data?.result ?? []);
    setTotal(response?.data?.data?.total);
    setLoading(false);
  };

  const postModel = async (payload: any) => {
    try {
      setLoading(true);
      await post(payload);
      message.success('Thêm mới thành công');
      setLoading(false);
      setVisibleForm(false);
      getModel();
    } catch (error) {
      setLoading(false);
    }
  };

  const udpModel = async (payload: any) => {
    try {
      setLoading(true);
      const response = await udp(payload);
      message.success('Cập nhật thành công');
      setLoading(false);
      setVisibleForm(false);
      setRecord(response?.data?.data ?? {});
      getModel();
    } catch (error) {
      setLoading(false);
    }
  };

  const delModel = async (payload: any) => {
    setLoading(true);
    await del(payload);
    message.success('Xóa thành công');
    setLoading(false);
    setVisibleForm(false);
    getModel();
  };

  return {
    year,
    setYear,
    setLoading,
    filterInfo,
    condition,
    setFilterInfo,
    setCondition,
    delModel,
    postModel,
    getModel,
    setRecord,
    visibleForm,
    setVisibleForm,
    udpModel,
    setPage,
    setLimit,
    danhSach,
    record,
    loading,
    total,
    page,
    limit,
    edit,
    setEdit,
  };
};
