declare module BienSoanSach {
  export interface Record {
    maDinhDanh?: string;
    giaiDoanVietSach?: string;
    tenSach?: string;
    loaiSach?: DanhMucQuanLyKhoaHoc.Record;
    tenNhaXuatBan?: string;
    namXuatBan?: number;
    nhaXuatBanUyTin?: string;
    soLuongTacGia?: number;
    tenCacTacGia?: string;
    vaiTro?: string;
    chiSoISBN?: string;
    phanBienSoan?: string;
    soVanBanXacNhanSuDungSach?: string;
    urlSach?: string;
    laCongTrinhTieuBieu?: boolean;
    listURLMinhChung?: string[];
    _id: string;
    namKhaiBao: number;
  }
}
