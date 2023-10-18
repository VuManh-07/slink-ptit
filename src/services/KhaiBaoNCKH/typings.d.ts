import type {
  ECapGiaiThuong,
  ECapGiaiThuongTacPhamThanhTich,
  ECapGiaiThuongThiDau,
  ECapHTKH,
  ECapNghiemThu,
  ECapQuanLy,
  EChuongTrinhHocTap,
  EDoiTuongHuongDanNCS,
  EGiaiDoanKhaiBao,
  EHocHam,
  EHocVi,
  EKetQuaDuyet,
  ELoaiBaiBao,
  ELoaiBaiVietHoiThao,
  ELoaiChuongSach,
  ELoaiCongTrinhKhoaHoc,
  ELoaiGiaiThuong,
  ELoaiHinhDeTaiNhiemVu,
  ELoaiHinhNCKHSV,
  ELoaiSach,
  ELoaiSanPhamDatDuoc,
  ELoaiTacPhamThanhTich,
  ELoaiTapChi,
  ELoaiThanhTich,
  ELoaiTuDien,
  EPhamVi,
  EPhanLoaiLanhTho,
  ETinhTrangCongBo,
  ETrachNhiemHuongDan,
  ETrangThaiHuongDanNCS,
  EVaiTroFTU,
  EVaiTroKHCN,
  EXepLoaiTapChi,
} from '@/utils/constants';
import type { DotKhaiBaoKHCN } from '../DotKhaiBaoKHCN/typings';
import type { LyLichKhoaHoc } from '../LyLichKhoaHoc/typings';

declare module KhaiBaoNCKH {
  export interface KinhPhi {
    giaTien: number;
    menhGia: string;
    giaTienNguonNN: number;
    giaTienNguonNhaTruong: number;
    giaTienNguonToChucDnNgoai: number;
    giaTienNguonCaNhanNgoai: number;
    giaTienNguonKhac: number;
  }

  export interface QuyetDinhNghiemThu {
    thongTinNguoiKhaiBao: string;
    capNghiemThu: ECapNghiemThu;
  }

  export interface NghiemThu {
    index: number;
    thoiGian: string;
    capNghiemThu: ECapNghiemThu;
    ketQuaNghiemThu: EKetQuaNghiemThu;
    isDungHan: boolean;
  }

  export interface ThongTinXuatBan {
    tenTapChi: string;
    loaiTapChi: ELoaiTapChi;
    tap: string;
    so: string;
    trang: string;
    thoiGianCongBoHoacDienRa: string;
    url: string;
    tenHoiNghi: string;
    isHoiNghiTapChiUyTin: boolean;
    diaDiemDienRa: string;
    tenNhaXb: string;
    isTuXuatBan: boolean;
    isNxbUyTin: boolean;
    ngayXb: number;
    thangXb: number;
    namXb: number;
    isNxbQuocTe: boolean;
  }

  export interface MinhChung {
    index: number;
    tenMinhChung: string;
    url: string[];
  }

  export interface SanPhamDatDuoc {
    index: number;
    loaiSanPhamDatDuoc: ELoaiSanPhamDatDuoc;
    soLuong: number;
    tinhTrangCongBo: ETinhTrangCongBo;
    minhChungUrl: string[];
  }

  export interface VaiTroNguoiKhaiBao {
    nguoiKhaiBao: LyLichKhoaHoc.Record;
    vaiTroKhcn: EVaiTroKHCN;
  }

  export interface DonViPhoiHop {
    index?: number;
    tenDonVi: string;
    diaChi: string;
    soDienThoai: string;
    email: string;
    kinhPhi: KinhPhi;
    nguonLucPhoiHopKhac: string;
  }

  export interface ThanhVien {
    index?: number;
    nguoiKhaiBao: LyLichKhoaHoc.Record;
    vaiTroKhcn: EVaiTroKHCN;
    hocHam: EHocHam;
    hocVi: EHocVi;
    donViCongTac: string;
    maDonVi: string;
    soLuongChuong: number;
    danhSachChuong?: string[];
    xacNhanChuBienThamGiaViet: string[];
    lop: string;
    khoaVien: string;
    soDienThoai: string;
    email: string;
    diaChiCongTac: string;
    chuongTrinhHocTap: EChuongTrinhHocTap | string;
    chuyenNganh: string;
    hoTen: string;
    maDinhDanh: string;
  }

  export interface TrangThaiNghiemThu {
    index?: number;
    danhSachNghiemThu: NghiemThu[];
    isNghiemThu: boolean;
  }

  export interface ChuongSach {
    index?: number;
    tenChuong: string;
    loaiChuongSach: ELoaiChuongSach;
    danhSachDongTacGia: LyLichKhoaHoc.Record[];
    isXuatBanQuocTe: boolean;
  }

