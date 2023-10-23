import type { ELoaiCongTrinhKhoaHoc } from '@/utils/constants';
import type { KhaiBaoNCKH } from '../KhaiBaoNCKH/typings';

declare module ThongKeNCKH {
  export interface GioNCKH {
    soGio: number;
    congThucTinh: string;
  }
  export interface TinhGio {
    tenCongTrinh: string;
    loai: ELoaiCongTrinhKhoaHoc;
    gioNCKH: GioNCKH[];
    idCongTrinh: string;
    idKhaiBao: string;
    congTrinh: KhaiBaoNCKH.QuanLyKhoaHoc;
  }
  export interface Record {
    danhSachTinhGio: TinhGio[];
    nam: number;
    gio: number;
  }

  export interface RecordThongKeChuyenVien {
    _id: string;
    maDinhDanh: string;
    hoVaTen: string;
    maDonVi: string;
    tenDonVi: string;
    email: string;
    gioiTinh: number;
    gio: number;
    nam: number[];
  }
}
