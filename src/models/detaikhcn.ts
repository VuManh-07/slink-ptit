import useInitModel from '@/hooks/useInitModel';
import {
  canBoDuyetHoanThanhDeTai,
  canBoGiangVienLockThucHienDeTai,
  canBoGiangVienUpdateDeCuong,
  canBoGiangVienUpdateNghiemThu,
  canBoNopKetQuaSauNghiemThu,
  chuyenVienKhoaOrMoKhoaDeTai,
  chuyenVienNghiemThuDeTaiSauHoiDong,
  chuyenVienPutDeCuong,
  chuyenVienPutNghiemThu,
  chuyenVienResetTrangThaiChuaTiepNhan,
  chuyenVienTiepNhanDeCuong,
  chuyenVienTiepNhanDeCuongSauHoiDong,
  chuyenVienTiepNhanDeTai,
  chuyenVienTiepNhanDeTaiSauHoiDong,
  chuyenVienTiepNhanThucHien,
  exportAllDeTaiByTrangThai,
  exportAllQuyetDinhGiaoByDotByMaDonVi,
  exportBangTongHopDangKyDeTaiNhomAB,
  exportDeTaiById,
  exportQuyetDinhGiao,
  getDeTaiNgoaiHoiDong,
  giangVienKhoaOrMoKhoaDeTai,
  giangVienNopKetQuaSauNghiemThu,
  giangVienPutMyDeTaiPhaseDangKy,
  giangVienPutMyDeTaiPhaseXetDuyetOrDeCuongOrNghiemThu,
  giangVienUploadDeCuong,
  importQuyetDinhGiao,
  lockDeCuong2022,
  searchDeTaiTheoTen,
} from '@/services/QuanLyKhoaHocV2/DeTai/detai';
import type { DeTaiKHCN } from '@/services/QuanLyKhoaHocV2/DeTai/typings';
import type {
  ELoaiHoiDongKHCN,
  EPhaseDeTaiKHCN,
  ETrangThaiDangKy,
  ETrangThaiDeTaiQuanLyKhoaHoc,
  ETrangThaiNopDeCuong,
  ETrangThaiThucHien,
  ETrangThaiXetDuyetDangKy,
} from '@/utils/constants';
import { EThaoTacDeTai } from '@/utils/constants';
import { message } from 'antd';
import FileDownload from 'js-file-download';
import moment from 'moment';
import { useState } from 'react';
export default () => {
  const [record, setRecord] = useState<DeTaiKHCN.Record>();
  const [danhSach, setDanhSach] = useState<DeTaiKHCN.Record[]>([]);
  const [danhSachDeTaiElasticSearch, setDanhSachDeTaiElasticSearch] = useState<
    DeTaiKHCN.DeTaiElasticSearch[]
  >([]);
  const [trangThaiDeTaiQLKH, setTrangThaiDeTaiQLKH] = useState<
    ETrangThaiDeTaiQuanLyKhoaHoc | 'all'
  >('all');
  const [visibleViewDetail, setVisibleViewDetail] = useState<boolean>(false);
  const [visibleFormDeCuong, setVisibleFormDeCuong] = useState<boolean>(false);
  const [visibleFormThucHienDeTai, setVisibleFormThucHienDeTai] = useState<boolean>(false);
  const [visibleFormNghiemThu, setVisibleFormNghiemThu] = useState<boolean>(false);
  const [visibleFormSauNghiemThu, setVisibleFormSauNghiemThu] = useState<boolean>(false);
  const objInitModelDeTaiChuyenVien = useInitModel(
    'de-tai-khcn',
    'condition',
    setDanhSach,
    setRecord,
  );

  const { setLoading, getModel, condition } = objInitModelDeTaiChuyenVien;
  const [visibleTableDeTaiTrung, setVisibleTableDeTaiTrung] = useState<boolean>(false);

  const {
    getModel: giangVienGetMyDeTaiPageableModel,
    getAllModel: giangVienGetMyDeTaiAllModel,
    postModel: giangVienPostMyDeTaiModel,
    deleteModel: giangVienDeleteMyDeTaiModel,
    condition: conditionGiangVien,
    loading: loadingGiangVien,
    total: totalGiangVien,
    setLoading: setLoadingGiangVien,
  } = useInitModel('de-tai-khcn/me', 'condition', setDanhSach, setRecord);

  const [danhSachCongTacVien, setDanhSachCongTacVien] = useState<DeTaiKHCN.ThanhVienKHCN[]>([]);
  const [recordCongTacVien, setRecordCongTacVien] = useState<DeTaiKHCN.ThanhVienKHCN>();
  const [editCongTacVien, setEditCongTacVien] = useState<boolean>(false);
  const [visibleFormCongTacVien, setVisibleFormCongTacVien] = useState<boolean>(false);
  const [danhSachKetQuaSauNghiemThu, setDanhSachKetQuaSauNghiemThu] = useState<
    DeTaiKHCN.KetQuaSauNghiemThu[]
  >([]);
  const [recordKetQuaSauNghiemThu, setRecordKetQuaSauNghiemThu] =
    useState<DeTaiKHCN.KetQuaSauNghiemThu>();
  const [editKetQuaSauNghiemThu, setEditKetQuaSauNghiemThu] = useState<boolean>(false);
  const [visibleFormKetQuaSauNghiemThu, setVisibleFormKetQuaSauNghiemThu] =
    useState<boolean>(false);

  const [danhSachSanPhamDeCuong, setDanhSachSanPhamDeCuong] = useState<DeTaiKHCN.SanPhamDeCuong[]>(
    [],
  );
  const [recordSanPhamDeCuong, setRecordSanPhamDeCuong] = useState<DeTaiKHCN.SanPhamDeCuong>();
  const [editSanPhamDeCuong, setEditSanPhamDeCuong] = useState<boolean>(false);
  const [visibleFormSanPhamDeCuong, setVisibleFormSanPhamDeCuong] = useState<boolean>(false);

  const [danhSachTimelineDeCuong, setDanhSachTimelineDeCuong] = useState<DeTaiKHCN.TimeLine[]>([]);
  const [recordTimelineDeCuong, setRecordTimelineDeCuong] = useState<DeTaiKHCN.TimeLine>();
  const [editTimelineDeCuong, setEditTimelineDeCuong] = useState<boolean>(false);
  const [visibleFormTimelineDeCuong, setVisibleFormTimelineDeCuong] = useState<boolean>(false);

  const [danhSachNoiDungNghienCuu, setDanhSachNoiDungNghienCuu] = useState<DeTaiKHCN.TimeLine[]>(
    [],
  );
  const [recordNoiDungNghienCuu, setRecordNoiDungNghienCuu] = useState<DeTaiKHCN.TimeLine>();
  const [editNoiDungNghienCuu, setEditNoiDungNghienCuu] = useState<boolean>(false);
  const [visibleFormNoiDungNghienCuu, setVisibleFormNoiDungNghienCuu] = useState<boolean>(false);

  const [danhSachDuToanKinhPhi, setDanhSachDuToanKinhPhi] = useState<DeTaiKHCN.DuToanKinhPhi[]>([]);
  const [recordDuToanKinhPhi, setRecordDuToanKinhPhi] = useState<DeTaiKHCN.DuToanKinhPhi>();
  const [editDuToanKinhPhi, setEditDuToanKinhPhi] = useState<boolean>(false);
  const [visibleFormDuToanKinhPhi, setVisibleFormDuToanKinhPhi] = useState<boolean>(false);
  const [typeXuLy, setTypeXuLy] = useState<EThaoTacDeTai>(EThaoTacDeTai.GIANG_VIEN_THEM_MOI_DE_TAI);

  const chuyenVienTiepNhanDeTaiModel = async (
    idDeTai: string,
    path: 'moi' | 'chinh-sua',
    payload: {
      trangThaiDangKy: ETrangThaiDangKy;
      comment: string;
    },
  ) => {
    if (!idDeTai) return;
    try {
      setLoading(true);
      await chuyenVienTiepNhanDeTai(idDeTai, path, payload);
      message.success('Xử lý thành công');
    } catch (err) {
      setLoading(false);
    }
  };

  const chuyenVienTiepNhanDeCuongModel = async (
    idDeTai: string,
    path: 'moi' | 'chinh-sua',
    payload: {
      trangThaiNopDeCuong: ETrangThaiNopDeCuong;
      comment: string;
    },
    getData?: any,
  ) => {
    if (!idDeTai) return;
    try {
      setLoading(true);
      await chuyenVienTiepNhanDeCuong(idDeTai, path, payload);
      message.success('Xử lý thành công');
      if (getData) getData();
    } catch (err) {
      setLoading(false);
    }
  };
  const chuyenVienTiepNhanThucHienModel = async (
    idDeTai: string,
    path: 'moi' | 'chinh-sua',
    payload: {
      trangThaiThucHien: ETrangThaiThucHien;
      comment: string;
    },
    getData?: any,
  ) => {
    if (!idDeTai) return;
    try {
      setLoading(true);
      await chuyenVienTiepNhanThucHien(idDeTai, path, payload);
      message.success('Xử lý thành công');
      if (getData) getData();
    } catch (err) {
      setLoading(false);
    }
  };

  const chuyenVienResetTrangThaiChuaTiepNhanModel = async (
    idDeTai: string,
    idDotDangKy: string,
    phaDeTai: EPhaseDeTaiKHCN,
    getData: any,
  ) => {
    if (!idDeTai) return;
    try {
      setLoading(true);
      await chuyenVienResetTrangThaiChuaTiepNhan(idDeTai, phaDeTai);
      message.success('Xử lý thành công');
      getData();
    } catch (err) {
      setLoading(false);
    }
  };

  const chuyenVienKhoaOrMoKhoaDeTaiModel = async (
    type: 'lock' | 'unlock',
    idDeTai: string,
    phaDeTai: EPhaseDeTaiKHCN,
    getData: any,
  ) => {
    if (!idDeTai) return;
    try {
      setLoading(true);
      await chuyenVienKhoaOrMoKhoaDeTai(type, idDeTai, phaDeTai);
      message.success('Xử lý thành công');
      getData();
    } catch (err) {
      setLoading(false);
    }
  };

  const giangVienKhoaOrMoKhoaDeTaiModel = async (
    type: 'lock' | 'unlock',
    idDeTai: string,
    phaDeTai: EPhaseDeTaiKHCN,
    idDotDangKy?: string,
  ) => {
    if (!idDeTai) return;
    try {
      setLoadingGiangVien(true);
      await giangVienKhoaOrMoKhoaDeTai(type, idDeTai, phaDeTai);
      message.success('Xử lý thành công');
      giangVienGetMyDeTaiPageableModel(
        {
          ...condition,
          dotDangKyId: idDotDangKy,
        },
        'pageable',
        undefined,
        undefined,
        { createdAt: -1 },
      );
    } catch (err) {
      setLoadingGiangVien(false);
    }
  };

  const lockDeCuong2022Model = async (idDeTai: string, getData: any) => {
    if (!idDeTai) return;
    try {
      setLoadingGiangVien(true);
      await lockDeCuong2022(idDeTai);
      message.success('Xử lý thành công');
      if (getData) getData();
      setLoadingGiangVien(false);
    } catch (err) {
      setLoadingGiangVien(false);
    }
  };

  const getDeTaiNgoaiHoiDongModel = async (
    payload: { loaiHoiDongKhcn: ELoaiHoiDongKHCN; condition?: any },
    idDotDangKy: string,
  ) => {
    if (!idDotDangKy) return;
    setLoading(true);
    const response = await getDeTaiNgoaiHoiDong(payload, idDotDangKy);
    setDanhSach(response?.data?.data ?? []);
    setLoading(false);
  };

  const chuyenVienTiepNhanDeTaiSauHoiDongModel = async (
    idDeTai: string,
    payload: {
      trangThaiXetDuyet: ETrangThaiDangKy;
      comment: string;
    },
    getData: any,
  ) => {
    if (!idDeTai) return;
    try {
      setLoading(true);
      await chuyenVienTiepNhanDeTaiSauHoiDong(idDeTai, payload);
      message.success('Xử lý thành công');
      if (getData) getData();
    } catch (err) {
      setLoading(false);
    }
  };

  const chuyenVienTiepNhanDeCuongSauHoiDongModel = async (
    idDeTai: string,
    payload: { deCuongKhcn: DeTaiKHCN.DeCuongKHCN },
    getData?: any,
  ) => {
    if (!idDeTai) return;
    try {
      setLoading(true);
      await chuyenVienTiepNhanDeCuongSauHoiDong(idDeTai, payload);
      message.success('Xử lý thành công');
      setVisibleFormDeCuong(false);
      if (getData) getData();
    } catch (err) {
      setLoading(false);
    }
  };

  const chuyenVienNghiemThuDeTaiSauHoiDongModel = async (
    idDeTai: string,
    payload: { nghiemThuKhcn: DeTaiKHCN.NghiemThuKHCN },
    getData: any,
  ) => {
    if (!idDeTai) return;
    try {
      setLoading(true);
      await chuyenVienNghiemThuDeTaiSauHoiDong(idDeTai, payload);
      message.success('Xử lý thành công');
      setVisibleFormNghiemThu(false);
      if (getData) getData();
    } catch (err) {
      setLoading(false);
    }
  };

  const importQuyetDinhGiaoModel = async (
    idDeTai: string,
    payload: {
      quyetDinhGiaoUrl: string;
      commentQuyetDinhGiaoUrl: string;
    },
    getData?: any,
  ) => {
    if (!idDeTai) return;
    try {
      setLoading(true);
      await importQuyetDinhGiao(idDeTai, payload);
      message.success('Import thành công');
      setLoading(false);
      if (getData) {
        getData();
      } else getModel();
    } catch (err) {
      setLoading(false);
    }
  };

  const exportQuyetDinhGiaoModel = async (idDeTai: string) => {
    try {
      setLoading(true);
      const response = await exportQuyetDinhGiao(idDeTai);
      FileDownload(response.data, `quyetdinhgiao_${moment().format('HH:mm_DDMMYYYY')}.pdf`);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const exportDeTaiByIdModel = async (
    idDeTai: string,
    trangThaiDeTai: ETrangThaiDangKy | ETrangThaiXetDuyetDangKy,
  ) => {
    try {
      setLoading(true);
      const response = await exportDeTaiById(idDeTai);
      FileDownload(response.data, `DeTai_${trangThaiDeTai}_${moment().format('YYYYMMDDHHmm')}.pdf`);
      setLoading(false);
    } catch (err) {
      message.error('Không tìm thấy mẫu đơn của của đợt đăng ký cho đề tài này');
      setLoading(false);
    }
  };

  const exportAllDeTaiByTrangThaiModel = async (paramCondition: any) => {
    try {
      setLoading(true);
      const response = await exportAllDeTaiByTrangThai({ condition: paramCondition });
      FileDownload(response.data, `DeTai_${moment().format('YYYYMMDDHHmm')}.zip`);
      setLoading(false);
    } catch (err) {
      message.error('Không tìm thấy mẫu đơn của của đợt đăng ký cho đề tài này');
      setLoading(false);
    }
  };

  const exportBangTongHopDangKyDeTaiNhomABModel = async (idDotDangKy: string) => {
    try {
      if (!idDotDangKy) return;
      setLoading(true);
      const response = await exportBangTongHopDangKyDeTaiNhomAB(idDotDangKy);
      FileDownload(response.data, `BangTongHop_${moment().format('YYYYMMDDHHmm')}.xlsx`);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const exportAllQuyetDinhGiaoByDotByMaDonViModel = async (idDot: string, maDonVi: string) => {
    try {
      if (!idDot || !maDonVi) return;
      setLoading(true);
      const response = await exportAllQuyetDinhGiaoByDotByMaDonVi(idDot, maDonVi);
      FileDownload(
        response.data,
        `QuyetDinhGiao_${maDonVi}_${moment().format('YYYYMMDDHHmm')}.pdf`,
      );
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const giangVienPutMyDeTaiPhaseDangKyModel = async (
    idDeTai: string,
    payload: {
      dangKyKhcn: DeTaiKHCN.DangKyKHCN;
    },
    getData?: any,
  ) => {
    try {
      setLoading(true);
      await giangVienPutMyDeTaiPhaseDangKy(idDeTai, payload);
      message.success('Lưu thành công');
      setLoading(false);
      if (getData) {
        getData();
      } else {
        giangVienGetMyDeTaiPageableModel();
      }
    } catch (err) {
      setLoading(false);
    }
  };

  const giangVienPutMyDeTaiPhaseXetDuyetOrDeCuongOrNghiemThuModel = async (
    idDeTai: string,
    payload: {
      dangKyKhcn: DeTaiKHCN.DangKyKHCN;
    },
    path: 'de-cuong' | 'nghiem-thu' | 'xet-duyet',
    getData?: any,
  ) => {
    try {
      setLoading(true);
      await giangVienPutMyDeTaiPhaseXetDuyetOrDeCuongOrNghiemThu(idDeTai, payload, path);
      message.success('Lưu thành công');
      setLoading(false);
      if (getData) {
        getData();
      } else {
        giangVienGetMyDeTaiPageableModel();
      }
    } catch (err) {
      setLoading(false);
    }
  };

  const searchDeTaiTheoTenModel = async (text: string) => {
    const response = await searchDeTaiTheoTen(text);
    setDanhSachDeTaiElasticSearch(response?.data?.data ?? []);
    if (response?.data?.data?.length > 0) {
      setVisibleTableDeTaiTrung(true);
    } else {
      message.success('Không có đề tài nào trùng');
    }
  };

  const canBoGiangVienUpdateDeCuongModel = async (
    idDeTai: string,
    payload: {
      deCuongKhcn: DeTaiKHCN.DeCuongKHCN;
    },
    getData?: any,
  ) => {
    try {
      setLoading(true);
      await canBoGiangVienUpdateDeCuong(idDeTai, payload);
      message.success('Lưu thành công');
      setVisibleFormDeCuong(false);
      setVisibleFormThucHienDeTai(false);
      setLoading(false);
      if (getData) getData();
    } catch (err) {
      setLoading(false);
    }
  };

  const canBoGiangVienUpdateNghiemThuModel = async (
    idDeTai: string,
    payload: {
      nghiemThuKhcn: DeTaiKHCN.NghiemThuKHCN;
    },
    getData?: any,
  ) => {
    try {
      setLoading(true);
      await canBoGiangVienUpdateNghiemThu(idDeTai, payload);
      message.success('Lưu thành công');
      setVisibleFormNghiemThu(false);
      setLoading(false);
      if (getData) getData();
    } catch (err) {
      setLoading(false);
    }
  };

  const chuyenVienPutDeCuongModel = async (
    idDeTai: string,
    payload: {
      deCuongKhcn: DeTaiKHCN.DeCuongKHCN;
    },
    getData?: any,
  ) => {
    try {
      setLoading(true);
      await chuyenVienPutDeCuong(idDeTai, payload);
      message.success('Lưu thành công');
      setVisibleFormDeCuong(false);
      setLoading(false);
      if (getData) getData();
    } catch (err) {
      setLoading(false);
    }
  };

  const chuyenVienPutNghiemThuModel = async (
    idDeTai: string,
    payload: {
      nghiemThuKhcn: DeTaiKHCN.NghiemThuKHCN;
    },
    getData?: any,
  ) => {
    try {
      setLoading(true);
      await chuyenVienPutNghiemThu(idDeTai, payload);
      message.success('Lưu thành công');
      setVisibleFormNghiemThu(false);
      setLoading(false);
      if (getData) getData();
    } catch (err) {
      setLoading(false);
    }
  };

  const canBoGiangVienLockThucHienDeTaiModel = async (idDeTai: string, idDotDangKy?: string) => {
    if (!idDeTai) return;
    try {
      setLoadingGiangVien(true);
      await canBoGiangVienLockThucHienDeTai(idDeTai);
      message.success('Xử lý thành công');
      giangVienGetMyDeTaiPageableModel(
        {
          ...condition,
          dotDangKyId: idDotDangKy,
        },
        'pageable',
        undefined,
        undefined,
        { createdAt: -1 },
      );
    } catch (err) {
      setLoadingGiangVien(false);
    }
  };

  const giangVienNopKetQuaSauNghiemThuModel = async (
    idDeTai: string,
    payload: {
      ketQua: DeTaiKHCN.KetQuaSauNghiemThu[];
    },
    getData: any,
  ) => {
    setLoading(true);
    await giangVienNopKetQuaSauNghiemThu(idDeTai, payload);
    message.success('Lưu thành công');
    setVisibleFormSauNghiemThu(false);
    if (getData) getData();
    setLoading(false);
  };
  const canBoNopKetQuaSauNghiemThuModel = async (
    idDeTai: string,
    payload: {
      ketQua: DeTaiKHCN.KetQuaSauNghiemThu[];
    },
    getData: any,
  ) => {
    setLoading(true);
    await canBoNopKetQuaSauNghiemThu(idDeTai, payload);
    message.success('Lưu thành công');
    setVisibleFormSauNghiemThu(false);
    if (getData) getData();
    setLoading(false);
  };

  const canBoDuyetHoanThanhDeTaiModel = async (idDeTai: string, getData: any) => {
    setLoading(true);
    await canBoDuyetHoanThanhDeTai(idDeTai);
    message.success('Xác nhận thành công');
    if (getData) getData();
    setLoading(false);
  };

  const giangVienUploadDeCuongModel = async (
    idDeTai: string,
    payload: { scanDeCuong: string; hopDong: string },
    getData: any,
  ) => {
    setLoading(true);
    await giangVienUploadDeCuong(idDeTai, payload);
    message.success('Gửi thành công');
    setVisibleFormDeCuong(false);
    if (getData) getData();
    setLoading(false);
  };

  return {
    lockDeCuong2022Model,
    giangVienUploadDeCuongModel,
    danhSachKetQuaSauNghiemThu,
    setDanhSachKetQuaSauNghiemThu,
    recordKetQuaSauNghiemThu,
    setRecordKetQuaSauNghiemThu,
    editKetQuaSauNghiemThu,
    setEditKetQuaSauNghiemThu,
    visibleFormKetQuaSauNghiemThu,
    setVisibleFormKetQuaSauNghiemThu,
    visibleFormSauNghiemThu,
    setVisibleFormSauNghiemThu,
    canBoDuyetHoanThanhDeTaiModel,
    canBoNopKetQuaSauNghiemThuModel,
    giangVienNopKetQuaSauNghiemThuModel,
    typeXuLy,
    setTypeXuLy,
    exportBangTongHopDangKyDeTaiNhomABModel,
    chuyenVienTiepNhanDeCuongModel,
    chuyenVienTiepNhanDeTaiModel,
    chuyenVienTiepNhanThucHienModel,
    canBoGiangVienLockThucHienDeTaiModel,
    visibleFormThucHienDeTai,
    setVisibleFormThucHienDeTai,
    danhSachNoiDungNghienCuu,
    setDanhSachNoiDungNghienCuu,
    editNoiDungNghienCuu,
    recordNoiDungNghienCuu,
    setEditNoiDungNghienCuu,
    setRecordNoiDungNghienCuu,
    visibleFormNoiDungNghienCuu,
    setVisibleFormNoiDungNghienCuu,
    chuyenVienPutNghiemThuModel,
    visibleFormNghiemThu,
    setVisibleFormNghiemThu,
    chuyenVienPutDeCuongModel,
    setVisibleFormTimelineDeCuong,
    visibleFormTimelineDeCuong,
    visibleFormSanPhamDeCuong,
    setVisibleFormSanPhamDeCuong,
    visibleFormDuToanKinhPhi,
    setVisibleFormDuToanKinhPhi,
    danhSachSanPhamDeCuong,
    setDanhSachSanPhamDeCuong,
    recordSanPhamDeCuong,
    setRecordSanPhamDeCuong,
    setEditSanPhamDeCuong,
    editSanPhamDeCuong,
    danhSachTimelineDeCuong,
    setDanhSachTimelineDeCuong,
    recordTimelineDeCuong,
    setRecordTimelineDeCuong,
    setEditTimelineDeCuong,
    editTimelineDeCuong,
    danhSachDuToanKinhPhi,
    setDanhSachDuToanKinhPhi,
    recordDuToanKinhPhi,
    setRecordDuToanKinhPhi,
    setEditDuToanKinhPhi,
    editDuToanKinhPhi,
    visibleFormDeCuong,
    setVisibleFormDeCuong,
    canBoGiangVienUpdateDeCuongModel,
    canBoGiangVienUpdateNghiemThuModel,
    visibleTableDeTaiTrung,
    setVisibleTableDeTaiTrung,
    exportAllQuyetDinhGiaoByDotByMaDonViModel,
    exportAllDeTaiByTrangThaiModel,
    danhSachDeTaiElasticSearch,
    setDanhSachDeTaiElasticSearch,
    searchDeTaiTheoTenModel,
    exportDeTaiByIdModel,
    giangVienPutMyDeTaiPhaseXetDuyetOrDeCuongOrNghiemThuModel,
    giangVienPutMyDeTaiPhaseDangKyModel,
    exportQuyetDinhGiaoModel,
    importQuyetDinhGiaoModel,
    chuyenVienTiepNhanDeTaiSauHoiDongModel,
    chuyenVienTiepNhanDeCuongSauHoiDongModel,
    chuyenVienNghiemThuDeTaiSauHoiDongModel,
    getDeTaiNgoaiHoiDongModel,
    giangVienKhoaOrMoKhoaDeTaiModel,
    chuyenVienKhoaOrMoKhoaDeTaiModel,
    chuyenVienResetTrangThaiChuaTiepNhanModel,
    visibleViewDetail,
    setVisibleViewDetail,
    recordCongTacVien,
    setRecordCongTacVien,
    editCongTacVien,
    setEditCongTacVien,
    visibleFormCongTacVien,
    setVisibleFormCongTacVien,
    danhSachCongTacVien,
    setDanhSachCongTacVien,
    trangThaiDeTaiQLKH,
    setTrangThaiDeTaiQLKH,
    record,
    setRecord,
    danhSach,
    setDanhSach,
    giangVienDeleteMyDeTaiModel,
    giangVienGetMyDeTaiAllModel,
    giangVienGetMyDeTaiPageableModel,
    giangVienPostMyDeTaiModel,
    conditionGiangVien,
    loadingGiangVien,
    totalGiangVien,
    setLoadingGiangVien,
    ...objInitModelDeTaiChuyenVien,
  };
};
