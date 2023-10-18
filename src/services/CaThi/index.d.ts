declare module IDeThi {
  export interface Record {
    trangThai: string;
    _id: string;
    caThiId: string;
    ma_dinh_danh: string;
    maMonHoc: string;
    hoTen: string;
    noiDungDe: {
      isRequired: boolean;
      _id: string;
      loai: number;
      cauHoi: string;
      cauDacBiet: boolean;
      cauTraLoi:
        {
          luaChon: string;
          isCorrect: boolean;
          isKhac: boolean;
          isTraLoi: boolean;
        }[],
      tepDinhKem: [];
    }[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    id: string;
  }
}
