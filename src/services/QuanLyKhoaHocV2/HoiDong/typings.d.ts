import type {
  ELoaiHoiDongKHCN,
  ETrangThaiHoiDongKHCN,
  ETrangThaiNghiemThu,
  ETrangThaiXetDuyetDangKy,
  ETrangThaiXetDuyetDeCuong,
} from '@/utils/constants';
import type { DeTaiKHCN } from '../DeTai/typings';
import type { DotDangKy } from '../DotDangKy/typings';

declare module HoiDong {
  export interface XetDuyet {
    deTaiId: string;
    ketQuaXetDuyet: DeTaiKHCN.XetDuyetKHCN;
    ketQuaDeCuong: DeTaiKHCN.DeCuongKHCN;
    ketQuaNghiemThu: DeTaiKHCN.NghiemThuKHCN;
    ngayDuyet?: string;
    trangThaiXetDuyetDangKy: ETrangThaiXetDuyetDangKy;
    trangThaiXetDuyetDeCuong: ETrangThaiXetDuyetDeCuong;
    trangThaiNghiemThu: ETrangThaiNghiemThu;
  }

  export interface Record {
    deTaiIds: string[];
    loaiHoiDongKhcn: ELoaiHoiDongKHCN;
    dotDangKyId: string;
    ten: string;
    thoiGianBatDau: string;
    _id: string;
    thoiGianKetThuc: string;
    danhSachThanhVien: DeTaiKHCN.ThanhVienKHCN[];
    danhSachThanhVienThamGia: DeTaiKHCN.ThanhVienKHCN[];
    nguoiTao: DeTaiKHCN.ThanhVienKHCN;
    danhSachDeTai: DeTaiKHCN.Record[];
    dotDangKy: DotDangKy.Record;
    hetHan: ETrangThaiHoiDongKHCN;
    bienBanUrl: string[];
    quyetDinhThanhLapHoiDong: string;
    daKetThuc: boolean;
    daDiemDanh: boolean;
    bienBanNhanXet: string;
    thoiGianDiemDanh: string;
    daKetThuc: boolean;
    noiDungHop: string;
  }

  export interface NhanXetHoiDong {
    _id: string;
    thanhVienNhanXet: DeTaiKHCN.ThanhVienKHCN;
    nguoiTaoDeTai: DeTaiKHCN.ThanhVienKHCN;
    hoiDongId: string;
    deTaiId: string;
    nhanXet: string;
    urlBienBan: string;
    hoiDong: HoiDong.Record;
    deTai: DeTaiKHCN.Record;
  }
}
