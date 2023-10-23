declare module DangKyTinChi {
  export interface DotDangKyNhuCau {
    id: number;
    ten_dot_dang_ky_nhu_cau: string;
    ky_hoc_id: (string | number)[];
    ngay_bat_dau_nhu_cau: string;
    ngay_ket_thuc_nhu_cau: string;
    trang_thai: string;
    ap_dung_thanh_toan_truc_tuyen: boolean;
    so_tin_chi_toi_da: number;
    so_tin_chi_toi_thieu: number;
  }

  export interface DotDangKyTinChiOdoo {
    id: number;
    ten_dot_dang_ky_tin_chi: string;
    so_thu_tu_dot: number;
    ky_hoc_id: [number, string];
    dot_dang_ky_hoc_phan_id: [number, string];
    khoi_lop_id: number[];
    ma_ky_hoc: string;
    ngay_bat_dau_tin_chi: string;
    ngay_ket_thuc_tin_chi: string;
    lop_tin_chi_ids: number[];
    hinh_thuc_dao_tao_id: [number, string];
    so_tin_chi_toi_thieu: number;
    so_tin_chi_toi_da: number;
    phieu_dang_ky_tin_chi: [number, string];
    ap_dung_thanh_toan_truc_tuyen: boolean;
    state: boolean;
    status: string;
    display_name: string;
  }

  export interface DotDangKyTinChi {
    id: number;
    ten_dot_dang_ky_tin_chi: string;
    khoi_lop_ids: number[];
    ky_hoc_id: [number, string];
    ngay_bat_dau_tin_chi: string;
    ngay_ket_thuc_tin_chi: string;
    so_phan_tram_cho_phep_trung_lich_hoc: number;
    so_tin_chi_toi_da: number;
    so_tin_chi_toi_thieu: number;
  }

  export interface DotDangKyTinChiNew {
    dotDangKyId: number;
    maDotDangKy: string;
    dotDangKyHocPhanId: number;
    tenDotDangKyHocPhan: string;
    thoiGianBatDau: string;
    thoiGianKetThuc: string;
  }

  export interface LopDaDangKy {
    idLop: number;
    maLop: string;
    stt: number;
    dotDangKyTinChi: DotDangKyTinChiNew;
    sinhVienIds: number[];
    lichHoc: LichHoc[];
    nhomLopTinChi: NhomLopTinChi[];
    giangVienId: number;
    tenGiangVien: string;
    maGiangVien: string;
    hocPhanId: number;
    maHocPhan: string;
    tenHocPhan: string;
    soTinChi: number;
  }

  export interface LopTinChi {
    hocPhi: number;
    dotDangKyTinChi: DotDangKyTinChiNew;
    giangVienId: number;
    hocPhanId: number;
    idLop: number;
    lichHoc: LichHoc[];
    maGiangVien: string;
    maHocPhan: string;
    maLop: string;
    nhomLopTinChi: NhomLopTinChi[];
    sinhVienIds: number[];
    soTinChi: number;
    stt: number;
    tenGiangVien: string;
    tenHocPhan: string;
    _id: string;
    siSoToiDa: number;
    siSoToiDaNhom: number;
    sinhVienIdsLop: number[];
    idNhom: number;
    maNhom: string;
    stt: number;
    sttNhom: number;
    isNhom: boolean;
  }

  export interface NhomLopTinChi {
    idNhomLop: number;
    maNhomLop: string;
    stt: number;
    sinhVienIds: number[];
    lichHoc: LichHoc[];
    siSoToiDa: number;
  }

  export interface MonHoc {
    idHocPhan: number;
    maMonHoc: string | boolean;
    soThuTuKyHoc: number;
    soTinChi: number;
    tenMonHoc: string;
    index?: number;
    hocPhi: number;
    trangThaiDangKy: string;
  }

  export interface HocPhanDangKyTinChi {
    id: number;
    ma_hoc_phan_moi: string;
    so_tin_chi: number;
    ten_hoc_phan: string;
  }

  export interface LichHoc {
    thu: string;
    tuan: string;
    buoiHocId: number;
    ngayHoc: string;
    ngayGioBatDau: string;
    ngayGioKetThuc: string;
    tietBatDau: number;
    tietKetThuc: number;
    phongHoc: string;
    giangVienId: number;
    tenGiangVien: string;
    maGiangVien: string;
  }

  export interface NguyenVong {
    ghiChu: boolean | string;
    idHocPhan: number;
    maMonHoc: boolean | string;
    tenMonHoc: string;
    hocPhi: number;
    soTinChi: number;
  }

  export interface PhieuDangKy {
    phieuDangKy: {
      id: number;
      dot_dang_ky_id: (string | number)[];
      ky_hoc_id: (string | number)[];
      sinh_vien_id: (string | number)[];
      nv_hoc_phan_id: number[];
      tong_so_tin_chi: number;
      tong_hoc_phi: number;
      ho_va_ten: number;
      ma_sinh_vien: number;
      ten_lop_hanh_chinh: string | boolean;
      so_dien_thoai: string | boolean;
      can_bo_id: string | boolean;
      display_name: string;
      create_uid: (string | number)[];
      create_date: string;
      write_uid: (string | number)[];
      write_date: string;
      don_vi_thu_huong: [number, string];
      don_vi_thu_huong_chi_nhanh: string;
      don_vi_thu_huong_stk: string;
      don_vi_thu_huong_ten_ngan_hang: string;
      hoc_phi_ap_dung: boolean;
      huong_dan_thanh_toan: boolean;
      ma_thanh_toan: string;
      ngay_nop_tien: string;
      trang_thai_phe_duyet: boolean;
      trang_thai_thanh_toan: boolean;
    };
    danhSachNguyenVong: NguyenVong[];
  }

  export interface PhieuDangKyTinChi {
    ten_phieu_dktc: string;
    dot_dang_ky_nhu_cau_id: number;
    dot_dang_ky_tin_chi_id: number;
    ap_dung_thanh_toan_truc_tuyen: true;
    sinh_vien_id: number;
    sv_hp_dktc_id: number[];
    tong_so_tin_chi: number;
    tong_hoc_phi: number;
    so_tien_da_nhan: number;
    ma_thanh_toan: number;
    trang_thai_sinh_ma_thanh_toan: boolean;
    trang_thai_thanh_toan: boolean;
    ma_hoa_ma_thanh_toan: string;
  }

  export interface ThongTinKyHoc {
    hocPhi: number;
    tinChiDangKyToiThieu: number;
    tinChiDangKyToiDa: number;
  }

  export interface DanhSachHocPhan {
    hocCaiThien: MonHoc[];
    hocLai: MonHoc[];
    hocVuot: MonHoc[];
    kyHienTai: MonHoc[];
    kyTruoc: MonHoc[];
    mien: MonHoc[];
  }
}
