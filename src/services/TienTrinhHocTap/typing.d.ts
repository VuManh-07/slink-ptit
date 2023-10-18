import type { LopTinChi } from '../LopTinChi/typings';

export declare module TienTrinhHocTap {
  export interface ITienTrinhKhung {
    hoc_ky: string; //'1';
    id: number; //50;
    so_tin_chi_tu_chon_phai_hoc: number; //0;
    tongSoTinCanHoc: number; //9;
    tongSoTinDaDat: number; //9;
    data: IChuongTrinhKhung[];
  }

  export interface IChuongTrinhKhung {
    id: number;
    hoc_phan_id: [number, string]; // [3043, 'BAS1150'];
    ten_hoc_phan: string; // 'Triết học Mác - Lênin';
    hoc_ky: string; // '1';
    loai_hoc_phan: 'bat_buoc' | 'tu_chon'; // 'bat_buoc';
    so_tin_chi: number; //3;
    hoc?: 'CHUA_HOC'; // 'CHUA_HOC';
    hocPhan?: IHocPhan;
  }

  export interface IHocPhan {
    id: number; // 2586;
    ten_hoc_phan: string;
    loai_hoc_phan?: 'bat_buoc' | 'tu_chon'; // false;
    ma_hoc_phan_moi: string; // 'BAS1227';
    so_tin_chi: number;
    hoc: 'DA_HOC' | 'DANG_HOC' | 'DANG_HOC_LAI'; // 'DA_HOC';
    lichSuDiem?: (LopTinChi.DiemThanhPhan & {
      ky_hoc: string; //'20201'
    })[];
  }

  export interface ITienTrinhThucTe {
    hocKy: string; // '20191';
    hocPhan?: IHocPhan[];
    diemTichLuyKy?: {
      id: number; //502150;
      ky_nam_hoc_id: [number, string];
      ctk_nganh_id: [number, string]; // [113, 'CTK - 2020 - Công nghệ thông tin 1'];
      ky_ctk?: number; // 1;
      tong_so_tin_chi_da_dang_ky: number; // 20;
      tong_so_tin_chi_trong_hoc_ky: number; // 20;
      tong_so_tin_chi_tich_luy_sau_hoc_ky: number; // 11;
      so_tin_chi_truot_trong_hoc_ky: number; // 0;
      tong_so_tin_chi_truot: number; // 0;
      diem_tb_tich_luy_hoc_ky_thang_4: number; // 2.14;
      diem_tb_chung_hoc_ky_thang_4: number; // 2.14;
      xep_loai_hoc_luc_hoc_ky?: string; // false;
    };
  }
}
