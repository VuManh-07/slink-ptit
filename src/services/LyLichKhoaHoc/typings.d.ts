import type { ELoaiCongTrinhKhoaHoc } from '@/utils/constants';

declare module LyLichKhoaHoc {
  export interface ThongKeKhaiBao {
    _id: ELoaiCongTrinhKhoaHoc;
    khongDuyet: number;
    duyet: number;
    daChinhSua: number;
    chuaTiepNhan: number;
    chinhSuaLai: number;
  }

  export interface Record {
    index?: number;
    _id: string;
    userId: string;
    maDinhDanh: string;
    hoVaTen: string;
    maDonVi: string;
    tenDonVi: string;
    vaiTro: string;
    quaTrinhCongTac: QuaTrinhCongTac[];
    dienBienLuong: DienBienLuong[];
    chucDanhNghienCuu: string;
    chucVu: string;
    dienThoaiOffice: string;
    dienThoaiPersonal: string;
    email: string;
    fax: string;
    gioiTinh: number;
    hocHam: string;
    hocVi: string;
    lop: string;
    quaTrinhDaoTao: QuaTrinhDaoTao;
    noiLamViec: NoiLamViec;
    namPhongHocHam: number;
    namDatHocVi: number;
    thongKeKhaiBao: ThongKeKhaiBao[];
  }

  export interface NoiLamViec {
    tenToChuc: string;
    tenNguoiLanhDao: string;
    dienThoaiNguoiLanhDao: string;
    diaChi: string;
  }

  export interface QuaTrinhCongTac {
    index: number;
    _id: string;
    maDinhDanh: string;
    tuNam: number;
    denNam: number;
    viTriCongTac: string;
    toChucCongTac: string;
    diaChiToChuc: string;
  }

  export interface DienBienLuong {
    index: number;
    _id: string;
    thang: number;
    nam: number;
    maNgach: string;
    heSoLuong: number;
  }

  export interface QuaTrinhDaoTaoChiTiet {
    noiDaoTao: string;
    chuyenMon: string;
    namTotNghiep: string;
    bacDaoTao: string;
    name: string;
  }

  export interface QuaTrinhDaoTao {
    maDinhDanh?: string;
    daiHoc: QuaTrinhDaoTaoChiTiet;
    thacSi: QuaTrinhDaoTaoChiTiet;
    tienSi: QuaTrinhDaoTaoChiTiet;
    thucTapSinhKh: QuaTrinhDaoTaoChiTiet;
  }
}