  export interface MucTu {
    idTacGia: LyLichKhoaHoc.Record;
    mucTu: number;
  }

  export interface GiaiThuong {
    index?: number;
    tenGiaiThuong: string;
    capGiaiThuong: ECapGiaiThuong;
    loaiGiaiThuong: ELoaiGiaiThuong;
    url: string[];
  }

  export interface QuanLyKhoaHoc {
    //all
    _id: string;
    tenSanPhamNCKH: string;
    danhMucNCKH: ELoaiCongTrinhKhoaHoc;
    idNguoiTao: string;
    vaiTroNguoiTao: string;
    soLuongThanhVien: number; //de tai, sach
    giaiDoan: EGiaiDoanKhaiBao;
    thoiGianXuatBan: string;
    // thongTinXuatBan: ThongTinXuatBan; //sach, bai bao
    isbn: string; // sach, bai bao
    soLuuChieu: string;
    giaiThuong: GiaiThuong[]; // de tai, nckhsv;
    //de tai
    capQuanLy: ECapQuanLy;
    loaiHinhDeTai: ELoaiHinhDeTaiNhiemVu;
    loaiHinh: ELoaiHinhDeTaiNhiemVu;
    kinhPhi: KinhPhi;
    soQuyetDinhThanhLapHoiDongNghiemThu: QuyetDinhNghiemThu;
    quyetDinhNghiemThuCapBo: QuyetDinhNghiemThu;
    trangThaiNghiemThu: TrangThaiNghiemThu;
    thoiGianThucHienBatDau: string;
    thoiGianThucHienKetThuc: string;
    thoiGianGiaHan1BatDau?: string;
    thoiGianGiaHan1KetThuc?: string;
    thoiGianGiaHan2BatDau?: string;
    thoiGianGiaHan2KetThuc?: string;
    danhSachDonViPhoiHop: DonViPhoiHop[];
    khenThuong: KinhPhi;
    coQuanChuTriNhiemVu: string;
    danhSachThanhVien: ThanhVien[];
    danhSachNguoiHoc: ThanhVien[];
    maSo: string;
    sanPhamDatDuoc: SanPhamDatDuoc[];
    maSoChungNhanKetQua: string;
    thoiGianChungNhanKetQua: string;
    minhChungChungNhanKetQuaUrl: string[];

    //bang sang che
    tenCoQuanCap: string;
    ngayCap: string;
    //giao trinh-sach
    loaiSach: ELoaiSach;
    ngonNgu: string;
    isNhaTruongDatHang: boolean;
    phanBienSoan: string;
    soVanBanXacNhanSuDungSach: string;
    chuongSach: ChuongSach[];
    mucTu: MucTu[];
    loaiTuDien: ELoaiTuDien;
    //bai bao
    xepLoaiTapChi: EXepLoaiTapChi;
    loaiBaiBao: ELoaiBaiBao;
    phanLoaiLanhTho: EPhanLoaiLanhTho;
    isPhanBien: boolean;
    tenNganhDuocTinhDiem: string;
    diemTheoDanhMucTCHDGSNN: number;
    giayChapNhanDang: boolean;
    namChapNhanDang: string;
    isTinhDiemTheoQuyDinhHDCDGSNN: boolean;
    giayChapNhanDang: boolean;
    chiSoIF: number;
    diemTheoDanhMucTCHDGSNN: number;
    issn: string;
    tuongUngDeTaiNCKH: string; // KhaiBaoNCKH.QuanLyKhoaHoc;
    phamVi: EPhamVi;
    chiSoTrichDan: string;

    //hoi nghi hoi thao
    isBaoCaoTaiHNHT: boolean;
    isDangKyYeuHTKH: boolean;
    isBaiDich: boolean;
    isThamLuanTDKH: boolean;
    capHTKH: ECapHTKH;
    loaiBaiVietHoiThao: ELoaiBaiVietHoiThao;

    //nckhsv
    loaiHinhNCKHSV: ELoaiHinhNCKHSV;
    tenTapChi: string;
    loaiTapChi: ELoaiTapChi;
    tap: string;
    so: string;
    trang: string;
    thoiGianCongBoHoacDienRa: string;
    url: string;
    tenHoiNghi: string;
    isHoiNghiTapChiUyTin: boolean;
    diaDiemDienRa: string;
    tenNhaXb: string;
    isTuXuatBan: boolean;
    isNxbUyTin: boolean;
    isNxbQuocTe: boolean;
    soXb: string;
    tenHoiThao: string;
    capHoiThao: ECapHTKH;
    donViToChuc: string;
    thoiGianToChuc: string;
    diaDiemToChuc: string;
    tenKyYeuHoiThao: string;
    isBaiTrinhBay: boolean;
    tenToaDam: string;
    tenCuocThi: string;
    isThamDuGiaiThuongCapDonVi: boolean;

