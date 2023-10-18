export declare module ThongKeDanhGia {
  export interface ThongKe {
    cauTraLoi?: string;
    soLuong?: number;
    phanTram?: any;
  }

  export interface DanhSachCauTraLoi {
    noiDung?: string;
    loai?: string;
    thongKe?: ThongKe[];
  }

  export interface Result {
    tenGiangVien?: string;
    maGiangVien?: string;
    tenHocPhan?: string;
    maHocPhan?: string;
    danhSachCauTraLoi: DanhSachCauTraLoi[];
  }

  export interface Data {
    page: number;
    offset: number;
    limit: number;
    total: number;
    result: Result[];
  }

  export interface RootObject {
    data: Data;
    statusCode: number;
  }
}
