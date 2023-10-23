import { message } from 'antd';
import {
  getSuKienUserByNam,
  postSuKienAdmin,
  getSuKienPageable,
  deleteSuKien,
  putSuKienAdmin,
  getSuKienFromDateToDate,
  getSuKienTheoNamVaThang,
  postSuKienCaNhan,
  putSuKienCaNhan,
  deleteSuKienCaNhan,
} from '@/services/sukien/sukien';
import { useState } from 'react';
import { SuKien } from '@/services/sukien/typings';

export default () => {
  const [danhSach, setDanhSach] = useState<SuKien.Record[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [record, setRecord] = useState<SuKien.Record>();
  const [visibleForm, setVisibleForm] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [total, setTotal] = useState<number>(0);
  const [condition, setCondition] = useState<any>();
  const [filterInfo, setFilterInfo] = useState<any>({});
  const [visible, setVisible] = useState<boolean>(false);
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [selectValue, setSelectValue] = useState<string[]>([]);

  const getSuKienSinhVienByNamModel = async (payload: { year: number; selectValue: any }) => {
    setLoading(true);
    const response = await getSuKienUserByNam(payload.year, payload.selectValue);
    setDanhSach(response?.data?.data ?? []);
    setLoading(false);
  };

  const getSuKienPageableModel = async () => {
    setLoading(true);
    const response = await getSuKienPageable({ page, limit, condition });
    setDanhSach(response?.data?.data?.result ?? []);
    setTotal(response?.data?.data?.total ?? 0);
    setLoading(false);
  };

  const getSuKienFromDateToDateModel = async (
    firstDay: string,
    lastDay: string,
    selectValue: any,
  ) => {
    setLoading(true);
    const response = await getSuKienFromDateToDate(firstDay, lastDay, selectValue);
    setDanhSach(response?.data?.data ?? []);
    setLoading(false);
  };

  const getSuKienTheoNamVaThangModel = async (payload: {
    year: number;
    month: number;
    selectValue: any;
  }) => {
    setLoading(true);
    const response = await getSuKienTheoNamVaThang(
      payload.year,
      payload.month,
      payload.selectValue,
    );
    setDanhSach(response?.data?.data ?? []);
    setLoading(false);
  };

  const postSuKienAdminModel = async (payload: any) => {
    setLoading(true);
    try {
      const response = await postSuKienAdmin(payload);
      if (response?.status === 201) {
        setVisibleForm(false);
        message.success('Tạo thành công!');
      }
    } catch (error) {
      setLoading(false);
    }
    getSuKienPageableModel();
    setLoading(false);
  };

  const postSuKienCaNhanModel = async (payload: any) => {
    setLoading(true);
    try {
      const response = await postSuKienCaNhan(payload);
      if (response?.status === 201) {
        setVisibleForm(false);
        message.success('Tạo thành công!');
      }
    } catch (error) {
      setLoading(false);
    }
    getSuKienSinhVienByNamModel({ year, selectValue });
    setLoading(false);
  };

  const putSuKienCaNhanModel = async (id: string, payload: any) => {
    setLoading(true);
    try {
      const response = await putSuKienCaNhan(id, payload);
      if (response?.status === 200) {
        setVisibleForm(false);
        message.success('Cập nhật thành công!');
      }
    } catch (error) {
      setLoading(false);
    }
    getSuKienSinhVienByNamModel({ year, selectValue });
    setLoading(false);
  };

  const putSuKienAdminModel = async (id: string, payload: any, kieuUpdate: string) => {
    setLoading(true);
    try {
      const response = await putSuKienAdmin(id, payload, kieuUpdate);
      if (response?.status === 200) {
        setVisibleForm(false);
        message.success('Cập nhật thành công!');
      }
    } catch (error) {
      setLoading(false);
    }
    getSuKienPageableModel();
    setLoading(false);
  };

  const deleteSuKienModel = async (idSuKien: string, kieuXoa?: string) => {
    setLoading(true);
    try {
      await deleteSuKien(idSuKien, kieuXoa).then((response) => {
        if (response?.status === 200) {
          message.success('Xóa thành công!');
        }
      });
    } catch (error) {
      setLoading(false);
    }
    getSuKienPageableModel();
    setVisible(false);
    setLoading(false);
  };

  const deleteSuKienCaNhanModel = async (idSuKien: string) => {
    setLoading(true);
    try {
      await deleteSuKienCaNhan(idSuKien).then((response) => {
        if (response?.status === 200) {
          message.success('Xóa thành công!');
        }
      });
    } catch (error) {
      setLoading(false);
    }
    setRecord({} as SuKien.Record);
    getSuKienSinhVienByNamModel({ year, selectValue });
    setLoading(false);
  };

  return {
    danhSach,
    getSuKienPageableModel,
    deleteSuKienModel,
    loading,
    getSuKienSinhVienByNamModel,
    postSuKienAdminModel,
    putSuKienAdminModel,
    getSuKienFromDateToDateModel,
    getSuKienTheoNamVaThangModel,
    postSuKienCaNhanModel,
    putSuKienCaNhanModel,
    deleteSuKienCaNhanModel,
    record,
    setRecord,
    visibleForm,
    setVisibleForm,
    edit,
    setEdit,
    page,
    setPage,
    limit,
    setLimit,
    condition,
    setCondition,
    total,
    setTotal,
    filterInfo,
    setFilterInfo,
    visible,
    setVisible,
    year,
    setYear,
    selectValue,
    setSelectValue,
  };
};
