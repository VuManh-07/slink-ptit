declare module DanTocTonGiaoOdoo {
  export interface DanToc {
    id: number;
    ma_dan_toc: string;
    ten_dan_toc: string;
    ten_khac: string;
  }

  export interface TonGiao {
    id: number;
    ma_ton_giao: string;
    ten_ton_giao: string;
    ten_to_chuc_ton_giao_chinh: string;
  }
}
