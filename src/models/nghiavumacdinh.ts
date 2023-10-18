import useInitModel from '@/hooks/useInitModel';
import {
  deleteNghiaVuMacDinh,
  getAllNghiaVuMacDinh,
  getNghiaVuMacDinhPageable,
  postNghiaVuMacDinh,
  putNghiaVuMacDinh,
} from '@/services/NghiaVuMacDinh/nghiavumacdinh';
import { message } from 'antd';
import { useState } from 'react';

export default () => {
  const [record, setRecord] = useState<NghiaVuMacDinh.Record>();
  const [danhSach, setDanhSach] = useState<NghiaVuMacDinh.Record[]>([]);
  const objInitModel = useInitModel('nghia-vu-mac-dinh', 'condition');
  const { page, limit, setLoading, condition, setTotal, setVisibleForm } = objInitModel;

  const getAllNghiaVuMacDinhModel = async (hinhThucDaoTao?: string) => {
    setLoading(true);
    const response = await getAllNghiaVuMacDinh({ condition: { hinhThucDaoTao } });
    setDanhSach(response?.data?.data ?? []);
    if (!record?._id) setRecord(response?.data?.data?.[response?.data?.data?.length - 1 ?? 0]);
    setLoading(false);
  };

  const getNghiaVuMacDinhPageableModel = async () => {
    setLoading(true);
    const response = await getNghiaVuMacDinhPageable({ page, limit, condition });
    setDanhSach(response?.data?.data ?? []);
    setTotal(response?.data?.total ?? 0);
    setLoading(false);
  };

  const postNghiaVuMacDinhModel = async (payload: NghiaVuMacDinh.Record) => {
    try {
      setLoading(true);
      await postNghiaVuMacDinh(payload);
      getNghiaVuMacDinhPageableModel();
      message.success('Thêm thành công');
      setVisibleForm(false);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const putNghiaVuMacDinhModel = async (idNghiaVuMacDinh: string, data: NghiaVuMacDinh.Record) => {
    if (!idNghiaVuMacDinh) return;
    try {
      setLoading(true);
      await putNghiaVuMacDinh(idNghiaVuMacDinh, data);
      getNghiaVuMacDinhPageableModel();
      message.success('Lưu thành công');
      setVisibleForm(false);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const deleteNghiaVuMacDinhModel = async (idNghiaVuMacDinh: string) => {
    setLoading(true);
    await deleteNghiaVuMacDinh(idNghiaVuMacDinh);
    message.success('Xóa thành công');
    getNghiaVuMacDinhPageableModel();
    setLoading(false);
  };

  return {
    deleteNghiaVuMacDinhModel,
    putNghiaVuMacDinhModel,
    postNghiaVuMacDinhModel,
    getNghiaVuMacDinhPageableModel,
    getAllNghiaVuMacDinhModel,
    record,
    setRecord,
    danhSach,
    setDanhSach,
    ...objInitModel,
  };
};
