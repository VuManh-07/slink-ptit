import useInitModel from '@/hooks/useInitModelSimple';
import {
  deleteKhaiBaoNCKH,
  duyetAllTongGioNCKH,
  duyetKhaiBaoNCKH,
  duyetTongGioNCKH,
  exportMauThamDinhAll,
  exportMauThamDinhDonVi,
  exportMauThongKeAllDonViPhongQLKH,
  exportMauThongKeCongTrinhCBGV,
  exportMauThongKeDonViPhongQLKH,
  exportMauThongKeDonViTruongDonVi,
  exportPhongQLKHMauThongKeCongTrinhCBGV,
  getAllGioNghienCuuKhaiBao,
  getGioNghienCuuKhaiBao,
  getGioNghienCuuKhoaHocPageable,
  getKhaiBaoNCKH,
  getKhaiBaoNCKHById,
  getQuanLyKhoaHoc,
  getQuanLyKhoaHocById,
  getUserPageable,
  importData,
  postKhaiBaoNCKH,
  postQuanLyKhoaHoc,
  putKhaiBaoNCKH,
  putQuanLyKhoaHoc,
  resetTrangThaiKhaiBao,
  xacNhanTongGioNCKH,
  exportDanhSachBaiBaoTheoNam,
  exportSoLuongDeTaiTheoNam,
  exportSoLuongBaiBaoTheoNam,
  exportCongTrinhTuongUngDeTai,
} from '@/services/KhaiBaoNCKH/khaibaonckh';
import type { KhaiBaoNCKH } from '@/services/KhaiBaoNCKH/typings';
import {
  chuyenVienGetGioNckh,
  getGioNckhMe,
  putGioNckhMe,
} from '@/services/QuanLyKhoaHoc/quanlykhoahoc';
import type { EKetQuaDuyet, ELoaiCongTrinhKhoaHoc } from '@/utils/constants';
import { EModeKhaiBao } from '@/utils/constants';
import { message } from 'antd';
import { useState } from 'react';
import FileDownload from 'js-file-download';
import moment from 'moment';

