import type {
  EChucVuHoiDong,
  EDangSanPham,
  ELoaiDeTai,
  EMenhGia,
  EMucDoDeTai,
  EPhaseDeTaiKHCN,
  ETrangThaiDangKy,
  ETrangThaiDiemDanhHoiDongQLKH,
  ETrangThaiNghiemThu,
  ETrangThaiNopDeCuong,
  ETrangThaiThucHien,
  ETrangThaiXetDuyetDeCuong,
} from '@/utils/constants';
import type { HoiDong } from '../HoiDong/typings';

declare module DeTaiKHCN {
  export interface ThanhVienKHCN {
    index: number;
    userId: string;
    maDinhDanh: string;
    maDonVi: string;
    tenDonVi: string;
    chucVu: string;
    chucVuHoiDong: EChucVuHoiDong;
    soDienThoai: string;
    diaChi: string;
    ten: string;
    email: string;
    hocHam: string;
    hocVi: string;
    trangThaiDiemDanh: ETrangThaiDiemDanhHoiDongQLKH;
    color?: { color: string; text: string };
  }

  export interface KinhPhiDeXuat {
    kinhPhi: number;
    menhGia: EMenhGia;
  }

  export interface TimeLine {
    startDate: string;
    endDate: string;
    noiDungTimeline: string;
    sanPhamUrl: string[];
    ketQuaDuKien: string;
    kinhPhiDuKien: number;
    index: number;
  }

  export interface DangKyKHCN {
    ten: string;
    loaiDeTai: ELoaiDeTai;
    chuTriDeTai: ThanhVienKHCN;
    mucTieuDeTai: string;
    noiDungDeTai: string;
    ketQuaDeTai: string;
    thoiGianThucHienBatDau: string;
    thoiGianThucHienKetThuc: string;
    kinhPhi: KinhPhiDeXuat;
    comment?: string;
    tinhCanThietVaMoi?: string;
    thuocLinhVuc?: string;
    donViChuTri?: string;
    coQuanQuanLy?: string;
    coQuanPhoiHop?: string;
    soDienThoai?: string;
    diaChiCongTac?: string;
    danhSachCTV: ThanhVienKHCN[];
    attachmentUrl: string;
    noiDungNghienCuu: TimeLine[];
    ghiChu: string;
    urlDeXuat: string;
    mucDoDeTai: EMucDoDeTai;
  }

  export interface XetDuyetKHCN {
    kinhPhi: KinhPhiDeXuat;
    bienBanXetDuyetUrl: string[];
    comment: string;
    hoiDongId: string;
    ngayDuyet: string;
    hoiDong: HoiDong.Record;
    quyetDinhGiaoUrl: string;
    commentHoiDong: string;
    commentQuyetDinhGiaoUrl: string;
  }

  export interface SanPhamDeCuong {
    index: number;
    dangSanPham: EDangSanPham;
    tenSanPham: string;
    donViTinh: string;
    soLuong: number;
    chuThichKetQua: string;
    chuThichYeuCau: string;
    yeuCauLoai23: string;
    mucChatLuongCanDatLoai1: string;
    mucChatLuongThamKhaoLoai1: string;
    sanPhamUrl: string[];
    fileType: string[];
  }

  export interface DuToanKinhPhi {
    index: number;
    noiDungKhoanChi: string;
    thanhTien: number;
  }

  export interface DeCuongKHCN {
    soLuocTinhHinhNghienCuuTrongNuoc: string;
    soLuocTinhHinhNghienCuuNgoaiNuoc: string;
    nhuCauThucTeKhaNangApDung: string;
    deCuongUrl: string[];
    ketQuaDuKien: string;
    timeline: Timeline[];
    comment: string;
    commentHoiDong: string;
    sanPhamDeCuong: SanPhamDeCuong[];
    duToanKinhPhi: DuToanKinhPhi[];
    hoiDong: HoiDong.Record;
    hoiDongId: string;
    hopDong: string;
    scanDeCuong: string;
  }

  export interface NghiemThuKHCN {
    sanPhamUrl: string[];
    comment: string;
    banGiaiTrinhUrl: string[];
    hoiDong: HoiDong.Record;
    hoiDongId: string;
  }

  export interface DeTaiElasticSearch {
    id: string;
    ten: string;
    noiDung: string;
  }

  export interface KetQuaSauNghiemThu {
    index?: number;
    ten: string;
    url: string[];
    ghiChu: string;
  }

  export interface Record {
    index: number;
    _id: string;
    nguoiTao: ThanhVienKHCN;
    dotDangKyId: string;
    dangKyKhcn: DangKyKHCN;
    xetDuyetKhcn: XetDuyetKHCN;
    xetDuyetKhcnTemp?: HoiDong.XetDuyet;
    deCuongKhcn: DeCuongKHCN;
    nghiemThuKhcn: NghiemThuKHCN;
    lock: boolean;
    lockXetDuyet: boolean;
    lockNopDeCuong: boolean;
    lockDeCuong: boolean;
    lockNghiemThu: boolean;
    lockThucHien: boolean;
    lockSauNghiemThu: boolean;
    createdAt: string;
    phaseDeTaiKhcn: EPhaseDeTaiKHCN;
    maDeTai: string;
    trangThaiDangKy: ETrangThaiDangKy;
    trangThaiXetDuyetDangKy: ETrangThaiXetDuyetDangKy;
    trangThaiNopDeCuong: ETrangThaiNopDeCuong;
    trangThaiXetDuyetDeCuong: ETrangThaiXetDuyetDeCuong;
    trangThaiThucHien: ETrangThaiThucHien;
    trangThaiNghiemThu: ETrangThaiNghiemThu;
    commentNopDeCuong: string;
    commentThucHien: string;
    urlQuyetDinhGiao: string;
    hoanThanh: boolean;
    taiLieuSauNghiemThu: KetQuaSauNghiemThu[];
  }
}
