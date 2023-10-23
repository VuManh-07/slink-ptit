declare module IRanking {
  export interface Record {
    diemLonHon: number;
    khuyenMai: number;
    _id: string;
    hangThe: string;
    moTa: any;
    ghiChu: string;
    createdAt: string;
    updatedAt: string;
    urlAnh: string;
    __v: number;
    urlAnhMatSau: string;
  }
  export interface IDataReq {
    moTa: 'string';
    khuyenMai: 0;
    diemLonHon: 0;
    ghiChu: 'string';
    urlAnh: 'string';
  }
}
