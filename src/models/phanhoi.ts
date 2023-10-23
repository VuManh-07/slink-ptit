import {
  getPhanHoiAdmin,
  getPhanHoiFromOther,
  getPhanHoiUser,
  postPhanHoiUser,
  traLoiPhanHoi,
} from '@/services/PhanHoi/phanhoi';
import { message } from 'antd';
import { useState } from 'react';

export default () => {
  const [danhSach, setDanhSach] = useState<PhanHoi.Record[]>([]);
  const [record, setRecord] = useState<PhanHoi.Record>({} as PhanHoi.Record);
  const [filterInfo, setFilterInfo] = useState<any>({});
  const [condition, setCondition] = useState<any>({});
  const [daTraLoi, setDaTraLoi] = useState<boolean>(false);
  const [vaiTro, setVaiTro] = useState<string>('sinh_vien');
  const [loading, setLoading] = useState<boolean>(true);
  const [visibleForm, setVisibleForm] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [edit, setEdit] = useState<boolean>(false);
  const getPhanHoiAdminModel = async (idHinhThuc?: number) => {
    setLoading(true);
    const response = await getPhanHoiAdmin({
      page,
      limit,
      condition: { ...condition, daTraLoi, vaiTro },
      idHinhThuc:
        idHinhThuc ||
        (condition?.hinhThucDaoTaoId !== -1 ? condition?.hinhThucDaoTaoId : undefined),
    });
    setDanhSach(response?.data?.data?.result ?? []);
    setTotal(response?.data?.data?.total ?? 0);
    setLoading(false);
  };

  const traLoiPhanHoiModel = async (payload: { id: string; data: { noiDungTraLoi: string } }) => {
    try {
      setLoading(true);
      await traLoiPhanHoi(payload);
      message.success('Trả lời thành công');
      setLoading(false);
      setVisibleForm(false);
      getPhanHoiAdminModel();
    } catch (err) {
      setLoading(false);
    }
  };

  const getPhanHoiUserModel = async () => {
    setLoading(true);
    const response = await getPhanHoiUser({
      page,
      limit,
      condition: { daTraLoi },
    });
    setDanhSach(response?.data?.data?.result ?? []);
    setTotal(response?.data?.data?.total ?? 0);
    setLoading(false);
  };

  const getPhanHoiFromOtherModel = async () => {
    setLoading(true);
    const response = await getPhanHoiFromOther({
      page,
      limit,
      daTraLoi,
    });
    setDanhSach(response?.data?.data?.result ?? []);
    setTotal(response?.data?.data?.total ?? 0);
    setLoading(false);
  };

  const userPostPhanHoiModel = async (payload: { noiDungPhanHoi: string }) => {
    setLoading(true);
    await postPhanHoiUser(payload);
    message.success('Gửi phản hồi thành công');
    setVisibleForm(false);
    setLoading(false);
    getPhanHoiUserModel();
  };

  return {
    setDanhSach,
    getPhanHoiFromOtherModel,
    edit,
    setEdit,
    userPostPhanHoiModel,
    getPhanHoiUserModel,
    filterInfo,
    condition,
    setFilterInfo,
    setCondition,
    daTraLoi,
    vaiTro,
    getPhanHoiAdminModel,
    traLoiPhanHoiModel,
    setDaTraLoi,
    setVaiTro,
    setRecord,
    visibleForm,
    setVisibleForm,
    setPage,
    setLimit,
    danhSach,
    record,
    loading,
    total,
    page,
    limit,
  };
};
