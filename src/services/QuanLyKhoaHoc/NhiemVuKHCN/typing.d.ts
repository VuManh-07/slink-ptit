import type {
  ECapNghiemThu,
  ECapQuanLy,
  EKetQuaNghiemThu,
  ELoaiHinhDeTaiNhiemVu,
  ELoaiNganSach,
} from '@/utils/constants';

declare module NhiemVuKHCN {
  export interface KinhPhi {
    giaTien: string;
    menhGia: string;
    loaiNganSach: ELoaiNganSach;
  }

  export interface QuyetDinhNghiemThu {
    thongTinNguoiKhaiBao: string;
    capNghiemThu: ECapNghiemThu;
  }

  export interface TrangThaiNghiemThu {
    thoiGian: string;
    capNghiemThu: ECapNghiemThu;
    ketQuaNghiemThu: EKetQuaNghiemThu;
  }
  export interface Record {
    tenSanPhamNCKH: string;
    danhMucNCKH: string;
    soLuongThanhVien: number;
    maSo: string;
    capQuanLy: ECapQuanLy;
    loaiHinhDeTaiNhiemVu: ELoaiHinhDeTaiNhiemVu;
    kinhPhi: KinhPhi;
    soQuyetDinhThanhLapHoiDongNghiemThu: QuyetDinhNghiemThu;
    quyetDinhNghiemThuCapBo: QuyetDinhNghiemThu;
    trangThaiNghiemThu: TrangThaiNghiemThu[];
  }
}
