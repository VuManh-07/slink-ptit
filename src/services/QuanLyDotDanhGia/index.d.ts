declare module QuanLyDotDanhGia {
  export interface Record {
    _id: string;
    idKyHoc: number;
    maKyHoc: string;
    idHinhThuc: number;
    tieuDe: string;
    noiDung: string;
    thoiGianBatDau: string;
    thoiGianKetThuc: string;
    active: boolean;
    idBieuMau: any;
    thoiGian?: any;
    danhSachCauTraLoi: any[];
  }
}