    //tacphamthanhtich
    loai: ELoaiTacPhamThanhTich;
    namNhan: number;
    noiDungThanhTich: string;
    thoiGianHuanLuyenTuNgay: string;
    thoiGianHuanLuyenDenNgay: string;
    giaiThuongThiDauDatDuoc: string;
    capGiaiThuongThiDau: ECapGiaiThuongThiDau;
    coQuanToChucCongNhan: string;
    vanBanCongNhan: string;
    capGiaiThuong: ECapGiaiThuongTacPhamThanhTich;
    loaiThanhTich: ELoaiThanhTich;
    tenGiaiThuongTPTT: string;
    capGiaiThuongTPTT: ECapGiaiThuongTacPhamThanhTich;
    loaiHinhTacPham: string;
    datGiai: string;
    tenGiaiDau: string;

    // huong dan ncs
    trangThai: ETrangThaiHuongDanNCS;
    hoTenHocVien: string;
    doiTuong: EDoiTuongHuongDanNCS;
    trachNghiemHD: ETrachNhiemHuongDan;
    thoiGianHuongDanBatDau: string;
    thoiGianHuongDanKetThuc: string;
    coSoDaoTao: string;
    vaiTroKhcn: EVaiTroKHCN;
  }

  export interface DienGiaiGioNghienCuu {
    index: number;
    soGio: number;
    congThucTinh: string;
  }

  export interface RecordTinhGioNCKH {
    congTrinhId: string;
    dotKhaiBaoId: string;
    gioNCKH: DienGiaiGioNghienCuu[];
    hoVaTen: string;
    khaiBaoId: string;
    loaiCongTrinh: ELoaiCongTrinhKhoaHoc;
    lyLichId: string;
    maDinhDanh: string;
    tenCongTrinh: string;
    tongGio: DienGiaiGioNghienCuu;
  }

  export interface CongTrinhTrungTen {
    id: string;
    tenSanPhamNCKH: string;
    danhMucNCKH: ELoaiCongTrinhKhoaHoc;
    maCongTrinh: string;
    danhSachThanhVien: {
      hoVaTen: string;
      id: string;
      maDinhDanh: string;
      vaiTro: EVaiTroKHCN[];
    }[];
  }

  export interface Record {
    dienGiai: never[];
    _id: string;
    ketQuaDuyet: EKetQuaDuyet;
    ghiChuDuyet: string;
    nguoiKhaiBao: LyLichKhoaHoc.Record;
    namKhaiBao: number;
    vaiTroNguoiKhaiBao: VaiTroNguoiKhaiBao;
    danhMucNCKH: ELoaiCongTrinhKhoaHoc;
    minhChung: MinhChung[];
    danhSachSanPhamKhac: MinhChung[];
    giangVienHuongDanCung: MinhChung[];
    khaiBaoNCKH: QuanLyKhoaHoc;
    dotKhaiBao: DotKhaiBaoKHCN.Record;
    soGioNCKH: number;
    ghiChuSoGio: string;
    tinhGioNCKH: RecordTinhGioNCKH[];
    createdAt: string;
  }

  export interface PayloadKhaiBaoNCKH {
    _id: string;
    namKhaiBao: number;
    danhMucNCKH: ELoaiCongTrinhKhoaHoc;
    vaiTroKhcn: EVaiTroKHCN;
    minhChung: MinhChung[];
    danhSachSanPhamKhac: MinhChung[];
    khaiBaoNCKH: string;
  }

  export interface GioNghienCuuKhaiBao {
    tongGio: DienGiaiGioNghienCuu;
    gioNCKH: DienGiaiGioNghienCuu[];
    khaiBaoId: string;
    index: number;
  }

  export interface GioQuyDoiCongTrinh {
    index: number;
    congTrinhId: string;
    tenCongTrinh: string;
    loaiCongTrinh: string;
    danhSachGioQuyDoi: {
      tongGio: DienGiaiGioNghienCuu;
      gioNCKH: DienGiaiGioNghienCuu;
    };
    congTrinh: QuanLyKhoaHoc;
    maDinhDanhNguoiKhaiBao: string;
    tenNguoiKhaiBao: string;
  }
  export interface GioNghienCuuKhoaHoc {
    _id: string;
    lyLichId: string;
    dotKhaiBaoId: string;
    gioQuyDoiCongTrinh: GioQuyDoiCongTrinh[];
    maDinhDanh: string;
    ten: string;
    daDuyet: boolean;
    lyLich: LyLichKhoaHoc.Record;
    dotKhaiBao: DotKhaiBaoKHCN.Record;
    daXacNhan: boolean;
    daDuyet: boolean;
  }
}
