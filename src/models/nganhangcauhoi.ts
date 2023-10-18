import { useState } from 'react';
import {
  createCauHoi,
  DataImportNganHang,
  deleteCauHoi,
  getCauHoi,
  getCauHoiNganHang,
  importExcelNganHang,
  importWordNganHang,
  updateCauHoi,
} from '@/services/NganHangCauHoi/nganhangcauhoi';
import { message } from 'antd';
export interface reqGetNganHangCauHoi {
  maMonHoc: string;
  loaiCauHoi?: string;
  custom?: string;
  cond?: any;
  select?: string;
  sort?: string;
  order?: string;
  page?: number;
  limit?: number;
}
export interface IResDanhSachCauHoi {
  _id: string;
  createdAt: string;
  doKho: string;
  khoiKienThuc: string;
  loaiCauHoi: string;
  maMonHoc: string;
  noiDung: {
    cauHoi: string;
    isRequired: boolean;
    loai: number;
    moTa: string;
    _id: string;
    cauTraLoi: {
      isCorrect: boolean;
      isKhac: boolean;
      luaChon: string;
    }[];
  };
  tepDinhKem: string[];
}
export interface NoiDung {
  noiDung: {
    loai: number;
    isRequired: boolean;
    cauHoi: string;
    audio: string;
    image: string;
    video: string;
    cauPhucTap: boolean;
    cauTraLoi: [
      {
        luaChon: string;
        isKhac: boolean;
        isCorrect: boolean;
      },
    ];
    moTa: string;
  };
  tepDinhKem: string[];
}
export interface resDataCreateCauHoi {
  maMonHoc: string;
  loaiCauHoi: string;
  khoiKienThuc: string;
  doKho: string;
  moTa: string;
  listCauHoi: NoiDung[];
}
export interface resDataUpdateCauHoi {
  maMonHoc: string;
  loaiCauHoi: string;
  khoiKienThuc: string;
  doKho: string;
  moTa: string;
  noidung: {
    loai: number;
    isRequired: boolean;
    cauHoi: string;
    audio: string;
    image: string;
    video: string;
    cauTraLoi: {
      luaChon: string;
      isKhac: boolean;
      isCorrect: boolean;
    }[];
  };
  tepDinhKem: string[];
}
export interface ICauHoiKhaoSat {
  tepDinhKem: any;
  isRequired: boolean;
  hang: string[];
  cot: string[];
  _id?: string;
  loai: number;
  cauHoi: string;
  min: number;
  max: number;
  cauTraLoi: Array<{ isKhac: boolean; _id?: string; luaChon: string; correct: boolean }>;
  moTa?: string;
}
export interface IKhaoSatRecord {
  ketQua: ICauHoiKhaoSat[];
  inTime: boolean;
  view: boolean;
  _id: string;
  mucDich: number;
  doiTuong: number[];
  trangThai: boolean;
  donVi: any[];
  loaiDonVi: any[];
  tieuDe: string;
  moTa: string;
  ngayBatDau: string;
  ngayKetThuc: string;
  noiDungKhaoSat: ICauHoiKhaoSat[];
  daTraLoi: boolean;
}
export interface DanhSachCauHoi {
  loai: number;
  isRequired: boolean;
  cauHoi: string;
  hang: string[];
  cot: string[];
  min: number;
  max: number;
  audio?: string;
  image?: string;
  video?: string;
  moTa: string;
  cauPhucTap: boolean;
  cauTraLoi: { isKhac: boolean; luaChon: string; isCorrect: boolean }[];
}
export default () => {
  const [listNganHang, setListNganHang] = useState();
  const [listAddCauHoi, setListAddCauHoi] = useState<resDataCreateCauHoi>();
  const [cauTraLoi, setCauTraLoi] = useState([]);
  const [loadingImage, setLoadingImage] = useState();
  const [danhSachCauHoi, setDanhSachCauHoi] = useState<DanhSachCauHoi[]>([]);
  const [showDrawerForm, setShowDrawerForm] = useState<boolean>(false);
  const [maMonHoc, setMaMonHoc] = useState<string>('');
  const [dataDanhSachCauHoi, setDataDanhSachCauHoi] = useState<IResDanhSachCauHoi[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dataImportCauHoi, setDataImportCauHoi] = useState<any>();
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [condition, setCondition] = useState<any>({});
  const [danhSach, setDanhSach] = useState<IXemCaThi.Record[]>([]);
  const [danhSachNganHang, setDanhSachNganHang] = useState<IXemCaThi.Record[]>([]);
  const [filterInfo, setFilterInfo] = useState<any>({});
  const [record, setRecord] = useState<IXemCaThi.Record>();
  const [loading, setLoading] = useState<boolean>(true);
  const [edit, setEdit] = useState<boolean>(false);
  const [visibleForm, setVisibleForm] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  // const getCauHoiModel = async (data: reqGetNganHangCauHoi) => {
  //   const res = await getCauHoi(data);
  //   if (res) {
  //     setDataDanhSachCauHoi(res?.data?.data?.data);
  //   }
  // };
  const getNganHangCauHoiModel = async (maMonHocData: string, loaiCauHoi: string) => {
    setLoading(true);
    const res = await getCauHoiNganHang({
      page: page,
      limit: limit,
      condition: { ...condition, maMonHoc: maMonHocData, loaiCauHoi: loaiCauHoi },
    });
    if (res) {
      console.log('resss', res);
      setDanhSach(res?.data?.data?.result ?? []);
      setDanhSachNganHang(res?.data?.data?.result ?? []);
      setTotal(res?.data?.data?.total);
    }
    setLoading(false);
  };
  const createCauHoiModel = async (data: resDataCreateCauHoi) => {
    const res = await createCauHoi(data);
    if (res) {
      message.success('Tạo câu hỏi thành công!');
      setIsLoading(false);
    }
  };
  const deleteCauHoiModel = async (id: string) => {
    const res = await deleteCauHoi(id);
    if (res) {
      if (res?.status === 200) {
        message.success('Xóa thành công');
        // const arr = dataDanhSachCauHoi.filter((item) => {
        //   return item._id !== id;
        // });
        // setDataDanhSachCauHoi(arr);
        setIsLoading(false);
      } else {
        message.error('Đã có lỗi xảy ra');
        setIsLoading(false);
      }
    }
  };
  const updateCauHoiModel = async (id: string, data: resDataUpdateCauHoi) => {
    const res = await updateCauHoi(id, data);
    if (res) {
      if (res?.status === 200) {
        message.success('Cập nhập thành công');
        setIsLoading(false);
      } else {
        message.error('Cập nhập thất bại');
        setIsLoading(false);
      }
    }
  };
  const importExcelNganHangModel = async (data: DataImportNganHang) => {
    const res = await importExcelNganHang(data);
    if (res) {
      if (res?.status < 400) {
        message.success('Import thành công');
        setDataImportCauHoi(res?.data?.data);
        setIsLoading(false);
      } else {
        message.error('Import thất bại');
        setIsLoading(false);
      }
    }
    setIsLoading(false);
  };
  const importWordNganHangModel = async (data: {
    file: any;
    maMonHoc: string;
    khoiKienThuc: string;
    doKho: string;
  }) => {
    const res = await importWordNganHang(data);
    if (res) {
      if (res?.status < 400) {
        message.success('Import thành công');
        setDataImportCauHoi(res?.data?.data);
        setIsLoading(false);
      } else {
        message.error('Import thất bại');
        setIsLoading(false);
      }
    }
    setIsLoading(false);
  };
  return {
    listNganHang,
    setListNganHang,
    deleteCauHoiModel,
    createCauHoiModel,
    // getCauHoiModel,
    updateCauHoiModel,
    listAddCauHoi,
    setListAddCauHoi,
    cauTraLoi,
    setCauTraLoi,
    loadingImage,
    setLoadingImage,
    danhSachCauHoi,
    setDanhSachCauHoi,
    setShowDrawerForm,
    showDrawerForm,
    setMaMonHoc,
    maMonHoc,
    dataDanhSachCauHoi,
    isLoading,
    setIsLoading,
    importExcelNganHangModel,
    dataImportCauHoi,
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
    getNganHangCauHoiModel,
    importWordNganHangModel,
    danhSachNganHang,
  };
};
