declare module NCKHCuaSV {
  export interface Record {
    isGiangVienHuongDan: boolean;
    soLuongCongTacVien: number;
    trangThai: string;
    ketQuaNghiemThu: string;
    _id: string;
    giaiDoan: string;
    tenNhiemVuKHCN: string;
    maSo: string;
    capQuanLy: DanhMucQuanLyKhoaHoc.Record;
    capBaoCao: string;
    vaiTro: string;
    thoiGianThucHienBatDau: string;
    thoiGianThucHienKetThuc: string;
    thoiGianNghiemThu: string;
    listURLMinhChung: string[];
    IsNghienCuuMuiNhon: boolean;
    namKhaiBao: number;
    loaiHinh: string;
    hocHam: string;
    hocVi: string;
    ten: string;
    lop: string;
    donViPhoiHop: string[];
    coQuanChuTri: string;
    loaiKinhPhi: string[];
    khenThuongSauNghiemThu: number;
    thoiGianThucHienGiaHan: Date;
    thoiGianNghiemThuCapSoBo: Date;
    ketQuaNghiemThuCapSoBo: string[];
    thoiGianNghiemThuCapCoSo: Date;
    ketQuaNghiemThuCapCoSo: string[];
    thoiGianNghiemThuChinhThuc: Date;
    ketQuaNghiemThuChinhThuc: string[];
    sanPhamDatDuoc: string[];
  }
}
