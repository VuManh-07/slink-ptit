
import { message } from 'antd';
import { useState } from 'react';
import {deleteThongBao, getThongBaoAdmin} from "@/services/ThongBao/thongbao";

export default () => {
  const [danhSach, setDanhSach] = useState<ThongBao.Record[]>([]);
  const [danhSachNoticeIcon, setDanhSachNoticeIcon] = useState<ThongBao.Record[]>([]);
  const [filterInfo, setFilterInfo] = useState<any>({});
  const [condition, setCondition] = useState<any>({});
  const [loaiThongBao, setLoaiThongBao] = useState<string>('TAT_CA');
  const [record, setRecord] = useState<ThongBao.Record>();
  const [loading, setLoading] = useState<boolean>(true);
  const [edit, setEdit] = useState<boolean>(false);
  const [visibleForm, setVisibleForm] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [totalNoticeIcon, setTotalNoticeIcon] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [pageNoticeIcon, setPageNoticeIcon] = useState<number>(1);
  const [limitNoticeIcon, setLimitNoticeIcon] = useState<number>(5);
  const [phamVi, setPhamVi] = useState<'Tất cả' | 'Hình thức đào tạo'>('Tất cả');

  const getThongBaoAdminModel = async (hinhThucDaoTaoId?: number) => {
    setLoading(true);
    const response = await getThongBaoAdmin({
      page,
      limit,
      condition: {
        ...condition,
        hinhThucDaoTaoId: hinhThucDaoTaoId || condition?.hinhThucDaoTaoId,
        phamVi,
      },
    });
    setDanhSach(response?.data?.data?.result ?? []);
    setTotal(response?.data?.data?.total ?? 0);
    setLoading(false);
  };
  const deleteThongBaoModel = async (idThongBao: string) => {
    setLoading(true);
    await deleteThongBao(idThongBao);
    message.success('Xóa thành công');
    setLoading(false);
    getThongBaoAdminModel();
  };
  return {
    phamVi,
    setPhamVi,
    totalNoticeIcon,
    setTotalNoticeIcon,
    danhSachNoticeIcon,
    setDanhSachNoticeIcon,
    pageNoticeIcon,
    setPageNoticeIcon,
    limitNoticeIcon,
    setLimitNoticeIcon,
    loaiThongBao,
    setLoaiThongBao,
    danhSach,
    setDanhSach,
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
    visibleForm,
    setVisibleForm,
    total,
    setTotal,
    page,
    limit,
    setPage,
    setLimit,
    getThongBaoAdminModel,deleteThongBaoModel
  };
};
