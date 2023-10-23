import { useState } from 'react';
import {
  createKhoiKienThuc,
  deleteKhoiKienThuc,
  editKhoiKienThuc,
  getAllListKhoiKienThuc,
  getListKhoiKienThucByMon,
} from '@/services/Khoikienthuc/khoikienthuc';
import { message } from 'antd';

export interface dataReqUpdate {
  maMonHoc: string;
  khoiKienThuc: string;
  kichHoat: boolean;
}
export interface KhoiKienThuc {
  _id: string;
  maMonHoc: string;
  khoiKienThuc: string;
  kichHoat: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}
export interface dataKhoiKienThu {
  a: KhoiKienThuc;
  cauDe: 0;
  cauKho: 0;
  cauRatKho: 0;
  cauTrungBinh: 0;
}
export interface DataStatistic {
  name: string;
  count: number;
}
export default () => {
  const [listKhoiKienThuc, setListKhoiKienThuc] = useState<any>();
  const [listKhoiKienThucTheoMon, setListKhoiKienThucTheoMon] = useState<dataKhoiKienThu[]>([]);
  const [satistic, setStatistic] = useState<DataStatistic[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [condition, setCondition] = useState<any>({});
  const [danhSach, setDanhSach] = useState<IXemCaThi.Record[]>([]);
  const [filterInfo, setFilterInfo] = useState<any>({});
  const [record, setRecord] = useState<IXemCaThi.Record>();
  const [loading, setLoading] = useState<boolean>(true);
  const [edit, setEdit] = useState<boolean>(false);
  const [visibleForm, setVisibleForm] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const getKhoiKienThucData = async () => {
    setLoading(true);
    const res = await getAllListKhoiKienThuc();
    if (res) {
      setListKhoiKienThuc(res?.data?.data);
      // setTotal(res?.data?.data.length)
    }
    setLoading(false);
  };
  const getKhoiKienThucByIdData = async (id: string) => {
    setLoading(true);
    const res = await getListKhoiKienThucByMon(id);
    if (res) {
      setListKhoiKienThucTheoMon(res?.data?.data?.data);
      if (res?.data?.data) {
        let obj: DataStatistic[] = [
          {
            name: 'Câu dễ',
            count: res?.data?.data?.soCauDe,
          },
          {
            name: 'Câu khó',
            count: res?.data?.data?.soCauKho,
          },
          {
            name: 'Câu rất khó',
            count: res?.data?.data?.soCauRatKho,
          },
          {
            name: 'Câu trung bình',
            count: res?.data?.data?.soCauTrungBinh,
          },
        ];
        setStatistic(obj);
      }
    }
    setLoading(false);
  };
  const createKhoiKienThucModel = async (data: dataReqUpdate) => {
    const res = await createKhoiKienThuc(data);
    if (res) {
      if (res?.data?.statusCode === 201) {
        const arr = [...listKhoiKienThucTheoMon];
        let obj: dataKhoiKienThu = {
          a: res?.data?.data,
          cauDe: 0,
          cauTrungBinh: 0,
          cauKho: 0,
          cauRatKho: 0,
        };
        arr.unshift(obj);
        setListKhoiKienThucTheoMon(arr);
        message.success('Thêm khối kiến thức thành công!');
      } else {
        message.warning('Đã có lỗi xảy ra');
      }
    }
  };
  const deleteKhoiKienThucModel = async (id: string) => {
    const res = await deleteKhoiKienThuc(id);
    if (res) {
      if (res?.data?.statusCode === 200) {
        message.success('Xóa khối kiến thức thành công!');
      } else {
        message.warning('Đã có lỗi xảy ra');
      }
    }
  };
  const editKhoiKienThucModel = async (id: string, data: dataReqUpdate) => {
    const res = await editKhoiKienThuc(id, data);
    if (res) {
      if (res?.data?.statusCode < 400) {
        message.success('Thay đổi trạng thái thành công!');
      } else {
        message.warning('Đã có lỗi xảy ra');
      }
    }
  };
  return {
    listKhoiKienThuc,
    setListKhoiKienThuc,
    getKhoiKienThucData,
    createKhoiKienThucModel,
    deleteKhoiKienThucModel,
    getKhoiKienThucByIdData,
    listKhoiKienThucTheoMon,
    setListKhoiKienThucTheoMon,
    editKhoiKienThucModel,
    satistic,
    isLoading,
    setIsLoading,
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
  };
};
