declare module BaiBaoKhoaHoc {
  export interface Record {
    tenNganhDuocTinhDiem: boolean;
    namChapNhanDang: number;
    giayChapNhanDang: boolean;
    xepLoaiTapChi: string;
    chiSoISBN: string;
    chiSoISSN: string;
    isBaoCaoTaiHNHT: boolean;
    isTinhDiemTheoQuyDinhHDCDGSNN: boolean;
    isPhanBien: boolean;
    phanLoai: string;
    diaDiemDienRa: string;
    thoiGianDienRa: string;
    tenHoiNghi: string;
    loaiHoiNghi: string;
    namXb: number;
    nxbDvChuQuan: string;
    nguoiChuTri: string;
    tuongUngDeTaiNCKH: string;
    loaiBaiBao: 'Tạp chí' | 'Hội nghị';
    donViCongTac: string;
    tenTacGia: string;
    _id: string;
    tenBaiBao: string;
    soTacGia: 0;
    laTacGiaChinh: boolean;
    tenTapChi: string;
    tapChiQuocTe: string;
    tapChiThuocLoai: DanhMucQuanLyKhoaHoc.Record;
    chiSoIF: number;
    tap: string;
    so: string;
    trang: string;
    thoiGianCongBo: string;
    linkBaiBao: string;
    laCongTrinhTieuBieu: boolean;
    listURLMinhChung: string[];
    namKhaiBao: number;
    capQuanLy?: string;
    chiSoTrichDanBaiBao?: number;
  }
}
