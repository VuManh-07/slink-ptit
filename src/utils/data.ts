import {
  ECapQuanLy,
  ELoaiDeTai,
  ELoaiHinhDeTaiNhiemVu,
  EPhaseDeTaiKHCN,
  ETrangThaiDangKy,
  ETrangThaiDotDangKyDeTaiQLKH,
  ETrangThaiKhoa,
} from './constants';

const data: any = {
  status: [
    { value: 'open', text: 'Chưa thanh toán' },
    {
      value: {
        $in: ['paid', 'overpaid'],
      },
      text: 'Đã thanh toán',
    },
  ],
  hetHan: [
    ETrangThaiDotDangKyDeTaiQLKH.CHUA_DIEN_RA,
    ETrangThaiDotDangKyDeTaiQLKH.DANG_DIEN_RA,
    ETrangThaiDotDangKyDeTaiQLKH.DA_KET_THUC,
  ],

  loaiDeTai: Object.keys(ELoaiDeTai),
  trangThaiDangKy: Object.values(ETrangThaiDangKy),
  trangThaiXetDuyet: Object.values(ETrangThaiDangKy),
  lock: [
    { value: true, text: ETrangThaiKhoa.DA_KHOA },
    { value: false, text: ETrangThaiKhoa.CHUA_KHOA },
  ],

  lockXetDuyet: [
    { value: true, text: ETrangThaiKhoa.DA_KHOA },
    { value: false, text: ETrangThaiKhoa.CHUA_KHOA },
  ],
  lockDeCuong: [
    { value: true, text: ETrangThaiKhoa.DA_KHOA },
    { value: false, text: ETrangThaiKhoa.CHUA_KHOA },
  ],
  lockNghiemThu: [
    { value: true, text: ETrangThaiKhoa.DA_KHOA },
    { value: false, text: ETrangThaiKhoa.CHUA_KHOA },
  ],

  phaseDeTaiKhcn: Object.values(EPhaseDeTaiKHCN),

  trangThai: [
    { value: 'PROCESSING', text: 'Đang xử lý' },
    { value: 'OK', text: 'Đã duyệt' },
    { value: 'NOT_OK', text: 'Không duyệt' },
  ],
  ketQuaDuyet: ['Chưa duyệt', 'Duyệt', 'Không duyệt', 'Yêu cầu chỉnh sửa'],
  'thongTinThuTuc.yeuCauTraPhi': [
    { value: false, text: 'Không' },
    { value: true, text: 'Có' },
  ],
  phamVi: ['Tất cả', 'Hình thức đào tạo'],
  path: {
    sinh_vien: '/dashboard',
    nhan_vien: '/dashboard',
    Admin: '/dashboard',
    quan_tri: '/dashboard',
    can_bo_qlkh: '/dashboard',
    guest: '/dashboard',
    ke_toan: '/dashboard',
  },
  doiTuong: ['Vai trò', 'Tất cả'],
  vaiTro: [
    { value: 'sinh_vien', text: 'Sinh viên' },
    { value: 'nhan_vien', text: 'Cán bộ, giảng viên' },
  ],
  gioiTinh: ['Nam', 'Nữ'],
  'info.anToan': [
    { value: false, text: 'Không an toàn' },
    { value: true, text: 'An toàn' },
  ],
  daGiao: [
    { value: false, text: 'Chưa giao' },
    { value: true, text: 'Đã giao' },
  ],
  daDuyet: [
    { value: false, text: 'Chưa trả lời' },
    { value: true, text: 'Đã trả lời' },
  ],

  daLogBIDV: [
    { value: false, text: 'Chưa ghi nhận' },
    { value: true, text: 'Đã ghi nhận' },
  ],

  daCoTrenCong: [
    { value: false, text: 'Chưa ghi nhận' },
    { value: true, text: 'Đã ghi nhận' },
  ],

  daSaoKe: [
    { value: false, text: 'Chưa sao kê' },
    { value: true, text: 'Đã sao kê' },
  ],

  capQuanLy: Object.values(ECapQuanLy),

  loaiHinh: Object.values(ELoaiHinhDeTaiNhiemVu),

  loaiHinhDaoTao: ['Đại học Chính quy', 'Đại học Phi chính quy', 'Sau Đại học', 'Liên kết quốc tế'],

  loaiDonVi: ['Đơn vị cứng', 'Đơn vị mềm'],

  CapDonVi: {
    'Bộ môn': { Trưởng: 'Trưởng bộ môn', Phó: 'Phó trưởng bộ môn', 'Cán bộ': 'Cán bộ' },
    Phòng: { Trưởng: 'Trưởng phòng', Phó: 'Phó trưởng phòng', 'Cán bộ': 'Cán bộ' },
    Khoa: { Trưởng: 'Trưởng khoa', Phó: 'Phó trưởng khoa', 'Cán bộ': 'Cán bộ' },
    'Trung tâm': {
      Trưởng: 'Giám đốc trung tâm',
      Phó: 'Phó giám đốc trung tâm',
      'Cán bộ': 'Cán bộ',
    },
    Viện: { Trưởng: 'Viện trưởng', Phó: 'Phó viện trưởng', 'Cán bộ': 'Cán bộ' },
    'Học viện': { Trưởng: 'Giám đốc', Phó: 'Phó giám đốc', 'Cán bộ': 'Cán bộ' },
    'Hội đồng trường': { Trưởng: 'Chủ tịch', Phó: 'Phó chủ tịch', 'Cán bộ': 'Cán bộ' },
    'Trung tâm nhỏ': {
      Trưởng: 'Trưởng trung tâm',
      Phó: 'Phó trưởng trung tâm',
      'Cán bộ': 'Cán bộ',
    },
  },

  error: {
    BAD_REQUEST_DEVICE_IDENDIFIED: 'BAD_REQUEST_DEVICE_IDENDIFIED',
    BAD_REQUEST_WRONG_PASSWORD: 'Sai mật khẩu',
    BAD_REQUEST_EMPTY_CLIENT_DEVICE_ID: 'BAD_REQUEST_EMPTY_CLIENT_DEVICE_ID',
    BAD_REQUEST_CLIENT_DEVICE_ID_EXIST: 'BAD_REQUEST_CLIENT_DEVICE_ID_EXIST',
    BAD_REQUEST_WRONG_OLD_PASSWORD: 'Mật khẩu cũ không đúng',
    BAD_REQUEST_DUPLICATE_NEW_PASSWORD: 'Mật khẩu mới giống mật khẩu cũ',
    BAD_REQUEST_DUPLICATE_EMAIL: 'Đã tồn tại tài khoản sử dụng email này',
    UNAUTHORIZED_WRONG_PASSWORD: 'Tên tài khoản hoặc mật khẩu chưa chính xác',
    UNAUTHORIZED_USERNAME_NOT_FOUND: 'Tên tài khoản hoặc mật khẩu chưa chính xác',
    BAD_REQUEST_ID_EXISTED: 'Mã đã tồn tại',
    BAD_REQUEST_DA_KHAI_BAO: 'Đã khai báo đánh giá',
    BAD_REQUEST_STILL_PROCESSING:
      'Đơn của bạn đang được xử lý. Vui lòng không tạo thêm yêu cầu mới.',
  },
};

export default data;
