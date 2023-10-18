import type { KhaiBaoNCKH } from '@/services/KhaiBaoNCKH/typings';
import {
  exportLyLichKhoaHocMe,
  getCongTrinhTieuBieu,
  getLyLichKhoaHocMe,
  postLyLichKhoaHoc,
  putLyLichKhoaHocMe,
} from '@/services/LyLichKhoaHoc/lylichkhoahoc';
import { message } from 'antd';
import { useState } from 'react';
import FileDownload from 'js-file-download';
import type { LyLichKhoaHoc } from '@/services/LyLichKhoaHoc/typings';

export default () => {
  const [recordLyLich, setRecordLyLich] = useState<LyLichKhoaHoc.Record>();
  const [visibleFormQuaTrinhDaoTao, setVisibleFormQuaTrinhDaoTao] = useState<boolean>(false);
  const [visibleFormDienBienLuong, setVisibleFormDienBienLuong] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [danhSachCongTrinhTieuBieu, setDanhSachCongTrinhTieuBieu] = useState<
    KhaiBaoNCKH.QuanLyKhoaHoc[]
  >([]);
  const [visibleFormQuaTrinhCongTac, setVisibleFormQuaTrinhCongTac] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const getLyLichKhoaHocMeModel = async () => {
    setLoading(true);
    const response = await getLyLichKhoaHocMe();
    setRecordLyLich(response?.data?.data);
    setDanhSachCongTrinhTieuBieu(response?.data?.data?.danhSachCongTrinhTieuBieu ?? []);
    setLoading(false);
  };

  const putLyLichKhoaHocMeModel = async (idLyLich: string, payload: LyLichKhoaHoc.Record) => {
    if (!idLyLich) return;
    setLoading(true);
    const response = await putLyLichKhoaHocMe(idLyLich, payload);
    setRecordLyLich(response?.data?.data);
    message.success('Lưu thành công');
    setLoading(false);
  };

  const postLyLichKhoaHocModel = async (payload: {
    userId?: string;
    lyLich?: LyLichKhoaHoc.Record;
  }) => {
    try {
      setLoading(true);
      const response = await postLyLichKhoaHoc(payload);
      setLoading(false);
      return response?.data?.data;
    } catch (err) {
      setLoading(false);
    }
  };

  const getCongTrinhTieuBieuModel = async () => {
    const response = await getCongTrinhTieuBieu();
    setDanhSachCongTrinhTieuBieu(response?.data?.data ?? []);
  };

  const exportLyLichKhoaHocMeModel = async () => {
    try {
      setLoading(true);
      const response = await exportLyLichKhoaHocMe();
      FileDownload(response.data, 'lylichkhoahoc.docx');
      setLoading(false);
    } catch (err) {
      message.error('Mẫu phiếu đang được cập nhật, vui lòng thử lại sau');
      setLoading(false);
    }
  };

  return {
    exportLyLichKhoaHocMeModel,
    danhSachCongTrinhTieuBieu,
    getCongTrinhTieuBieuModel,
    postLyLichKhoaHocModel,
    visibleFormQuaTrinhCongTac,
    visibleFormQuaTrinhDaoTao,
    setVisibleFormQuaTrinhCongTac,
    setVisibleFormQuaTrinhDaoTao,
    visibleFormDienBienLuong,
    setVisibleFormDienBienLuong,
    edit,
    setEdit,
    recordLyLich,
    setRecordLyLich,
    loading,
    setLoading,
    getLyLichKhoaHocMeModel,
    putLyLichKhoaHocMeModel,
  };
};
