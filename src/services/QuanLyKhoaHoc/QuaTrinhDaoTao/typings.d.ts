declare module QuaTrinhDaoTao {
  export interface ChiTietQuaTrinh {
    _id: string;
    noiDaoTao: string;
    chuyenMon: string;
    namTotNghiep: string;
    bacDaoTao: string;
    name: string;
  }
  export interface Record {
    _id: string;
    maDinhDanh: string;
    daiHoc: ChiTietQuaTrinh;
    thacSi: ChiTietQuaTrinh;
    thucTapSinhKh: ChiTietQuaTrinh;
    tienSi: ChiTietQuaTrinh;
  }
}
