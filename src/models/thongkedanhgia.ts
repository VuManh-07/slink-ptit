import { getThongKe } from '@/services/ThongKeDanhGia/thongkedanhgia';
import { useState } from 'react';

export default () => {
  const [danhSach, setDanhSach] = useState<QuanLyDotDanhGia.Record[]>([]);
  const [record, setRecord] = useState<QuanLyDotDanhGia.Record | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [position, setPosition] = useState<number>(0);
  const [edit, setEdit] = useState<boolean>(false);
  const [visibleForm, setVisibleForm] = useState<boolean>(false);
  const [expandedKeys, setExpandedKeys] = useState<string[]>([]);
  const [condition, setCondition] = useState<any>({});
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [filterInfo, setFilterInfo] = useState<any>({});
  const getThongKeModel = async (idDot?: string) => {
    if (!idDot) return;
    setLoading(true);
    const response = await getThongKe({
      page,
      limit,
      idDot,
    });
    setTotal(response?.data?.data?.total ?? 0);
    setDanhSach(response?.data?.data?.result ?? []);
    setLoading(false);
  };

  return {
    position,
    setPosition,
    getThongKeModel,
    edit,
    setEdit,
    visibleForm,
    setVisibleForm,
    danhSach,
    setDanhSach,
    record,
    setRecord,
    loading,
    setLoading,
    expandedKeys,
    setExpandedKeys,
    page,
    limit,
    total,
    condition,
    setPage,
    setLimit,
    setCondition,
    filterInfo,
    setFilterInfo,
  };
};
