import type { LopTinChi } from '../LopTinChi/typings';

declare module ThacMacDiem {
  export interface Record {
    userCode: string;
    daDuyet: boolean;
    _id: string;
    userId: string;
    hoTenNguoiThacMac: string;
    vaiTro: string;
    kyHocId: number;
    hocPhanId: number;
    ketQuaHocTap: LopTinChi.KetQuaHocTap;
    noiDung: string;
    urlDinhKem: string[];
    createdAt: string;
    updatedAt: string;
    maHocPhan: string;
    tenHocPhan: string;
    maKyHoc: string;
    noiDungDuyet: string;
    idNguoiDuyet: string;
    hoTenNguoiDuyet: string;
  }
}
