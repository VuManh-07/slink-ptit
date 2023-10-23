import {
  canBoGiangVienGetRequestGuiDen,
  canBoGiangVienGetRequestGuiDi,
  canBoQLKHGetRequestPageable,
  duyetRequest,
  sendRequest,
} from '@/services/QuanLyKhoaHoc/RequestThanhVien/requestthanhvien';
import type { RequestThanhVien } from '@/services/QuanLyKhoaHoc/RequestThanhVien/typings';
import type { ETrangThaiDuyetThanhVien, ETypeRequestThanhVien } from '@/utils/constants';
import { message } from 'antd';
import { useState } from 'react';

export default () => {
  const [record, setRecord] = useState<RequestThanhVien.Record>();
  const [danhSach, setDanhSach] = useState<RequestThanhVien.Record[]>([]);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [condition, setCondition] = useState<any>({});
  const [filterInfo, setFilterInfo] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [visibleForm, setVisibleForm] = useState<boolean>(false);
  const [visibleFormDuyet, setVisibleFormDuyet] = useState<boolean>(false);

  const canBoQLKHGetRequestPageableModel = async (idDotKhaiBao?: string) => {
    setLoading(true);
    const res = await canBoQLKHGetRequestPageable({
      page,
      limit,
      condition: { ...condition, dotKhaiBaoId: idDotKhaiBao },
    });
    setDanhSach(res?.data?.data?.result ?? []);
    setTotal(res?.data?.data?.total ?? 0);
    setLoading(false);
  };

  const canBoGiangVienGetRequestGuiDenModel = async (idDotKhaiBao?: string) => {
    setLoading(true);
    const res = await canBoGiangVienGetRequestGuiDen({
      page,
      limit,
      condition: { ...condition, dotKhaiBaoId: idDotKhaiBao },
    });
    setDanhSach(res?.data?.data?.result ?? []);
    setTotal(res?.data?.data?.total ?? 0);
    setLoading(false);
  };

  const canBoGiangVienGetRequestGuiDiModel = async (idDotKhaiBao?: string) => {
    setLoading(true);
    const res = await canBoGiangVienGetRequestGuiDi({
      page,
      limit,
      condition: { ...condition, dotKhaiBaoId: idDotKhaiBao },
    });
    setDanhSach(res?.data?.data?.result ?? []);
    setTotal(res?.data?.data?.total ?? 0);
    setLoading(false);
  };

  const sendRequestModel = async (
    payload: {
      type: ETypeRequestThanhVien;
      yeuCau: string;
    },
    idCongTrinhTrungTen?: string,
    getData?: any,
  ) => {
    if (!idCongTrinhTrungTen) return;
    setLoading(true);
    await sendRequest(idCongTrinhTrungTen, payload);
    message.success('Gửi yêu cầu thành công');
    setVisibleForm(false);
    if (getData) getData();
    setLoading(false);
  };

  const duyetRequestModel = async (
    idRequest: string,
    payload: {
      ketQuaDuyet: ETrangThaiDuyetThanhVien;
      lyDoDuyet: string;
    },
    getData: any,
  ) => {
    setLoading(true);
    await duyetRequest(idRequest, payload);
    message.success('Xử lý thành công');
    setLoading(false);
    setVisibleFormDuyet(false);
    if (getData) getData();
  };

  return {
    visibleFormDuyet,
    setVisibleFormDuyet,
    duyetRequestModel,
    visibleForm,
    setVisibleForm,
    sendRequestModel,
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
    canBoGiangVienGetRequestGuiDenModel,
    canBoQLKHGetRequestPageableModel,
    canBoGiangVienGetRequestGuiDiModel,
  };
};
