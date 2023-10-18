import type { ETrangThaiDotDangKyDeTaiQLKH } from '@/utils/constants';

declare module DotDangKy {
  export interface File {
    author: {
      _id: string;
      username: string;
    };
    createdAt: string;
    filename: string;
    id: string;
    mimetype: string;
    path: string;
    public: boolean;
    updatedAt: string;
    url: string;
    _id: string;
  }

  export interface Record {
    ma: string;
    createdAt: string;
    _id: string;
    ten: string;
    ngayBatDau: string;
    ngayKetThuc: string;
    ngayBatDauDangKy: string;
    ngayKetThucDangKy: string;
    ngayBatDauXetDuyet: string;
    ngayKetThucXetDuyet: string;
    ngayBatDauDeCuong: string;
    ngayKetThucDeCuong: string;
    ngayBatDauNghiemThu: string;
    ngayKetThucNghiemThu: string;
    vanBanKemTheoUrl: string[];
    soLuongDangKy: number;
    hetHan: ETrangThaiDotDangKyDeTaiQLKH;
    mauDangKyDeTai: {
      loaiATemplateId: string;
      loaiBTemplateId: string;
      loaiCTemplateId: string;
      loaiDTemplateId: string;
      code: string;
    };
    loaiATemplate: File[];
    loaiBTemplate: File[];
    loaiCTemplate: File[];
    loaiDTemplate: File[];
    mauNhanXetHoiDong: string;
    bienBanHopXetDuyet: string;
  }
}
