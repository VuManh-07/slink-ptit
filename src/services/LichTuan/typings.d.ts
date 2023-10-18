declare module LichTuan {
  export interface User {
    ten: string;
    maDinhDanh: string;
  }

  export interface Record {
    trangThai?: string;
    _id?: string;
    noiDungCongViec?: string;
    daXoa: boolean;
    tuan: number;
    thoiGianBatDau?: string;
    chuaPhatHanh: boolean;
    thoiGianKetThuc?: string;
    diaDiem?: string;
    chuTri: User[];
    thanhPhanThamDu?: User[];
    donViChuanBi?: string;
    donViPhoiHop?: string;
    luuY?: string;
    ghiChu?: string;
    thoiGian?: string;
    info?: {
      nguoiTao: {
        userId: string;
        code: string;
        fullname: string;
        donVi: {
          ten: string;
        };
      };
    };
  }
  export interface RecordPreview {
    lichBiXoa: Record[];
    lichMoiPhatHanh: Record[];
    lichSuaLai: Record[];
  }
}
