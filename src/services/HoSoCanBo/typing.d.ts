declare module NhanSu {
  export interface IRecordPreview {
    id: number;
    ma_dinh_danh: string;
    trang_thai_phe_duyet_nhan_su: string; //"1"
    ho_dem: string;
    ten: string;
    name: string;
    ngay_sinh: string; //"1999-10-13"
    gioi_tinh: string; //"0"
    yeu_cau_cap_nhat_ho_so?: boolean;
    noi_dung_yeu_cau_cap_nhat: string;
  }

  export interface IRecordDraft {
    id: number; //1;
    nhan_su_id: any[]; // [1, 'TDN0000001'];
    trang_thai_draft: TTrangThaiDraft = 'cho_xu_ly';
    trang_thai_khoa: boolean = false;
    thoi_gian_cap_nhat: string; // '2022-09-19 02:14:24';
    ma_dinh_danh: string; // 'TDN0000001';
    // ho_dem: string; // 'Đặng Anh';
    // ten: string; // 'Tuấn';
    name: string; // 'Đặng Anh Tuấn';
    ngay_sinh: string; // '1999-10-13';
    gioi_tinh: string; // '0';
    create_date: string; // '2022-09-19 02:14:24';
    write_date: string; // '2022-09-19 02:14:24';
  }

  type TTrangThaiDraft =
    | 'duyet'
    | 'khong_duyet'
    | 'cho_xu_ly'
    | 'yeu_cau_chinh_sua'
    | 'dang_ap_dung';

  export interface IRecord extends IRecordDraft {
    anh?: string;
    co_quan_don_vi_quan_ly_cbcc: string; // 'Aisoft';
    co_quan_don_vi_su_dung_cbcc: string; // 'Aisoft';
    ten_khac: string; // 'tuancy';
    noi_sinh_xa: string; // 'Ngọc Sơn';
    noi_sinh_huyen: string; // 'Tứ Kỳ';
    noi_sinh_tinh: string; // 'Hải Dương';
    que_quan_xa: string; // 'Ngọc Sơn';
    que_quan_huyen: string; // 'Tứ Kỳ';
    que_quan_tinh: string; // 'Hài Dương';
    dan_toc: any; // [56,'Kinh'];
    ton_giao: any; // [0,'Không'];
    noi_dang_ky_ho_khau_thuong_tru: string; // 'Ngọc Sơn, tp Hải Dương, Hải Dương';
    noi_o_hien_nay: string; // 'Ngọc Sơn, tp Hải Dương, Hải Dương';
    nghe_nghiep: string; // 'culi';
    ngay_tuyen_dung: string; // '2022-01-03';
    co_quan_tuyen_dung: string;
    chuc_vu_hien_tai: string; // 'culi';
    chuc_vu_kiem_nhiem: string;
    cong_viec_chinh_duoc_giao: string; // 'thợ code';
    ngach_cong_chuc: string; // 'culi';
    ngach_cong_chuc_ma_ngach: string; // '113';
    ngach_cong_chuc_bac_luong: string; // '2';
    ngach_cong_chuc_he_so: string; // '2';
    ngach_cong_chuc_ngay_huong: string; // '2022-03-01';
    ngach_cong_chuc_phu_cap_chuc_vu: string; // 'dân quèn';
    ngach_cong_chuc_phu_cap_khac: string; // 'dân đen';
    trinh_do_giao_duc_pho_thong: string; // '12/12';
    trinh_do_chuyen_mon_cao_nhat: string; // 'TSKH';
    trinh_do_ly_luan_chinh_tri: string; // 'cử nhân';
    trinh_do_quan_ly_nha_nuoc: string; // 'chuyên viên cao cấp';
    trinh_do_ngoai_ngu: string; // 'Tiếng Anh';
    trinh_do_tin_hoc: string; // 'Trung cấp';
    ngay_vao_dang: string; // '2022-09-01';
    ngay_chinh_thuc_vao_dang: string; // '2022-09-02';
    ngay_tham_gia_to_chuc_ttxh: string; // 'không';
    ngay_nhap_ngu: string; // '2022-09-03';
    ngay_xuat_ngu: string; // '2022-09-04';
    quan_ham_cao_nhat: string; // 'Binh quèn';
    danh_hieu_duoc_phong_tang_cao_nhat: string;
    so_truong_cong_tac: string; // 'thợ code';
    khen_thuong: string; // 'không';
    ky_luat: string; // 'không';
    tinh_trang_suc_khoe: string; // 'tốt';
    chieu_cao: string; // '170';
    can_nang: string; // '58';
    nhom_mau: string; // 'O';
    la_thuong_binh_hang: string; // 'không';
    la_con_gia_dinh_chinh_sach: string; // 'không';
    cmnd_cccd: string; // '113113113113113';
    ngay_cap_cmnd_cccd: string; // '2022-08-31';
    so_so_bhxh: string; // '113113113113113';
    dac_diem_lich_su_ban_than_1: string; // 'không';
    dac_diem_lich_su_ban_than_2: string; // 'không';
    dac_diem_lich_su_ban_than_3: string; // 'không';
    nhan_xet_cua_co_quan: string; // 'Thợ code ngồi code :3';
    // lich_su_dao_tao: number[]; // [2];
    // lich_su_cong_tac: number[]; //[2];
    // quan_he_gia_dinh_ve_ban_than: number[]; // [2];
    // quan_he_gia_dinh_ve_vo_chong: number[]; // [2];
    // dien_bien_qua_trinh_luong: number[]; // [2];
    // cac_du_an_da_tham_gia: number[]; // [];
    trinh_do_nghiep_vu_theo_chuyen_nganh: string; // 'khum';
    hoc_ham_duoc_phong: string; // 'Phó giáo sư';
    nam_duoc_phong: string; // '2022';
    noi_dung_yeu_cau_chinh_sua: string;
  }

  export interface IQuaTrinhDaoTao {
    id: number; //3;
    nhan_su_id: any[]; // [1, 'TDN0000001'];
    nhan_su_draft_id: any[]; // [2, 'TDN0000001'];
    ten_truong: string; // 'Tiểu học Siêu nhân';
    chuyen_nganh: string; // 'siêu nhân';
    tu_ngay: string; // '2022-09-01';
    den_ngay: string; // '2022-09-02';
    hinh_thuc_dao_tao: string; // 'Chính quy';
    trinh_do_van_bang: string; // 'Siêu nhân tiểu học';
    check_file_minh_chung?: string;
  }

  export interface IQuaTrinhCongTac {
    id: number; //3;
    nhan_su_id: any[]; // [1, 'TDN0000001'];
    nhan_su_draft_id: any[]; // [2, 'TDN0000001'];
    tu_ngay: string; // '2022-09-01';
    den_ngay: string; // '2022-09-02';
    mo_ta: string; // 'Siêu nhân tiểu học';
    check_file_minh_chung?: string;
  }

  export interface IQuanHeGiaDinh {
    id: number; //3;
    nhan_su_id: any[]; // [1, 'TDN0000001'];
    nhan_su_draft_id: any[]; // [2, 'TDN0000001'];
    moi_quan_he: string; // 'Bố';
    ho_va_ten: string; //'Đặng Văn X';
    nam_sinh: string; // '1973';
    thong_tin: string; // 'không';
  }

  export interface IQuaTrinhLuong {
    id: number; //3;
    nhan_su_id: any[]; // [1, 'TDN0000001'];
    nhan_su_draft_id: any[]; // [2, 'TDN0000001'];
    thang_nam: string; //'10/2022';
    ma_so: string;
    ma_ngach: string; // '5';
    he_so_luong: number; //5;
  }

  export interface IDonXinNghiPhep {
    id?: number;
    nhan_su_id: number;
    tu_ngay: string;
    den_ngay: string;
    ghi_chu: string;
    create_date?: string;
    trang_thai_phe_duyet?: string;
  }

  export interface IHopDong {
    id: number;
    nhan_su_id: any[];
    so_hop_dong: string;
    loai_hop_dong: string;
    doi_tuong_theo_hop_dong: string;
    co_phai_hop_dong_dang_ap_dung: boolean;
    ngay_ky: string;
    nguoi_ky: string;
    thoi_han: string;
    tu_ngay: string;
    den_ngay: string;
    file_minh_chung: string;
    check_file_minh_chung: string;
  }
}
