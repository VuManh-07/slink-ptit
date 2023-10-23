import type { DeTaiKHCN } from '../DeTai/typings';
import type { DotDangKy } from '../DotDangKy/typings';

declare module QuyetDinhGiao {
  export interface Record {
    _id: string;
    dotDangKyId: string;
    deTaiIds: string[];
    idDonVi: number;
    maDonVi: string;
    tenDonVi: string;
    urlQuyetDinhGiao: string;
    daGiao: boolean;
    dotDangKy: DotDangKy.Record;
    danhSachDeTai: DeTaiKHCN.Record[];
  }
}
