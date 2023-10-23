declare module DonVi {
  export interface Record {
    don_vi_cap_tren_id: [number, string];
    id: number;
    ten_don_vi: string;
    ma_don_vi: string;
    ma_don_vi_cap_tren: boolean | string;
    is_root: boolean;
    loai_don_vi: string;
    cap_don_vi: string;
    display_name: string;
    key: string;
    children?: Record[];
  }
}
