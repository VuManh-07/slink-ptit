// import type { IDanhMuc } from '@/services/DanhMuc/typing';
import { addDanhMuc, delDanhMuc, getDanhMucS, putDanhMuc } from '@/services/DanhMuc/danhmuc';
import { message } from 'antd';
import { useState } from 'react';

export default () => {
  const [danhSach, setDanhSach] = useState<DanhMucQuanLyKhoaHoc.Record[]>([]);
  const [filterInfo, setFilterInfo] = useState<any>({});
  const [condition, setCondition] = useState<any>({});
  const [record, setRecord] = useState<DanhMucQuanLyKhoaHoc.Record>();
  const [loading, setLoading] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [visibleForm, setVisibleForm] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [loaiDanhMuc, setLoaiDanhMuc] = useState('loaiTapChi');
  const getDanhMucModel = async () => {
    setLoading(true);
    const response = await getDanhMucS({ loaiDanhMuc });
    setDanhSach(response?.data?.data ?? []);
    setTotal(response?.data?.data?.length ?? 0);
    setLoading(false);
  };

  const addDanhMucModel = async (payload: DanhMucQuanLyKhoaHoc.Record) => {
    setLoading(true);
    await addDanhMuc(payload);
    message.success('Thêm thành công');
    setLoading(false);
    getDanhMucModel();
    setVisibleForm(false);
  };
  const putDanhMucModel = async (payload: { id: string; data: DanhMucQuanLyKhoaHoc.Record }) => {
    setLoading(true);
    const response = await putDanhMuc(payload);
    setRecord(response?.data?.data ?? {});
    message.success('Xử lý thành công');
    setLoading(false);
    getDanhMucModel();
    setVisibleForm(false);
  };

  const delDanhMucModel = async (payload: { id: string; loaiDanhMuc: string }) => {
    setLoading(true);
    await delDanhMuc(payload);
    message.success('Xóa thành công');
    getDanhMucModel();
    setLoading(false);
  };

  return {
    getDanhMucModel,
    danhSach,
    setLoaiDanhMuc,
    delDanhMucModel,
    setDanhSach,
    addDanhMucModel,
    loaiDanhMuc,
    putDanhMucModel,
    filterInfo,
    setFilterInfo,
    condition,
    setCondition,

    record,
    setRecord,
    loading,
    setLoading,
    edit,
    setEdit,
    page,
    setPage,
    limit,
    setLimit,
    visibleForm,
    setVisibleForm,
    total,
    setTotal,
  };
};
