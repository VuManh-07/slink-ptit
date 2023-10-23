import { getLichSuChinhSuaPageable } from '@/services/QuanLyKhoaHoc/LichSuChinhSua/lichsuchinhsua';
import { useState } from 'react';

export default () => {
  const [record, setRecord] = useState<LichSuChinhSua.Record>();
  const [danhSach, setDanhSach] = useState<LichSuChinhSua.Record[]>([]);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [condition, setCondition] = useState<any>({});
  const [filterInfo, setFilterInfo] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [visibleForm, setVisibleForm] = useState<boolean>(false);

  const getLichSuChinhSuaPageableModel = async (idKhaiBao: string, isCaNhan: boolean) => {
    setLoading(true);
    const res = await getLichSuChinhSuaPageable(idKhaiBao, { page, limit }, isCaNhan);
    setDanhSach(res?.data?.data?.result ?? []);
    setTotal(res?.data?.data?.total ?? 0);
    setLoading(false);
  };

  return {
    record,
    setRecord,
    danhSach,
    setDanhSach,
    page,
    setPage,
    limit,
    setLimit,
    condition,
    setCondition,
    filterInfo,
    setFilterInfo,
    loading,
    setLoading,
    total,
    setTotal,
    visibleForm,
    setVisibleForm,
    getLichSuChinhSuaPageableModel,
  };
};
