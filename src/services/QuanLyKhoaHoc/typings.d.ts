declare module QuanLyKhoaHoc {
  export interface TongKet {
    baiBaoKhoaHoc: BaiBaoKhoaHoc.Record[];
    bangDocQuyenGiaiPhap: BangSangChe.Record[];
    huongDanNcsHvch: HuongDanNghienCuuSinh.Record[];
    nhiemVuKHCN: NhiemVuKHCN.Record[];
    sachPhucVuDaoTao: BienSoanSach.Record[];
    tacPhamThanhTich: TacPhamThanhTich.Record[];
  }

  export interface Count {
    baiBaoKhoaHoc: number;
    bangDocQuyenGiaiPhap: number;
    huongDanNcsHvch: number;
    nhiemVuKHCN: number;
    sachPhucVuDaoTao: number;
    tacPhamThanhTich: number;
  }

  export interface GiangVienKhaiBao {
    _id: string;
    maDinhDanh: string;
    hoTenNguoiKhaiBao: string;
    maDonVi: string;
    tenDonVi: string;
  }

  export interface NhomDeTai {
    _id: string;
    nhomDeTai: string;
    moTa: string;
  }

  export interface DonVi {
    _id?: string;
    tenDonViDayDu: string;
    tenDonViVietTat: string;
    truongDonVi: string;
    soDienThoai: string;
  }

  export interface TaiLieuDinhKem {
    tenTaiLieu: string;
    loaiTaiLieu?: string;
    url: string[];
  }

  export interface Nguoi {
    fullName: string;
    code: string;
  }

  export interface KeHoachNamToi {
    nam: number;
    _id: string;
    taiLieuDinhKem: TaiLieuDinhKem;
    nguoiTao: Nguoi;
    nguoiChinhSua: Nguoi;
  }

  export interface ThongKeGeneral {
    _id: ELoaiCongTrinhKhoaHoc;
    duyet: number;
    khongDuyet: number;
    chinhSuaLai: number;
    daChinhSua: number;
    chuaTiepNhan: number;
  }

  export interface DangKyDeTai extends KeHoachNamToi {
    donVi: DonVi;
    idDonVi: string;
    idNhomDeTai: string;
    tenNhiemVuKHCN: string;
    maSo: string;
    nhomDeTai: NhomDeTai;
    taiLieuDinhKem: TaiLieuDinhKem[];
  }

  export type HoiDongPheDuyet = KeHoachNamToi;
  export type GiaoNhiemVu = DangKyDeTai;
}
