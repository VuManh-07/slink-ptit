declare module DoiSoatThanhToan {
  interface IRecord {
    code: string;
    numInit: number;
    soLuongDaNop: number;
    soLuongPhaiNop: number;
    typeThongKe: LoaiThongKe;
    _id: string;
  }

  interface IRecordGiaoDich {
    _id: string;
    gioGiaoDich: string;
    loaiTien: string;
    maHoSo: string;
    ngayGiaoDich: string;
    noCo: string;
    noiDungGiaoDich: string;
    soTaiKhoan: string;
    soTien: number;
    tenfile: string;
  }

  interface IRecordSaoKe {
    _id: string;
    maCN: string;
    maGDV: string;
    maGiaoDich: string;
    maHoSo: string;
    ngayGiaoDich: string;
    dienGiai: string;
    phatSinhCo: number;
    phatSinhNo: number;
    soChungTu: number;
    soDu: number;
    daLogBIDV: boolean;
    daCoTrenCong: boolean;
  }

  interface IRecordDuLieuNen {
    nguyenVongList: string[];
    soTienDaDong: number;
    soLuongNguyenVongHopLe: number;
    _id: string;
    maHoSo: string;
    hoTen: string;
    soCCCD: string;
    maTinhThuongTru: string;
    maHuyenThuongTru: string;
    maTinhLop12: string;
    maHuyenLop12: string;
    maTruongLop12: string;
    tenTruongLop12: string;
    soTienPhaiDong: number;
    daCoTrenCong: boolean;
    daLogBIDV: boolean;
    daSaoKe: boolean;
  }

  type LoaiThongKe = 'THANH_TOAN' | 'TINH' | 'TRUONG_DH' | 'INIT';
}
