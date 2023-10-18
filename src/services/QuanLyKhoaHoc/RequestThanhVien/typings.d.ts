import type { KhaiBaoNCKH } from '@/services/KhaiBaoNCKH/typings';
import type {
  ELoaiCongTrinhKhoaHoc,
  ETrangThaiDuyetThanhVien,
  ETypeRequestThanhVien,
} from '@/utils/constants';

declare module RequestThanhVien {
  export interface Record {
    khaiBaoId: string;
    lyLichNguoiTaoId: string;
    lyLichNguoiKhaiBaoId: string;
    yeuCau: string;
    dotKhaiBaoId: string;
    nguoiTaoId: string;
    nguoiKhaiId: string;
    tenCongTrinh: string;
    danhMucNCKH: ELoaiCongTrinhKhoaHoc;
    tenNguoiKhaiBao: string;
    maDinhDanhNguoiKhaiBao: string;
    tenNguoiTao: string;
    maDinhDanhNguoiTao: string;
    congTrinh: KhaiBaoNCKH.QuanLyKhoaHoc;
    nguoiTao: LyLichKhoaHoc.Record;
    nguoiKhaiBao: LyLichKhoaHoc.Record;
    type: ETypeRequestThanhVien;
    trangThaiDuyetThanhVien: ETrangThaiDuyetThanhVien;
    lyDoDuyet: string;
    id: string;
    _id: string;
  }
}