export default () => {
  const objInitModel = useInitModel();
  const [record, setRecord] = useState<KhaiBaoNCKH.Record>();
  const [recordCongTrinh, setRecordCongTrinh] = useState<KhaiBaoNCKH.QuanLyKhoaHoc>();
  const [danhSach, setDanhSach] = useState<KhaiBaoNCKH.Record[]>([]);
  const [danhSachCongTrinh, setDanhSachCongTrinh] = useState<KhaiBaoNCKH.QuanLyKhoaHoc[]>([]);
  const [totalCongTrinh, setTotalCongTrinh] = useState<number>(0);
  const [danhSachUser, setDanhSachUser] = useState<Login.Profile[]>([]); //ds giang vien
  const [danhSachSinhVien, setDanhSachSinhVien] = useState<Login.Profile[]>([]);
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [danhSachThanhVien, setDanhSachThanhVien] = useState<KhaiBaoNCKH.ThanhVien[]>([]);
  const [recordThanhVien, setRecordThanhVien] = useState<KhaiBaoNCKH.ThanhVien>();
  const [editThanhVien, setEditThanhVien] = useState<boolean>(false);
  const [visibleFormThanhVien, setVisibleFormThanhVien] = useState<boolean>(false);
  const [danhSachSinhVienNCKH, setDanhSachSinhVienNCKH] = useState<KhaiBaoNCKH.ThanhVien[]>([]);
  const [recordSinhVienNCKH, setRecordSinhVienNCKH] = useState<KhaiBaoNCKH.ThanhVien>();
  const [editSinhVienNCKH, setEditSinhVienNCKH] = useState<boolean>(false);
  const [visibleFormSinhVienNCKH, setVisibleFormSinhVienNCKH] = useState<boolean>(false);
  const [danhSachTrangThaiNghiemThu, setDanhSachTrangThaiNghiemThu] = useState<
    KhaiBaoNCKH.NghiemThu[]
  >([]);
  const [recordTrangThaiNghiemThu, setRecordTrangThaiNghiemThu] = useState<KhaiBaoNCKH.NghiemThu>();
  const [editTrangThaiNghiemThu, setEditTrangThaiNghiemThu] = useState<boolean>(false);
  const [visibleFormTrangThaiNghiemThu, setVisibleFormTrangThaiNghiemThu] =
    useState<boolean>(false);
  const [danhSachDonViPhoiHop, setDanhSachDonViPhoiHop] = useState<KhaiBaoNCKH.DonViPhoiHop[]>([]);
  const [recordDonViPhoiHop, setRecordDonViPhoiHop] = useState<KhaiBaoNCKH.DonViPhoiHop>();
  const [editDonViPhoiHop, setEditDonViPhoiHop] = useState<boolean>(false);
  const [visibleFormDonViPhoiHop, setVisibleFormDonViPhoiHop] = useState<boolean>(false);
  const [danhSachMinhChung, setDanhSachMinhChung] = useState<KhaiBaoNCKH.MinhChung[]>([]);
  const [recordMinhChung, setRecordMinhChung] = useState<KhaiBaoNCKH.MinhChung>();
  const [editMinhChung, setEditMinhChung] = useState<boolean>(false);
  const [visibleFormMinhChungSanPham, setVisibleFormMinhChungSanPham] = useState<boolean>(false);
  const [danhSachSanPham, setDanhSachSanPham] = useState<KhaiBaoNCKH.SanPhamDatDuoc[]>([]);
  const [recordSanPham, setRecordSanPham] = useState<KhaiBaoNCKH.SanPhamDatDuoc>();
  const [editSanPham, setEditSanPham] = useState<boolean>(false);
  const [visibleFormSanPham, setVisibleFormSanPham] = useState<boolean>(false);
  const [danhSachMucTu, setDanhSachMucTu] = useState<KhaiBaoNCKH.MucTu[]>([]);
  const [recordMucTu, setRecordMucTu] = useState<KhaiBaoNCKH.ThanhVien>();
  const [editMucTu, setEditMucTu] = useState<boolean>(false);
  const [visibleFormMucTu, setVisibleFormMucTu] = useState<boolean>(false);
  const [danhSachChuongSach, setDanhSachChuongSach] = useState<KhaiBaoNCKH.ChuongSach[]>([]);
  const [recordChuongSach, setRecordChuongSach] = useState<KhaiBaoNCKH.ChuongSach>();
  const [editChuongSach, setEditChuongSach] = useState<boolean>(false);
  const [visibleFormChuongSach, setVisibleFormChuongSach] = useState<boolean>(false);
  const [danhSachGiaiThuong, setDanhSachGiaiThuong] = useState<KhaiBaoNCKH.GiaiThuong[]>([]);
  const [recordGiaiThuong, setRecordGiaiThuong] = useState<KhaiBaoNCKH.GiaiThuong>();
  const [editGiaiThuong, setEditGiaiThuong] = useState<boolean>(false);
  const [visibleFormGiaiThuong, setVisibleFormGiaiThuong] = useState<boolean>(false);
  const { page, limit, setLoading, condition, setTotal, setVisibleForm } = objInitModel;
  const [visibleFormMinhChung, setVisibleFormMinhChung] = useState<boolean>(false);
  const [visibleViewKhaiBao, setVisibleViewKhaiBao] = useState<boolean>(false);
  const [visibleFormXuLy, setVisibleFormXuLy] = useState<boolean>(false);
  const [visibleFormXuLyMany, setVisibleFormXuLyMany] = useState<boolean>(false);
  const [visibleResultImport, setVisibleResultImport] = useState<boolean>(false);
  const [visibleFormImport, setVisibleFormImport] = useState<boolean>(false);
  const [visibleFormExport, setVisibleFormExport] = useState<boolean>(false);
  const [tabChuyenVien, setTabChuyenVien] = useState<string>('1');

  const [mode, setMode] = useState<EModeKhaiBao>(EModeKhaiBao.ALL);
  const [hideCard, setHideCard] = useState<boolean>(false);
  const [selectionRow, setSelectionRow] = useState<boolean>(false);
  const [selectionRowKey, setSelectionRowKey] = useState<React.Key[]>([]);
  const [danhSachKhaiBao, setDanhSachKhaiBao] = useState<KhaiBaoNCKH.Record[]>([]);
  const [conditionUser, setConditionUser] = useState<any>({});
  const [visibleList, setVisibleList] = useState<boolean>(false);
  const [typeList, setTypeList] = useState<
    'ThanhVien' | 'DonViPhoiHopThucHien' | 'SanPham' | 'GiaiThuong' | 'MinhChung' | 'SinhVien'
  >();
  const [visibleCongTrinhTrung, setVisibleCongTrinhTrung] = useState<boolean>(false);
  const [recordGioNghienCuuKhaiBao, setRecordGioNghienCuuKhaiBao] =
    useState<KhaiBaoNCKH.GioNghienCuuKhaiBao>();

  const [danhSachDienGiaiGioNghienCuu, setDanhSachDienGiaiGioNghienCuu] = useState<
    KhaiBaoNCKH.DienGiaiGioNghienCuu[]
  >([]);

  const [danhSachGioNghienCuuKhaiBao, setDanhSachGioNghienCuuKhaiBao] = useState<
    KhaiBaoNCKH.GioNghienCuuKhaiBao[]
  >([]);

  const [visibleFormDienGiaiGioNghienCuu, setVisibleFormDienGiaiGioNghienCuu] =
    useState<boolean>(false);
  const [editDienGiaiGioNghienCuu, setEditDienGiaiGioNghienCuu] = useState<boolean>(false);
  const [recordDienGiaiGioNghienCuu, setRecordDienGiaiGioNghienCuu] =
    useState<KhaiBaoNCKH.DienGiaiGioNghienCuu>();

  const [recordGioNghienCuuKhoaHoc, setRecordGioNghienCuuKhoaHoc] =
    useState<KhaiBaoNCKH.GioNghienCuuKhoaHoc>();
  const [danhSachGioNghienCuuKhoaHoc, setDanhSachGioNghienCuuKhoaHoc] = useState<
    KhaiBaoNCKH.GioNghienCuuKhoaHoc[]
  >([]);
  const [searchKey, setSearchKey] = useState<string>();
  const getKhaiBaoNCKHModel = async (
    type: ELoaiCongTrinhKhoaHoc,
    isCaNhan: boolean,
    paramCondition?: any,
    dotKhaiBao?: string,
    isMode?: boolean,
  ) => {
    setLoading(true);
    const response = await getKhaiBaoNCKH(
      {
        page,
        limit,
        mode: isCaNhan || isMode ? mode : undefined,
        condition: { ...condition, ...paramCondition, danhMucNCKH: type, dotKhaiBao },
      },
      isCaNhan,
    );
    setDanhSach(response?.data?.data?.result ?? []);
    setTotal(response?.data?.data?.total ?? 0);
    setLoading(false);
  };

  const getQuanLyKhoaHocModel = async (
    isCaNhan: boolean,
    type: ELoaiCongTrinhKhoaHoc,
    paramPage?: number,
    paraLimit?: number,
    paramCondition?: any,
  ) => {
    setLoading(true);
    const response = await getQuanLyKhoaHoc(
      {
        page: paramPage || page,
        limit: paraLimit || limit,
        condition: { ...condition, ...paramCondition, danhMucNCKH: type },
      },
      isCaNhan,
    );
    setDanhSachCongTrinh(response?.data?.data?.result ?? []);
    setTotalCongTrinh(response?.data?.data?.total ?? 0);
    setLoading(false);
  };

  const putKhaiBaoNCKHModel = async (
    idKHCN: string,
    payload: KhaiBaoNCKH.PayloadKhaiBaoNCKH,
    isCaNhan: boolean,
    getData?: any,
  ) => {
    if (!idKHCN) return;
    try {
      setLoading(true);
      await putKhaiBaoNCKH(idKHCN, payload, isCaNhan);
      message.success('Lưu thành công');
      setVisibleForm(false);
      if (getData) getData();
    } catch (err) {
      setLoading(false);
    }
  };

  const putQuanLyKhoaHocModel = async (idQLKH: string, payload: KhaiBaoNCKH.QuanLyKhoaHoc) => {
    if (!idQLKH) return;
    try {
      setLoading(true);
      const response = await putQuanLyKhoaHoc(idQLKH, payload);
      // setLoading(false);
      return response?.data?.data;
    } catch (err) {
      setLoading(false);
    }
  };

  const postQuanLyKhoaHocModel = async (payload: KhaiBaoNCKH.QuanLyKhoaHoc) => {
    try {
      setLoading(true);
      const response = await postQuanLyKhoaHoc(payload);
      // setLoading(false);
      return response?.data?.data;
    } catch (err) {
      setLoading(false);
    }
  };

  const postKhaiBaoNCKHModel = async (payload: KhaiBaoNCKH.PayloadKhaiBaoNCKH, getData?: any) => {
    try {
      setLoading(true);
      await postKhaiBaoNCKH(payload);
      message.success('Thêm thành công');
      setVisibleForm(false);
      if (getData) getData();
    } catch (err) {
      setLoading(false);
    }
  };

  const getUserPageableModel = async (
    type: 'sinhVien' | 'giangVien',
    cond?: any,
    limitParam?: number,
  ) => {
    setLoading(true);
    const response = await getUserPageable({
      page: 1,
      limit: limitParam || 1500,
      condition: { ...cond, ...conditionUser },
    });
    if (type === 'giangVien') setDanhSachUser(response?.data?.data?.result ?? []);
    else setDanhSachSinhVien(response?.data?.data?.result ?? []);
    setLoading(false);
  };

  const duyetKhaiBaoNCKHModel = async (
    payload: {
      ketQuaDuyet: EKetQuaDuyet;
      ghiChu: string;
      idLyLichList: string[];
    },
    getData: any,
  ) => {
    if (!payload?.idLyLichList?.length) return;
    try {
      setLoading(true);
      await duyetKhaiBaoNCKH(payload);
      setVisibleViewKhaiBao(false);
      setVisibleFormXuLy(false);
      setVisibleFormXuLyMany(false);
      message.success('Xử lý thành công');
      setDanhSachKhaiBao([]);
      setSelectionRowKey([]);
      getData();
    } catch (err) {
      setLoading(false);
    }
  };

  const getQuanLyKhoaHocByIdModel = async (idCongTrinh: string) => {
    setLoading(true);
    const response = await getQuanLyKhoaHocById(idCongTrinh);
    setRecordCongTrinh(response?.data?.data);
    setLoading(false);
  };

  const getKhaiBaoNCKHByIdModel = async (idKhaiBaoNCKH: string) => {
    setLoading(true);
    const response = await getKhaiBaoNCKHById(idKhaiBaoNCKH);
    setRecord(response?.data?.data);
    setLoading(false);
  };

  const importDataModel = async (path: string, payload: { file: string | Blob }, getData?: any) => {
    try {
      setLoading(true);
      const response = await importData(path, payload);
      setDanhSachCongTrinh(response?.data?.data ?? []);
      message.success('Import dữ liệu thành công');
      if (getData) getData();
      setVisibleResultImport(true);
      setVisibleFormImport(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const deleteKhaiBaoNCKHModel = async (
    idKhaiBaoNCKH: string,
    isCaNhan: boolean,
    getData?: any,
  ) => {
    if (!idKhaiBaoNCKH) return;
    setLoading(true);
    await deleteKhaiBaoNCKH(idKhaiBaoNCKH, isCaNhan);
    message.success('Xóa thành công');
    setLoading(false);
    if (getData) getData();
  };

  const getGioNghienCuuKhaiBaoModel = async (idKhaiBaoNCKH: string) => {
    if (!idKhaiBaoNCKH) return false;
    try {
      setLoading(true);
      const response = await getGioNghienCuuKhaiBao(idKhaiBaoNCKH);
      setRecordGioNghienCuuKhaiBao(response?.data?.data);
      setDanhSachDienGiaiGioNghienCuu(response?.data?.data?.gioNCKH ?? []);
      setLoading(false);
      return true;
    } catch (err) {
      setLoading(false);
      return false;
    }
  };

  const getAllGioNghienCuuKhaiBaoModel = async (idKhaiBaoNCKH: string) => {
    if (!idKhaiBaoNCKH) return false;
    try {
      setLoading(true);
      const response = await getAllGioNghienCuuKhaiBao(idKhaiBaoNCKH);
      setDanhSachGioNghienCuuKhaiBao(response?.data?.data ?? []);
      setLoading(false);
      return true;
    } catch (err) {
      setLoading(false);
      return false;
    }
  };

  const resetTrangThaiKhaiBaoModel = async (idKhaiBaoNCKH: string, getData: any) => {
    if (!idKhaiBaoNCKH) return;
    try {
      setLoading(true);
      await resetTrangThaiKhaiBao(idKhaiBaoNCKH);
      message.success('Xử lý thành công');
      setLoading(false);
      getData();
    } catch (err) {
      setLoading(false);
    }
  };

  const getGioNckhMeModel = async (idDotKhaiBao: string) => {
    setLoading(true);
    const response = await getGioNckhMe(idDotKhaiBao);
    setRecordGioNghienCuuKhoaHoc({
      ...response?.data?.data,
      gioQuyDoiCongTrinh: response?.data?.data?.gioQuyDoiCongTrinh?.map(
        (item: KhaiBaoNCKH.GioQuyDoiCongTrinh, index: number) => ({
          ...item,
          index,
        }),
      ),
    });
    setLoading(false);
  };

  const chuyenVienGetGioNckhModel = async (idLyLich: string, idDotKhaiBao: string) => {
    if (!idLyLich || !idDotKhaiBao) return;
    setLoading(true);
    const response = await chuyenVienGetGioNckh(idLyLich, idDotKhaiBao);
    setRecordGioNghienCuuKhoaHoc({
      ...response?.data?.data,
      gioQuyDoiCongTrinh: response?.data?.data?.gioQuyDoiCongTrinh?.map(
        (item: KhaiBaoNCKH.GioQuyDoiCongTrinh, index: number) => ({
          ...item,
          index,
        }),
      ),
    });
    setLoading(false);
  };

  const putGioNckhMeModel = async () => {
    setLoading(true);
    if (!recordGioNghienCuuKhoaHoc) return;
    const response = await putGioNckhMe(recordGioNghienCuuKhoaHoc._id, recordGioNghienCuuKhoaHoc);
    setRecordGioNghienCuuKhoaHoc({
      ...response?.data?.data,
      gioQuyDoiCongTrinh: response?.data?.data?.gioQuyDoiCongTrinh?.map(
        (item: KhaiBaoNCKH.GioQuyDoiCongTrinh, index: number) => ({
          ...item,
          index,
        }),
      ),
    });
    message.success('Lưu thành công');
    setLoading(false);
  };

  const getGioNghienCuuKhoaHocPageableModel = async (dotKhaiBaoId: string) => {
    setLoading(true);
    const response = await getGioNghienCuuKhoaHocPageable({
      page,
      limit,
      condition: { ...condition, dotKhaiBaoId, maDinhDanh: condition?.maDinhDanh ?? { $ne: null } },
    });
    setDanhSachGioNghienCuuKhoaHoc(response?.data?.data?.result ?? []);
    setTotal(response?.data?.data?.total ?? 0);
    setLoading(false);
  };

  const duyetTongGioNCKHModel = async (id: string, getData: any) => {
    setLoading(true);
    await duyetTongGioNCKH(id);
    message.success('Đồng bộ thành công');
    getData();
  };

  const duyetAllTongGioNCKHModel = async (idDotKhaiBao: string, getData: any) => {
    try {
      setLoading(true);
      await duyetAllTongGioNCKH(idDotKhaiBao);
      message.success('Đồng bộ thành công');
      getData();
    } catch (err) {
      setLoading(false);
    }
  };

  const xacNhanTongGioNCKHModel = async (id: string, getData: any) => {
    setLoading(true);
    await xacNhanTongGioNCKH(id);
    message.success('Xác nhận thành công');
    getData();
  };

  const exportMauThongKeCongTrinhCBGVModel = async (nam: number) => {
    setLoading(true);
    const res = await exportMauThongKeCongTrinhCBGV(nam);
    FileDownload(
      res.data,
      `ThongKeCongTrinhNCKHCaNhan${nam}_${moment().format('HHmmssDDMMYYYY')}.xlsx`,
    );
    setLoading(false);
  };
  const exportPhongQLKHMauThongKeCongTrinhCBGVModel = async (maGV: string, nam: number) => {
    setLoading(true);
    const res = await exportPhongQLKHMauThongKeCongTrinhCBGV(maGV, nam);
    FileDownload(
      res.data,
      `ThongKeCongTrinhNCKH_${maGV}_${nam}_${moment().format('HHmmssDDMMYYYY')}.xlsx`,
    );
    setLoading(false);
  };
  const exportMauThongKeAllDonViPhongQLKHModel = async (nam: number) => {
    setLoading(true);
    const res = await exportMauThongKeAllDonViPhongQLKH(nam);
    FileDownload(
      res.data,
      `ThongKeCongTrinhNCKH_TatCaDonVi_${nam}_${moment().format('HHmmssDDMMYYYY')}.zip`,
    );
    setLoading(false);
  };
  const exportMauThongKeDonViPhongQLKHModel = async (
    idDonVi: number,
    tenDonVi: string,
    nam: number,
  ) => {
    setLoading(true);
    const res = await exportMauThongKeDonViPhongQLKH(idDonVi, nam);
    FileDownload(
      res.data,
      `ThongKeCongTrinhNCKHDonVi_${tenDonVi}_${nam}_${moment().format('HHmmssDDMMYYYY')}.xlsx`,
    );
    setLoading(false);
  };
  const exportMauThongKeDonViTruongDonViModel = async (nam: number) => {
    setLoading(true);
    const res = await exportMauThongKeDonViTruongDonVi(nam);
    FileDownload(
      res.data,
      `ThongKeCongTrinhNCKHDonVi_${nam}_${moment().format('HHmmssDDMMYYYY')}.xlsx`,
    );
    setLoading(false);
  };
  const exportMauThamDinhDonViModel = async (
    idDonVi: number,
    tenDonVi: string,
    nam: number,
    tinhDiem: boolean,
  ) => {
    setLoading(true);
    const res = await exportMauThamDinhDonVi(idDonVi, nam, tinhDiem);
    FileDownload(
      res.data,
      `ThamDinhDonVi_${tenDonVi}_${nam}_${moment().format('HHmmssDDMMYYYY')}.xlsx`,
    );
    setLoading(false);
  };
  const exportMauThamDinhAllModel = async (nam: number, tinhDiem: boolean) => {
    setLoading(true);
    const res = await exportMauThamDinhAll(nam, tinhDiem);
    FileDownload(res.data, `ThamDinhDonVi_All_${nam}_${moment().format('HHmmssDDMMYYYY')}.zip`);
    setLoading(false);
  };

  const exportDanhSachBaiBaoTheoNamModel = async (nam: number) => {
    setLoading(true);
    const res = await exportDanhSachBaiBaoTheoNam(nam);
    FileDownload(res.data, `DanhSachBaiBaoNam_${nam}_${moment().format('HHmmssDDMMYYYY')}.xlsx`);
    setLoading(false);
  };

  const exportSoLuongDeTaiTheoNamModel = async (nam: number) => {
    setLoading(true);
    const res = await exportSoLuongDeTaiTheoNam(nam);
    FileDownload(res.data, `SoLuongDeTaiNam_${nam}_${moment().format('HHmmssDDMMYYYY')}.xlsx`);
    setLoading(false);
  };

  const exportSoLuongBaiBaoTheoNamModel = async (nam: number) => {
    setLoading(true);
    const res = await exportSoLuongBaiBaoTheoNam(nam);
    FileDownload(res.data, `SoLuongBaiBaoNam_${nam}_${moment().format('HHmmssDDMMYYYY')}.xlsx`);
    setLoading(false);
  };

  const exportCongTrinhTuongUngDeTaiModel = async (
    nam: number,
    maDonVi?: string,
    maDinhDanh?: string,
    tenDonVi?: string,
  ) => {
    setLoading(true);
    const res = await exportCongTrinhTuongUngDeTai(nam, maDonVi, maDinhDanh);
    FileDownload(
      res.data,
      `CongTrinhTuongUngDeTai_${tenDonVi}_${nam}_${moment().format('HHmmssDDMMYYYY')}.xlsx`,
    );
    setLoading(false);
  };

  return {
    exportMauThamDinhAllModel,
    exportPhongQLKHMauThongKeCongTrinhCBGVModel,
    exportMauThamDinhDonViModel,
    exportMauThongKeAllDonViPhongQLKHModel,
    exportMauThongKeDonViPhongQLKHModel,
    exportMauThongKeDonViTruongDonViModel,
    visibleFormExport,
    setVisibleFormExport,
    exportMauThongKeCongTrinhCBGVModel,
    getKhaiBaoNCKHModel,
    setRecordCongTrinh,
    duyetAllTongGioNCKHModel,
    xacNhanTongGioNCKHModel,
    duyetTongGioNCKHModel,
    getGioNghienCuuKhoaHocPageableModel,
    setDanhSachGioNghienCuuKhoaHoc,
    danhSachGioNghienCuuKhoaHoc,
    danhSachGioNghienCuuKhaiBao,
    setDanhSachGioNghienCuuKhaiBao,
    getAllGioNghienCuuKhaiBaoModel,
    exportDanhSachBaiBaoTheoNamModel,
    exportSoLuongDeTaiTheoNamModel,
    exportSoLuongBaiBaoTheoNamModel,
    exportCongTrinhTuongUngDeTaiModel,
    searchKey,
    setSearchKey,
    visibleCongTrinhTrung,
    setVisibleCongTrinhTrung,
    chuyenVienGetGioNckhModel,
    putGioNckhMeModel,
    recordGioNghienCuuKhoaHoc,
    setRecordGioNghienCuuKhoaHoc,
    getGioNckhMeModel,
    resetTrangThaiKhaiBaoModel,
    visibleFormXuLyMany,
    setVisibleFormXuLyMany,
    danhSachDienGiaiGioNghienCuu,
    setDanhSachDienGiaiGioNghienCuu,
    visibleFormDienGiaiGioNghienCuu,
    setVisibleFormDienGiaiGioNghienCuu,
    editDienGiaiGioNghienCuu,
    setEditDienGiaiGioNghienCuu,
    recordDienGiaiGioNghienCuu,
    setRecordDienGiaiGioNghienCuu,
    recordGioNghienCuuKhaiBao,
    setRecordGioNghienCuuKhaiBao,
    getGioNghienCuuKhaiBaoModel,
    visibleList,
    setVisibleList,
    typeList,
    setTypeList,
    conditionUser,
    setConditionUser,
    editGiaiThuong,
    setEditGiaiThuong,
    danhSachGiaiThuong,
    setDanhSachGiaiThuong,
    visibleFormGiaiThuong,
    setVisibleFormGiaiThuong,
    recordGiaiThuong,
    setRecordGiaiThuong,
    danhSachSinhVienNCKH,
    setDanhSachSinhVienNCKH,
    recordSinhVienNCKH,
    setRecordSinhVienNCKH,
    editSinhVienNCKH,
    setEditSinhVienNCKH,
    visibleFormSinhVienNCKH,
    setVisibleFormSinhVienNCKH,
    danhSachSinhVien,
    setDanhSachSinhVien,
    recordChuongSach,
    setRecordChuongSach,
    editChuongSach,
    setEditChuongSach,
    danhSachChuongSach,
    setDanhSachChuongSach,
    visibleFormChuongSach,
    setVisibleFormChuongSach,
    editMucTu,
    setEditMucTu,
    recordMucTu,
    setRecordMucTu,
    visibleFormMucTu,
    setVisibleFormMucTu,
    editSanPham,
    recordSanPham,
    danhSachSanPham,
    visibleFormSanPham,
    setEditSanPham,
    setRecordSanPham,
    setDanhSachSanPham,
    setVisibleFormSanPham,
    editMinhChung,
    setEditMinhChung,
    recordMinhChung,
    setRecordMinhChung,
    danhSachMinhChung,
    setDanhSachMinhChung,
    visibleFormMinhChungSanPham,
    setVisibleFormMinhChungSanPham,
    editDonViPhoiHop,
    recordDonViPhoiHop,
    setEditDonViPhoiHop,
    danhSachDonViPhoiHop,
    visibleFormDonViPhoiHop,
    setRecordDonViPhoiHop,
    setDanhSachDonViPhoiHop,
    setVisibleFormDonViPhoiHop,
    editTrangThaiNghiemThu,
    setEditTrangThaiNghiemThu,
    recordTrangThaiNghiemThu,
    setRecordTrangThaiNghiemThu,
    danhSachTrangThaiNghiemThu,
    setDanhSachTrangThaiNghiemThu,
    visibleFormTrangThaiNghiemThu,
    setVisibleFormTrangThaiNghiemThu,
    visibleFormThanhVien,
    setVisibleFormThanhVien,
    recordThanhVien,
    setRecordThanhVien,
    editThanhVien,
    setEditThanhVien,
    deleteKhaiBaoNCKHModel,
    selectionRowKey,
    setSelectionRowKey,
    selectionRow,
    setSelectionRow,
    danhSachKhaiBao,
    setDanhSachKhaiBao,
    danhSachMucTu,
    setDanhSachMucTu,
    visibleFormImport,
    setVisibleFormImport,
    visibleResultImport,
    setVisibleResultImport,
    importDataModel,
    hideCard,
    setHideCard,
    mode,
    setMode,
    danhSachCongTrinh,
    getQuanLyKhoaHocModel,
    totalCongTrinh,
    recordCongTrinh,
    getKhaiBaoNCKHByIdModel,
    getQuanLyKhoaHocByIdModel,
    tabChuyenVien,
    setTabChuyenVien,
    visibleFormXuLy,
    setVisibleFormXuLy,
    duyetKhaiBaoNCKHModel,
    visibleViewKhaiBao,
    setVisibleViewKhaiBao,
    visibleFormMinhChung,
    setVisibleFormMinhChung,
    danhSachThanhVien,
    setDanhSachThanhVien,
    danhSachUser,
    setDanhSachUser,
    getUserPageableModel,
    putQuanLyKhoaHocModel,
    postKhaiBaoNCKHModel,
    postQuanLyKhoaHocModel,
    putKhaiBaoNCKHModel,
    year,
    setYear,
    record,
    setRecord,
    danhSach,
    setDanhSach,
    ...objInitModel,
  };
};
