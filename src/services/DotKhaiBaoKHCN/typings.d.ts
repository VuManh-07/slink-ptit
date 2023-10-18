import type { ELoaiDotKhaiBaoKHCN } from '@/utils/constants';

declare module DotKhaiBaoKHCN {
  export interface ThoiGian {
    type: ELoaiDotKhaiBaoKHCN;
    startDate: string;
    endDate: string;
    date: string;
    startYear: number;
    endYear: number;
    year: number;
  }

  export interface Record {
    _id: string;
    tenDotKhaiBao: string;
    thoiGian: ThoiGian;
    chot: boolean;
  }
}
