declare module IThuVien {
  export interface Record {
    _id: string;
    buoi: string;
    maSv: string;
    nam: number;
    ngay: number;
    thang: number;
    __v: number;
    chiTietCheckIn: {
      _id: string;
      thoiGianCheckIn: string;
      trangThaiCheckIn: true;
      trangThaiCheckOut: true;
      thoiGianCheckOut: string;
    }[];
    soLanCheckIn: number;
    thongTinSinhVien: {
      _id: string;
      gioiTinh: string;
      hoTen: string;
      khoa: string;
      nganh: string;
    };
  }
  export interface RecordDot {
    trangThai: true;
    _id: string;
    maLuuChieu: string;
    tenDot: string;
    loai: string;
    phamVi: string;
    ghiChu: string;
    thoiGianBatDau: string;
    thoiGianKetThuc: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  export interface RecordLuanAn {
    _id: string;
    idDot: {
      trangThai: boolean;
      _id: string;
      maLuuChieu: string;
      tenDot: string;
      loai: string;
      phamVi: string;
      thoiGianBatDau: string;
      thoiGianKetThuc: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
    };
    maDinhDanh: string;
    hoTenTacGia: string;
    ngaySinh: string;
    soDienThoai: string;
    ten: string;
    urlTaiLieu: string;
    urlTomTat: string;
    thoiGianNop: string;
    chucDanh: string;
    hocVi: string;
    chuyenNganh: string;
    maChuyenNganh: string;
    loai: string;
    trangThai: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    soLuuChieu: string;
  }
  export interface RecordLuanVan {
    _id: string;
    idDot: {
      trangThai: boolean;
      _id: string;
      maLuuChieu: string;
      tenDot: string;
      loai: string;
      phamVi: string;
      thoiGianBatDau: string;
      thoiGianKetThuc: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
    };
    maDinhDanh: string;
    hoTenTacGia: string;
    ngaySinh: string;
    soDienThoai: string;
    ten: string;
    urlTaiLieu: string;
    urlTomTat: string;
    thoiGianNop: string;
    chucDanh: string;
    hocVi: string;
    chuyenNganh: string;
    maChuyenNganh: string;
    loai: string;
    trangThai: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    soLuuChieu: string;
  }
  export interface IDataReq {
    moTa: 'string';
    khuyenMai: 0;
    diemLonHon: 0;
    ghiChu: 'string';
    urlAnh: 'string';
  }
}
