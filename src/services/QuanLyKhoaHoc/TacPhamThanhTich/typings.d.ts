declare module TacPhamThanhTich {
  export interface Record {
    loai: string;
    loaiThanhTich: string;
    tenTacPham: string;
    tacGia: string;
    giaiThuong: string;
    namCap: number;
    namNhan: number;
    noiDungThanhTich: string;
    thoiGianHuanLuyenTuNgay: string;
    thoiGianHuanLuyenDenNgay: string;
    giaiThuongThiDauDatDuoc: string;
    capGiaiThuongThiDau: string;
    _id: string;
    madinhDanh: string;
    giaiDoan: string;
    coQuanToChucCongNhan: string;
    vanBanCongNhan: string;
    capGiaiThuong: string;
    soTacGia: string;
    listURLMinhChung: string[];
    namKhaiBao: number;
    loaiHinhTacPham?: string;
    datGiai?: string;
    capGiaiDau?: string;
    tenGiaiDau?: string;
  }
}
