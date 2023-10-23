declare module IBanner {
  export interface Record {
    khoaList: [];
    donViList: [];
    nganhList: [];
    lopHanhChinhList: [];
    lopTinChiList: [];
    roles: string[];
    userCodeList: string[];
    loaiDoiTuong: string[];
    active: false;
    listUrlAnhBanner: string[];
    _id: string;
    tenBanner: string;
    moTa: string;
    chiTiet: any;
    thoiGianBatDau: string;
    thoiGianKetThuc: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  export interface DataReq {
    tenBanner: string;
    listUrlAnhBanner: string[];
    active: true;
    loaiDoiTuong: string[];
    userCodeList: string[];
    roles: string[];
    lopTinChiList: [0];
    lopHanhChinhList: [0];
    nganhList: [0];
    donViList: [0];
    khoaList: [0];
  }
}
