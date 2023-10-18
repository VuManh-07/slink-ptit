// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  layout: {
    // https://umijs.org/zh-CN/plugins/plugin-layoutth
    locale: true,
    siderWidth: 200,
    ...defaultSettings,
  },
  // https://umijs.org/zh-CN/plugins/plugin-locale
  locale: {
    // enable: true,
    default: 'vi-VN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: false,
    // baseSeparator: '_',
  },
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/admin/login',
      layout: false,
      hideInMenu: true,
      name: 'login',
      component: './user/Login/adminlogin',
    },
    {
      path: '/user',
      layout: false,
      routes: [
        {
          path: '/user/login',
          layout: false,
          name: 'login',
          component: './user/Login',
        },

        {
          path: '/user',
          redirect: '/user/login',
        },
        {
          name: 'register-result',
          icon: 'smile',
          path: '/user/register-result',
          component: './user/register-result',
        },
        {
          name: 'register',
          icon: 'smile',
          path: '/user/register',
          component: './user/register',
        },
        {
          component: '404',
        },
      ],
    },
    {
      hideInMenu: true,
      name: 'account',
      icon: 'user',
      path: '/account',
      routes: [
        {
          name: 'center',
          icon: 'smile',
          path: '/account/center',
          component: './account/center',
        },
        // {
        //   name: 'settings',
        //   icon: 'smile',
        //   path: '/account/settings',
        //   component: './account/settings',
        // },
      ],
    },
    // {
    //   path: '/dashboard',
    //   name: 'Dashboard',
    //   component: './TrangChu',
    //   icon: 'HomeOutlined',
    // },
    {
      name: 'TaiKhoanTheSinhVien',
      icon: 'DollarOutlined',
      path: '/taikhoanthesinhvien',
      // access: 'sinhVien',
      component: './TheSinhVien',
    },

    {
      name: 'BangDiem',
      icon: 'PaperClipOutlined',
      path: '/bangdiem',
      // access: 'sinhVien',
      component: './BangDiem',
    },

    {
      path: '/baivietchung',
      name: 'BaiVietChung',
      component: './BaiVietChung',
      icon: 'EditOutlined',
      access: 'admin',
    },
    // {
    //   name: 'dva-sample',
    //   icon: 'CalendarOutlined',
    //   path: '/dva-sample',
    //   component: './DvaSample',
    // },

    // menu sinh vien
    // {
    //   name: 'News',
    //   icon: 'NotificationOutlined',
    //   path: '/tintuc',
    //   access: 'sinhVienVaNhanVien',
    //   routes: [
    //     {
    //       path: './',
    //       component: './TinTuc',
    //       hideInMenu: true,
    //     },
    //     {
    //       path: './chitiet',
    //       hideInMenu: true,
    //       component: './TinTuc/ChiTietTinTuc.tsx',
    //     },
    //   ],
    // },
    // {
    //   name: 'HocTap',
    //   icon: 'EditOutlined',
    //   path: '/hoctap',
    //   access: 'sinhVien',
    //   routes: [
    //     // {
    //     //   name: 'TienTrinhHocTap',
    //     //   path: './chuongtrinhkhung',
    //     //   component: './ChuongTrinhKhung',
    //     //   access: 'sinhVien',
    //     // },
    //     // {
    //     //   name: 'TienTrinhHocTap',
    //     //   path: './tientrinh',
    //     //   component: './TienTrinhHocTap',
    //     //   access: 'sinhVien',
    //     // },
    //     {
    //       name: 'DangKyTinChi',
    //       path: './tinchi',
    //       component: './DangKyTinChi',
    //       access: 'sinhVien',
    //     },
    //     {
    //       name: 'DangKyNhuCau',
    //       path: './nhucau',
    //       component: './DangKyTinChi/DangKyNhuCau',
    //       access: 'sinhVien',
    //     },
    //     {
    //       name: 'ThoiKhoaBieu',
    //       path: './calendar',
    //       component: './Calendar',
    //       access: 'sinhVien',
    //     },
    //     {
    //       name: 'LopTinChi',
    //       path: './loptinchi',
    //       component: './LopTinChi',
    //       access: 'sinhVien',
    //     },
    //     {
    //       name: 'LopHanhChinh',
    //       path: './lophanhchinh',
    //       component: './LopHanhChinh/SinhVien',
    //       access: 'sinhVien',
    //     },
    //     // {
    //     //   name: 'KetQuaHocTap',
    //     //   path: './gochoctap',
    //     //   access: 'sinhVien',
    //     //   component: './LopTinChi/GocHocTap',
    //     // },
    //   ],
    // },

    // {
    //   name: 'DichVuMotCuaSinhVien',
    //   icon: 'AuditOutlined',
    //   path: '/dichvumotcuasv',
    //   routes: [
    //     {
    //       name: 'TaoDon',
    //       path: './taodon/dvmc',
    //       component: './DichVuMotCuaV2/SinhVien/GuiDon',
    //       access: 'sinhVien',
    //     },
    //     {
    //       // name: 'DichVuMotCuaSinhVien',
    //       hideInMenu: true,
    //       // icon: 'team',
    //       access: 'sinhVien',
    //       path: '/dichvumotcuasv/taodon/dvmc/:id',
    //       component: './DichVuMotCuaV2/SinhVien/GuiDon/$id',
    //     },
    //     {
    //       name: 'LichSu',
    //       path: './lichsu/dvmc',
    //       component: './DichVuMotCuaV2/SinhVien/LichSu',
    //       access: 'sinhVien',
    //     },
    //   ],
    //   access: 'sinhVien',
    // },
    // {
    //   name: 'CongNoSinhVien',
    //   icon: 'TransactionOutlined',
    //   path: '/congnosinhvien',
    //   access: 'sinhVien',
    //   component: './CongNo/CongNoSinhVien',
    // },

    // // ----------menu nhan vien-------

    // // {
    // //   name: 'News',
    // //   icon: 'NotificationOutlined',
    // //   path: '/tintuc',
    // //   access: 'sinhVienVaNhanVien',
    // //   routes: [
    // //     {
    // //       path: './',
    // //       component: './TinTuc',
    // //       hideInMenu: true,
    // //     },
    // //     {
    // //       path: './chitiet',
    // //       hideInMenu: true,
    // //       component: './TinTuc/ChiTietTinTuc.tsx',
    // //     },
    // //   ],
    // // },
    // {
    //   name: 'Lich',
    //   icon: 'CalendarOutlined',
    //   path: '/calendar',
    //   component: './Calendar',
    //   access: 'nhanVien',
    // },
    // {
    //   name: 'LopHanhChinh',
    //   icon: 'TeamOutlined',
    //   path: '/lophanhchinhgiangvien',
    //   component: './LopHanhChinh/GiangVien',
    //   access: 'nhanVien',
    // },
    // {
    //   name: 'LopTinChi',
    //   icon: 'SolutionOutlined',
    //   path: '/loptinchi',
    //   component: './LopTinChi',
    //   access: 'nhanVien',
    // },
    // {
    //   name: 'ThongBao',
    //   icon: 'notification',
    //   path: './thongbao',
    //   component: './ThongBao/index.tsx',
    //   access: 'routeFilter',
    //   maChucNang: 'thong-bao:read',
    // },

    // {
    //   name: 'QuanLyKhoaHoc',
    //   icon: 'AuditOutlined',
    //   path: '/quanlykhoahoc',
    //   routes: [
    //     {
    //       name: 'KetQuaNCKH',
    //       path: './canhankekhai',
    //       routes: [
    //         {
    //           name: 'HuongDanNghienCuuSinh',
    //           path: './huongdanncs',
    //           component: './QuanLyKhoaHoc/HuongDanNCS',
    //           access: 'nhanVien',
    //         },
    //         {
    //           name: 'NhiemVuKHCN',
    //           path: './nhiemvukhcn',
    //           component: './QuanLyKhoaHoc/NhiemVuKHCN',
    //           access: 'nhanVien',
    //         },
    //         {
    //           name: 'BienSoanSach',
    //           path: './biensoansach',
    //           component: './QuanLyKhoaHoc/BienSoanSach',
    //           access: 'nhanVien',
    //         },
    //         {
    //           name: 'BaiBaoKhoaHoc',
    //           path: './baibaokhoahoc',
    //           component: './QuanLyKhoaHoc/BaiBaoKhoaHoc',
    //           access: 'nhanVien',
    //         },
    //         {
    //           name: 'BaiVietHoiThaoKH',
    //           path: './baiviethoithaoKHtoadamKH',
    //           component: './QuanLyKhoaHoc/BaiVietHoiThaoKhoaHoc',
    //           access: 'nhanVien',
    //         },
    //         {
    //           name: 'BangSangChe',
    //           path: './bangsangche',
    //           component: './QuanLyKhoaHoc/BangSangChe',
    //           access: 'nhanVien',
    //         },
    //         {
    //           name: 'TacPhamThanhTich',
    //           path: './tacphamthanhtich',
    //           component: './QuanLyKhoaHoc/TacPhamThanhTich',
    //           access: 'nhanVien',
    //         },
    //         // {
    //         //   name: 'TongKet',
    //         //   path: './tongket',
    //         //   component: './QuanLyKhoaHoc/TongKet/CongTrinhNCKH',
    //         //   access: 'nhanVien',
    //         // },
    //         {
    //           name: 'DeTaiCapCoSo',
    //           path: './detaicapcoso',
    //           routes: [
    //             {
    //               name: 'DanhSachDeTai',
    //               path: './danhsachdetai',
    //               access: 'nhanVien',
    //               component: './QuanLyKhoaHocV2/DangKyDeTai',
    //             },
    //             {
    //               name: 'HoiDongThamGia',
    //               path: './myhoidong',
    //               access: 'nhanVien',
    //               component: './QuanLyKhoaHocV2/HoiDongKHCN/MyHoiDong',
    //             },
    //           ],
    //         },
    //         {
    //           name: 'ThongKe',
    //           icon: 'PieChartOutlined',
    //           path: './thongke',
    //           access: 'nhanVien',
    //           routes: [
    //             {
    //               name: 'CongTrinhNCKH',
    //               path: './congtrinhnckh',
    //               access: 'nhanVien',
    //               component: './QuanLyKhoaHoc/TongKet/GioNCKH',
    //             },
    //           ],
    //         },
    //         {
    //           name: 'YeuCauThanhVien',
    //           icon: 'ExclamationCircleOutlined',
    //           path: './yeucauthanhvien',
    //           routes: [
    //             {
    //               name: 'YeuCauGuiDen',
    //               component: './QuanLyKhoaHoc/YeuCauThanhVien/GuiDen',
    //               path: './guiden',
    //               access: 'nhanVien',
    //             },
    //             {
    //               name: 'YeuCauGuiDi',
    //               component: './QuanLyKhoaHoc/YeuCauThanhVien/GuiDi',
    //               path: './guidi',
    //               access: 'nhanVien',
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   name: 'QuanLyNCKH',
    //   path: './quanly',
    //   icon: 'AppstoreOutlined',
    //   routes: [
    //     {
    //       name: 'DeTaiCapCoSo',
    //       path: './detaicapcoso',
    //       routes: [
    //         {
    //           name: 'DangKy',
    //           path: './tochucdangky',
    //           routes: [
    //             {
    //               name: 'DotDangKy',
    //               path: './dotdangky',
    //               access: 'routeFilterCanBoPhongQLKH',
    //               maChucNang: 'ke-hoach-de-tai:read',
    //               component: './QuanLyKhoaHocV2/DotDangKy',
    //             },
    //             {
    //               name: 'TiepNhanDangKy',
    //               path: './tiepnhandangky',
    //               access: 'canBoQLKHPhongVaCanBoQLKHDonVi',
    //               component: './QuanLyKhoaHocV2/TiepNhanDangKy',
    //             },
    //           ],
    //         },
    //         {
    //           name: 'XetDuyet',
    //           path: './xetduyetdetai',
    //           routes: [
    //             {
    //               name: 'XetDuyetSauHoiDong',
    //               path: './xetduyetsauhoidong',
    //               access: 'routeFilterCanBoPhongQLKH',
    //               maChucNang: 'de-tai-khcn:update',
    //               component: './QuanLyKhoaHocV2/XetDuyetSauHoiDong',
    //             },
    //             {
    //               name: 'HoiDong',
    //               path: './hoidong',
    //               access: 'routeFilterCanBoPhongQLKH',
    //               maChucNang: 'hoi-dong-khcn:read',
    //               component: './QuanLyKhoaHocV2/HoiDongKHCN/HoiDongXetDuyet',
    //             },
    //           ],
    //         },
    //         {
    //           name: 'QuyetDinhGiao',
    //           path: './quyetdinhgiao',
    //           component: './QuanLyKhoaHocV2/QuyetDinhGiao',
    //           access: 'routeFilterCanBoPhongQLKH',
    //           maChucNang: 'ke-hoach-de-tai:read',
    //         },
    //         {
    //           name: 'DeCuong',
    //           path: './xetduyetdecuong',
    //           routes: [
    //             {
    //               name: 'TiepNhanDeCuong',
    //               path: './tiepnhandecuong',
    //               access: 'canBoQLKHPhongVaCanBoQLKHDonVi',
    //               component: './QuanLyKhoaHocV2/XetDuyetDeCuong/TiepNhanDeCuong',
    //             },
    //             {
    //               name: 'XetDuyetSauHoiDong',
    //               path: './xetduyetsauhoidong',
    //               access: 'canBoQLKHPhongVaCanBoQLKHDonVi',
    //               component: './QuanLyKhoaHocV2/XetDuyetDeCuong',
    //             },
    //             {
    //               name: 'HoiDong',
    //               path: './hoidong',
    //               access: 'canBoQLKHPhongVaCanBoQLKHDonVi',
    //               component: './QuanLyKhoaHocV2/HoiDongKHCN/HoiDongDeCuong',
    //             },
    //           ],
    //         },
    //         {
    //           name: 'ThucHien',
    //           path: './thuchiendetai',
    //           access: 'canBoQLKHPhongVaCanBoQLKHDonVi',
    //           component: './QuanLyKhoaHocV2/ThucHienDeTai',
    //         },

    //         {
    //           name: 'NghiemThu',
    //           path: './nghiemthudetai',
    //           routes: [
    //             {
    //               name: 'XetDuyetSauHoiDong',
    //               path: './xetduyetsauhoidong',
    //               access: 'canBoQLKHPhongVaCanBoQLKHDonVi',
    //               component: './QuanLyKhoaHocV2/NghiemThuDeTai',
    //             },
    //             {
    //               name: 'HoiDong',
    //               path: './hoidong',
    //               access: 'canBoQLKHPhongVaCanBoQLKHDonVi',
    //               component: './QuanLyKhoaHocV2/HoiDongKHCN/HoiDongNghiemThuDeTai',
    //             },
    //           ],
    //         },
    //         {
    //           name: 'SauNghiemThu',
    //           path: './saunghiemthu',
    //           access: 'canBoQLKHPhongVaCanBoQLKHDonVi',
    //           component: './QuanLyKhoaHocV2/SauNghiemThu',
    //         },
    //       ],
    //     },
    //     {
    //       name: 'KetQuaNCKH',
    //       path: './ketquannckh',
    //       routes: [
    //         {
    //           name: 'ThongTinTongHop',
    //           icon: 'PieChartOutlined',
    //           path: './thongtintonghop',
    //           access: 'routeFilterCanBoPhongQLKH',
    //           maChucNang: 'qlkh:read',
    //           component: './QuanLyKhoaHoc/Admin/ThongTinTongHop',
    //         },
    //         // {
    //         //   name: 'DotKhaiBaoKHCN',
    //         //   path: './dotkhaibaokhcn',
    //         //   access: 'routeFilterCanBoPhongQLKH',
    //         //   maChucNang: 'qlkh:read',
    //         //   component: './DotKhaiBaoKHCN',
    //         // },
    //         // {
    //         //   name: 'HuongDanNghienCuuSinh',
    //         //   path: './huongdanncs',
    //         //   component: './QuanLyKhoaHoc/HuongDanNCS',
    //         //   access: 'routeFilterCanBoPhongQLKH',
    //         //   maChucNang: 'qlkh:read',
    //         // },
    //         // {
    //         //   name: 'NhiemVuKHCN',
    //         //   path: './nhiemvukhcn',
    //         //   component: './QuanLyKhoaHoc/NhiemVuKHCN',
    //         //   access: 'routeFilterCanBoPhongQLKH',
    //         //   maChucNang: 'qlkh:read',
    //         // },
    //         // {
    //         //   name: 'BienSoanSach',
    //         //   path: './biensoansach',
    //         //   component: './QuanLyKhoaHoc/BienSoanSach',
    //         //   access: 'routeFilterCanBoPhongQLKH',
    //         //   maChucNang: 'qlkh:read',
    //         // },
    //         // {
    //         //   name: 'BaiBaoKhoaHoc',
    //         //   path: './baibaokhoahoc',
    //         //   component: './QuanLyKhoaHoc/BaiBaoKhoaHoc',
    //         //   access: 'routeFilterCanBoPhongQLKH',
    //         //   maChucNang: 'qlkh:read',
    //         // },
    //         // {
    //         //   name: 'BaiVietHoiThaoKH',
    //         //   path: './baiviethoithaoKHtoadamKH',
    //         //   component: './QuanLyKhoaHoc/BaiVietHoiThaoKhoaHoc',
    //         //   access: 'routeFilterCanBoPhongQLKH',
    //         //   maChucNang: 'qlkh:read',
    //         // },
    //         // {
    //         //   name: 'BangSangChe',
    //         //   path: './bangsangche',
    //         //   component: './QuanLyKhoaHoc/BangSangChe',
    //         //   access: 'routeFilterCanBoPhongQLKH',
    //         //   maChucNang: 'qlkh:read',
    //         // },
    //         // {
    //         //   name: 'TacPhamThanhTich',
    //         //   path: './tacphamthanhtich',
    //         //   component: './QuanLyKhoaHoc/TacPhamThanhTich',
    //         //   access: 'routeFilterCanBoPhongQLKH',
    //         //   maChucNang: 'qlkh:read',
    //         // },
    //         {
    //           name: 'DanhSachGiangVien',
    //           icon: 'ContainerOutlined',
    //           path: './qlkhadmin',
    //           access: 'routeFilterCanBoPhongQLKH',
    //           maChucNang: 'qlkh:read',
    //           component: './QuanLyKhoaHoc/Admin',
    //         },
    //         {
    //           name: 'YeuCauThanhVien',
    //           component: './QuanLyKhoaHoc/YeuCauThanhVien/PhongQLKH',
    //           access: 'routeFilterCanBoPhongQLKH',
    //           maChucNang: 'qlkh:read',
    //           path: './tonghopyeucau',
    //           icon: 'ExclamationCircleOutlined',
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   name: 'QuanLyThuVien',
    //   icon: 'container',
    //   path: './quanlythuvien',
    //   access: 'routeFilter',
    //   maChucNang: 'thu-vien:dashboard',
    //   routes: [
    //     {
    //       name: 'DashBoard',
    //       icon: 'smile',
    //       path: './dashboard',
    //       component: './QuanLyThuVien/Dashboard',
    //       access: 'routeFilter',
    //       maChucNang: 'thu-vien:dashboard',
    //     },
    //     {
    //       name: 'QuanLyThuVien',
    //       icon: 'smile',
    //       path: './quanly',
    //       component: './QuanLyThuVien',
    //       access: 'routeFilter',
    //       maChucNang: 'thu-vien:read',
    //     },
    //     // {
    //     //   name: 'QuanLyDot',
    //     //   icon: 'smile',
    //     //   path: './quanlydot',
    //     //   component: './QuanLyThuVien/QuanLyDot',
    //     //   access: 'routeFilter',
    //     //   maChucNang: 'dot-nop-tai-lieu:read',
    //     // },
    //     // {
    //     //   name: 'QuanLyLuanAn',
    //     //   icon: 'smile',
    //     //   path: './quanlyluanan',
    //     //   component: './QuanLyThuVien/QuanLyLuanAn',
    //     //   access: 'routeFilter',
    //     //   maChucNang: 'dot-nop-tai-lieu:read',
    //     // },
    //     // {
    //     //   name: 'QuanLyLuanVan',
    //     //   icon: 'smile',
    //     //   path: './quanlyluanvan',
    //     //   component: './QuanLyThuVien/QuanLyLuanVan',
    //     //   access: 'routeFilter',
    //     //   maChucNang: 'luan-an:read',
    //     // },
    //     // {
    //     //   name: 'QuanLyKhoaLuan',
    //     //   icon: 'smile',
    //     //   path: './quanlykhoaluan',
    //     //   component: './QuanLyThuVien/QuanLyKhoaLuan',
    //     //   access: 'routeFilter',
    //     //   maChucNang: 'luan-an:read',
    //     // },
    //   ],
    // },
    // // {
    // //   name: 'ThuVien',
    // //   icon: 'container',
    // //   path: './quanlythuviensinhvien',
    // //   access: 'sinhVien',
    // //   routes: [
    // //     {
    // //       name: 'LuanAn',
    // //       icon: 'smile',
    // //       path: './quanlyluanansinhvien',
    // //       component: './QuanLyThuVien/QuanLyLuanAn',
    // //       // access: 'routeFilter',
    // //       // maChucNang: 'luan-an:read',
    // //     },
    // //     {
    // //       name: 'LuanVan',
    // //       icon: 'smile',
    // //       path: './quanlyluanvansinhvien',
    // //       component: './QuanLyThuVien/QuanLyLuanVan',
    // //       // access: 'routeFilter',
    // //       // maChucNang: 'luan-an:read',
    // //     },
    // //     {
    // //       name: 'KhoaLuan',
    // //       icon: 'smile',
    // //       path: './quanlykhoaluansinhvien',
    // //       component: './QuanLyThuVien/QuanLyKhoaLuan',
    // //       // access: 'routeFilter',
    // //       // maChucNang: 'luan-an:read',
    // //     },
    // //   ],
    // // },
    // {
    //   name: 'ThongKeGioGiang',
    //   icon: 'ClockCircleOutlined',
    //   path: './thongkegiogiang',
    //   access: 'routeFilter',
    //   component: './ThongKeGioGiang',
    // },
    // {
    //   name: 'NganHangCauHoi',
    //   icon: 'BankOutlined',
    //   path: '/thionline/danhsachhocphan',
    //   access: 'routeFilter',
    //   maChucNang: 'thi-online-quan-ly-cau-hoi',
    //   routes: [
    //     {
    //       icon: 'user',
    //       hideInMenu: true,
    //       path: '/thionline/danhsachhocphan',
    //       component: './thionline/danhsachhocphan',
    //     },
    //   ],
    // },
    // {
    //   name: 'QuanLyCaThi',
    //   icon: 'FieldTimeOutlined',
    //   path: '/quanlicathi',
    //   component: './Quanlicathi',
    //   access: 'routeFilter',
    //   maChucNang: 'thi-online-ca-thi-by-ky:read-by-ky',
    // },
    // {
    //   name: 'XemCaThi',
    //   icon: 'SolutionOutlined',
    //   path: '/xemCaThi',
    //   component: './XemCaThi',
    //   access: 'nhanVien',
    //   // maChucNang: 'GIAM_THI_TRUC_TUYEN',
    // },
    // // {
    // //   name: 'VanPhongSoNhanVien',
    // //   icon: 'PaperClipOutlined',
    // //   path: '/vanphongsonhanvien',
    // //   routes: [
    // //     {
    // //       name: 'QuanLyLichTuan',
    // //       icon: 'calendar',
    // //       path: './lich-tuan',
    // //       access: 'routeFilter',
    // //       maChucNang: 'lich-tuan:read',
    // //       component: './VanPhongSo/QuanLyLichTuan',
    // //     },
    // //     {
    // //       name: 'TaoDon',
    // //       path: './taodon/vps',
    // //       component: './DichVuMotCuaV2/SinhVien/GuiDon',
    // //       access: 'nhanVien',
    // //     },
    // //     {
    // //       hideInMenu: true,
    // //       access: 'nhanVien',
    // //       path: '/vanphongsonhanvien/taodon/vps/:id',
    // //       component: './DichVuMotCuaV2/SinhVien/GuiDon/$id',
    // //     },
    // //     {
    // //       name: 'DonDaGui',
    // //       path: './lichsu/vps',
    // //       component: './DichVuMotCuaV2/NhanVien/LichSu',
    // //       access: 'nhanVien',
    // //     },
    // //     {
    // //       name: 'ChuyenVienDieuPhoiQuanLyDon',
    // //       path: './quanlydondieuphoi/vps',
    // //       access: 'routeFilter',
    // //       maChucNang: 'don-dvmc-thao-tac:read-all',
    // //       component: './DichVuMotCuaV2/QuanLyDon',
    // //     },
    // //     {
    // //       name: 'ChuyenVienTiepNhanQuanLyDon',
    // //       path: './quanlydonchuyenvien/vps',
    // //       access: 'routeFilter',
    // //       maChucNang: 'don-dvmc-thao-tac:read-my',
    // //       component: './DichVuMotCuaV2/QuanLyDon',
    // //     },
    // //   ],
    // //   access: 'nhanVien',
    // // },
    // {
    //   name: 'TienIchKhac',
    //   icon: 'TransactionOutlined',
    //   path: '/tienichkhac',
    //   access: 'sinhVienVaNhanVien',
    //   routes: [
    //     {
    //       name: 'PhanHoi',
    //       path: './phanhoi',
    //       component: './PhanHoi',
    //       // maChucNang: 'phan-hoi:read',
    //       access: 'sinhVienVaNhanVien',
    //     },
    //     {
    //       name: 'VanBanHuongDan',
    //       path: './vanbanhuongdanuser',
    //       access: 'sinhVienVaNhanVien',
    //       component: './VanBanHuongDan',
    //     },
    //     {
    //       name: 'KhaoSatTrucTuyen',
    //       path: './khaosat',
    //       component: './KhaoSatSVGV',
    //       access: 'sinhVienVaNhanVien',
    //     },
    //     {
    //       name: 'KhaiBaoYTe',
    //       path: './khaibaosuckhoeuser',
    //       component: './KhaiBaoSucKhoe/User',
    //       access: 'sinhVienVaNhanVien',
    //     },
    //   ],
    // },

    // {
    //   name: 'quanlydichvu',
    //   icon: 'container',
    //   path: '/quan-ly-dich-vu',
    //   access: 'keToan',
    //   routes: [
    //     {
    //       path: './coffee-manager',
    //       name: 'Coffee',
    //       component: './CoffeeManager',
    //       access: 'keToan',
    //       icon: 'CoffeeOutlined',
    //     },
    //   ],
    // },
    // {
    //   name: 'ThongBaoPCoffee',
    //   icon: 'notification',
    //   path: '/thongbaopcoffee',
    //   component: './ThongBaoPCoffee',
    //   access: 'keToan',
    // },
    // {
    //   name: 'MemberPCoffee',
    //   icon: 'UserOutlined',
    //   path: '/member',
    //   component: './CoffeeManager/Member',
    //   access: 'keToan',
    // },
    // {
    //   name: 'RankingPCoffee',
    //   icon: 'TrophyOutlined',
    //   path: '/ranking',
    //   component: './CoffeeManager/RankingMember',
    //   access: 'keToan',
    // },
    // {
    //   name: 'BannerPCoffee',
    //   icon: 'PictureOutlined',
    //   path: '/banner',
    //   component: './CoffeeManager/Banner',
    //   access: 'keToan',
    // },
    // {
    //   name: 'ThanhToan',
    //   icon: 'container',
    //   path: '/thanhtoan',
    //   // access: 'adminVaQuanTri',
    //   access: 'routeFilter',
    //   maChucNang: 'doi-soat-bidv:read',
    //   routes: [
    //     {
    //       name: 'TongQuan',
    //       path: './dashboard',
    //       component: './DoiSoatThanhToan/TongQuan',
    //       access: 'routeFilter',
    //       maChucNang: 'doi-soat-bidv:read',
    //     },
    //     {
    //       name: 'ChiTiet',
    //       path: './chitiet',
    //       component: './DoiSoatThanhToan/ChiTiet',
    //       access: 'routeFilter',
    //       maChucNang: 'doi-soat-bidv:read',
    //     },
    //     {
    //       name: 'SaoKe',
    //       path: './thanhtoansaoke',
    //       component: './DoiSoatThanhToan/SaoKe',
    //       access: 'routeFilter',
    //       maChucNang: 'doi-soat-bidv:read',
    //     },
    //     {
    //       name: 'DoiSoat',
    //       path: './doisoat',
    //       component: './DoiSoatThanhToan/DoiSoat',
    //       access: 'routeFilter',
    //       maChucNang: 'doi-soat-bidv:read',
    //     },
    //   ],
    // },
    // // {
    // //   name: 'HoSoCanBo',
    // //   icon: 'idcard',
    // //   path: '/hosocanbo',
    // //   // access: ''
    // //   routes: [
    // //     {
    // //       name: 'SoYeuLyLich',
    // //       path: './soyeulylich',
    // //       // access:''
    // //       component: './HoSoCanBo/SoYeuLiLich',
    // //     },
    // //     {
    // //       name: 'HopDong',
    // //       path: './hopdong',
    // //       // access:''
    // //       component: './HoSoCanBo/HopDong',
    // //     },
    // //     {
    // //       name: 'DonXinNghiPhep',
    // //       path: './donxinnghiphep',
    // //       // access:''
    // //       component: './HoSoCanBo/DonXinNghiPhep',
    // //     },
    // //   ],
    // // },
    // {
    //   name: 'TinTuc',
    //   icon: 'container',
    //   path: '/quantritintuc',
    //   access: 'adminVaQuanTri',
    //   routes: [
    //     {
    //       name: 'ChuDeChung',
    //       icon: 'smile',
    //       path: './chude',
    //       component: './DanhMuc/ChuDe',
    //       access: 'adminVaQuanTri',
    //     },
    //     {
    //       name: 'TinTuc',
    //       icon: 'FileProtectOutlined',
    //       path: './tintuc',
    //       component: './DanhMuc/TinTuc',
    //       access: 'adminVaQuanTri',
    //       maChucNang: 'tin-tuc:read',
    //     },
    //   ],
    // },
    // {
    //   name: 'BieuMau',
    //   icon: 'form',
    //   path: '/bieumau',
    //   access: 'adminVaQuanTri',
    //   routes: [
    //     {
    //       name: 'KhaoSat',
    //       path: './khaosat',
    //       component: './BieuMau/KhaoSat',
    //       access: 'adminVaQuanTri',
    //       maChucNang: 'khao-sat:read',
    //     },
    //     {
    //       name: 'TracNghiem',
    //       path: './tracnghiem',
    //       component: './BieuMau/TracNghiem',
    //       access: 'adminVaQuanTri',
    //       maChucNang: 'khao-sat:read',
    //     },
    //     {
    //       name: 'KhaiBaoSucKhoe',
    //       path: './khaibaosuckhoe',
    //       component: './BieuMau/KhaiBaoSucKhoe',
    //       access: 'adminVaQuanTri',
    //       maChucNang: 'khao-sat:read',
    //     },
    //   ],
    // },

    // // {
    // //   name: 'GocHocTap',
    // //   icon: 'EditOutlined',
    // //   path: '/gochoctap',
    // //   access: 'sinhVien',
    // //   component: './LopTinChi/GocHocTap',
    // // },
    // {
    //   name: 'PhanHoi',
    //   icon: 'QuestionOutlined',
    //   path: '/quanlyphanhoihoidap',
    //   component: './PhanHoi/Admin.tsx',
    //   // maChucNang: 'phan-hoi:read',
    //   access: 'adminVaQuanTri',
    // },
    // {
    //   name: 'VanBanHuongDan',
    //   icon: 'FileText',
    //   path: '/vanbanhuongdan',
    //   access: 'adminVaQuanTri',
    //   component: './VanBanHuongDan/Admin.tsx',
    // },
    // // {
    // //   name: 'KhaiBaoSucKhoe',
    // //   icon: 'HeartOutlined',
    // //   path: '/khaibaosuckhoe',
    // //   access: 'adminVaQuanTri',
    // //   component: './KhaiBaoSucKhoe/Admin.tsx',
    // // },

    // // {
    // //   name: 'LopHanhChinhAdmin',
    // //   icon: 'TeamOutlined',
    // //   path: '/lophanhchinhadmin',
    // //   component: './LopHanhChinh/Admin',
    // //   access: 'admin',
    // // },

    // {
    //   name: 'CoCauToChuc',
    //   icon: 'ApartmentOutlined',
    //   path: '/cocautochuc',
    //   component: './CoCauToChuc',
    //   access: 'admin',
    // },

    // {
    //   name: 'CongNoAdmin',
    //   icon: 'TransactionOutlined',
    //   path: '/congnoadmin',
    //   access: 'routeFilter',
    //   maChucNang: 'cong-no:read',
    //   routes: [
    //     {
    //       name: 'LoaiThanhToan',
    //       icon: 'EditOutlined',
    //       path: './loaithanhtoan',
    //       access: 'routeFilter',
    //       component: './LoaiThanhToan',
    //       maChucNang: 'loai-thanh-toan:read',
    //     },
    //     {
    //       name: 'HoaDon',
    //       icon: 'EditOutlined',
    //       path: './hoadon',
    //       access: 'routeFilter',
    //       component: './CongNo/CongNoAdmin',
    //       maChucNang: 'hoa-don:read',
    //     },
    //   ],
    // },
    // {
    //   name: 'DangKyHocTap',
    //   access: 'admin',
    //   path: './dangkyhoctap',
    //   component: './DangKyHocTap',
    //   icon: 'HighlightOutlined',
    // },
    // {
    //   name: 'DanhGiaGiangVien',
    //   icon: 'AuditOutlined',
    //   path: '/danhgiagiangvien',
    //   routes: [
    //     {
    //       name: 'QuanLyDotDanhGia',
    //       icon: 'AuditOutlined',
    //       path: './quanlydotdanhgia',
    //       component: './DanhGiaGiangVien/QuanLyDotDanhGia',
    //     },
    //     {
    //       name: 'QuanLyBieuMau',
    //       icon: 'AuditOutlined',
    //       path: './quanlybieumau',
    //       component: './DanhGiaGiangVien/QuanLyBieuMau',
    //     },
    //     {
    //       name: 'ThongKeDanhGia',
    //       icon: 'AuditOutlined',
    //       path: './thongkedanhgia',
    //       component: './DanhGiaGiangVien/ThongKe',
    //     },
    //   ],
    //   access: 'quanTri',
    // },
    // {
    //   name: 'DichVuMotCuaAdmin',
    //   icon: 'AuditOutlined',
    //   path: '/dichvumotcuav2',
    //   routes: [
    //     {
    //       name: 'ThongTinTongHop',
    //       path: './thongtintonghop/dvmc',
    //       access: 'adminVaQuanTri',
    //       component: './DichVuMotCuaV2/ThongTinTongHop/Admin.tsx',
    //     },
    //     {
    //       name: 'QuanLyBieuMau',
    //       path: './quanlybieumau/dvmc',
    //       component: './DichVuMotCuaV2/QuanLyBieuMau',
    //       // access: 'adminVaQuanTriVaNhanVien',
    //       access: 'adminVaQuanTri',
    //     },
    //     {
    //       name: 'QuanLyDon',
    //       path: './quanlydonadmin/dvmc',
    //       component: './DichVuMotCuaV2/QuanLyDon/admin',
    //       access: 'adminVaQuanTri',
    //     },
    //   ],
    //   access: 'adminVaQuanTri',
    // },
    // {
    //   name: 'VanPhongSoAdmin',
    //   icon: 'PaperClipOutlined',
    //   path: '/vanphongso',
    //   routes: [
    //     // {
    //     //   name: 'ThongTinTongHop',
    //     //   path: './thongtintonghop/vps',
    //     //   component: './DichVuMotCuaV2/ThongTinTongHop/Admin.tsx',
    //     //   // component: './DichVuMotCuaV2/QuanLyDon/admin',
    //     //   access: 'adminVaQuanTri',
    //     // },
    //     // {
    //     //   name: 'QuanLyDichVu',
    //     //   path: './quanlybieumau/vps',
    //     //   component: './DichVuMotCuaV2/QuanLyBieuMau',
    //     //   access: 'adminVaQuanTri',
    //     // },
    //     // {
    //     //   name: 'QuanLyDon',
    //     //   path: './quanlydonadmin/vps',
    //     //   component: './DichVuMotCuaV2/QuanLyDon/admin',
    //     //   access: 'adminVaQuanTri',
    //     // },
    //     {
    //       name: 'QuanLyLichTuan',
    //       icon: 'calendar',
    //       path: './lich-tuan',
    //       access: 'routeFilter',
    //       maChucNang: 'lich-tuan:read',
    //       component: './VanPhongSo/QuanLyLichTuan',
    //     },
    //     // {
    //     //   name: 'QuanLySuKien',
    //     //   path: './quanlysukien/sukienchung',
    //     //   icon: 'BulbOutlined',
    //     //   access: 'adminVaQuanTri',
    //     //   component: './SuKien/QuanLySuKien/index.tsx',
    //     // },
    //     {
    //       name: 'QuanLyOto',
    //       path: './quanlyoto',
    //       component: './VanPhongSo/QuanLyOto',
    //       access: 'routeFilter',
    //       maChucNang: 'get-list-thong-tin-oto:getPageable',
    //     },
    //     // {
    //     //   name: 'QuanLyBieuMau',
    //     //   path: './quanlybieumau/vps',
    //     //   component: './DichVuMotCuaV2/QuanLyBieuMau',
    //     //   access: 'adminVaQuanTri',
    //     // },
    //     // {
    //     //   name: 'QuanLyDon',
    //     //   path: './quanlydonadmin/vps',
    //     //   component: './DichVuMotCuaV2/QuanLyDon/admin',
    //     //   access: 'adminVaQuanTri',
    //     // },
    //   ],
    // },

    // //trang hiển thị popup chi tiết thông tin từng xe trong quản lý xe
    // {
    //   name: 'ChiTietXePublic',
    //   path: '/chitietxe/public/:id',
    //   component: './VanPhongSo/QuanLyOto/ViewPopupPublic.tsx',
    //   layout: false,
    //   hideInMenu: true,
    // },

    // {
    //   name: 'DichVuMotCuaCanBo',
    //   icon: 'AuditOutlined',
    //   path: './dichvumotcuacanbo',
    //   routes: [
    //     {
    //       name: 'ThongTinTongHop',
    //       path: './thongtintonghop/quanlydondieuphoi/dvmc',
    //       access: 'routeFilter',
    //       maChucNang: 'don-dvmc-thao-tac:read-all',
    //       component: './DichVuMotCuaV2/ThongTinTongHop',
    //     },
    //     {
    //       name: 'QuanLyBieuMau',
    //       path: './quanlybieumau/dvmc',
    //       component: './DichVuMotCuaV2/QuanLyBieuMau',
    //       maChucNang: 'dvmc-thao-tac:read',
    //       access: 'routeFilter',
    //     },
    //     {
    //       name: 'ChuyenVienDieuPhoiQuanLyDon',
    //       path: './quanlydondieuphoi/dvmc',
    //       access: 'routeFilter',
    //       maChucNang: 'don-dvmc-thao-tac:read-all',
    //       component: './DichVuMotCuaV2/QuanLyDon',
    //     },
    //     {
    //       name: 'ChuyenVienTiepNhanQuanLyDon',
    //       path: './quanlydonchuyenvien/dvmc',
    //       access: 'routeFilter',
    //       maChucNang: 'don-dvmc-thao-tac:read-my',
    //       component: './DichVuMotCuaV2/QuanLyDon',
    //     },
    //   ],
    //   access: 'nhanVien',
    // },

    // {
    //   name: 'ThongBao',
    //   icon: 'notification',
    //   path: '/thongbao',
    //   component: './ThongBao',
    //   access: 'adminVaQuanTri',
    // },

    // {
    //   name: 'ThacMacDiem',
    //   icon: 'form',
    //   path: './thacmacdiem',
    //   component: './ThacMacDiem/Admin.tsx',
    //   access: 'adminVaQuanTri',
    // },
    // {
    //   name: 'NhapDiem',
    //   icon: 'form',
    //   path: './nhapdiem',
    //   component: './importPoint/index.tsx',
    //   access: 'adminVaQuanTri',
    // },

    // {
    //   name: 'QuanLyTaiKhoan',
    //   icon: 'UserOutlined',
    //   path: '/quanlytaikhoan',
    //   component: './QuanLyTaiKhoan',
    //   access: 'admin',
    // },
    // {
    //   name: 'ToChucCanBo',
    //   icon: 'SolutionOutlined',
    //   path: '/tochuccanbo',
    //   component: './ToChucCanBo',
    //   access: 'admin',
    // },
    // {
    //   name: 'PhanQuyen',
    //   icon: 'DeploymentUnitOutlined',
    //   path: '/phanquyen',
    //   access: 'admin',
    //   routes: [
    //     {
    //       name: 'NhomVaiTro',
    //       path: './nhomvaitro',
    //       access: 'admin',
    //       component: './PhanQuyen/NhomVaiTro',
    //     },
    //     {
    //       name: 'ChucNang',
    //       path: './phanchucnang',
    //       access: 'admin',
    //       component: './PhanQuyen',
    //     },
    //     {
    //       name: 'PhanNhom',
    //       path: './phannhom',
    //       access: 'admin',
    //       component: './PhanQuyen/UserQLDT',
    //     },
    //   ],
    // },
    // {
    //   name: 'ChucNangQuanLy',
    //   path: '/chucnangquanly',
    //   icon: 'ControlOutlined',
    //   access: 'nhanVien',
    //   routes: [
    //     {
    //       name: 'TinTuc',
    //       icon: 'FileProtectOutlined',
    //       path: './quantritintuc',
    //       component: './DanhMuc/TinTuc',
    //       access: 'routeFilter',
    //       maChucNang: 'tin-tuc:read',
    //     },
    //     {
    //       name: 'BieuMau',
    //       icon: 'form',
    //       path: './bieumau',
    //       routes: [
    //         {
    //           name: 'KhaoSat',
    //           path: './khaosat',
    //           component: './BieuMau/KhaoSat',
    //           access: 'routeFilter',
    //           maChucNang: 'khao-sat:read',
    //         },
    //         {
    //           name: 'KhaiBaoSucKhoe',
    //           path: './khaibaosuckhoe',
    //           component: './BieuMau/KhaiBaoSucKhoe',
    //           access: 'routeFilter',
    //           maChucNang: 'khai-bao-suc-khoe:read',
    //         },
    //       ],
    //     },
    //     {
    //       name: 'PhanHoi',
    //       icon: 'QuestionOutlined',
    //       path: './quanlyphanhoihoidap',
    //       maChucNang: 'phan-hoi:read',
    //       access: 'routeFilter',
    //       routes: [
    //         {
    //           name: 'TatCaPhanHoi',
    //           path: './all',
    //           maChucNang: 'phan-hoi:read',
    //           access: 'routeFilter',
    //           component: './PhanHoi/Admin.tsx',
    //         },
    //         {
    //           name: 'PhanHoiDonVi',
    //           maChucNang: 'phan-hoi:read',
    //           access: 'routeFilter',
    //           path: './guidentoi',
    //           component: './PhanHoi/GuiDenToi.tsx',
    //         },
    //       ],
    //     },

    //     // {
    //     //   name: 'ThongBao',
    //     //   icon: 'notification',
    //     //   path: './thongbao',
    //     //   component: './ThongBao',
    //     //   access: 'routeFilter',
    //     //   maChucNang: 'thong-bao:read',
    //     // },

    //     {
    //       name: 'VanBanHuongDan',
    //       icon: 'FileText',
    //       path: './vanbanhuongdan',
    //       access: 'routeFilter',
    //       component: './VanBanHuongDan/Admin.tsx',
    //       maChucNang: 'thu-muc-van-ban:read',
    //     },
    //     {
    //       name: 'LopHanhChinhAdmin',
    //       icon: 'TeamOutlined',
    //       path: './lophanhchinhadmin',
    //       component: './LopHanhChinh/Admin',
    //       access: 'routeFilter',
    //       maChucNang: 'lop-hanh-chinh:read',
    //     },
    //     {
    //       name: 'CoCauToChuc',
    //       icon: 'ApartmentOutlined',
    //       path: './cocautochuc',
    //       component: './CoCauToChuc',
    //       access: 'routeFilter',
    //       maChucNang: 'co-cau-to-chuc:read',
    //     },
    //     {
    //       name: 'QuanLyTaiKhoan',
    //       icon: 'UserOutlined',
    //       path: './quanlytaikhoan',
    //       component: './QuanLyTaiKhoan',
    //       access: 'routeFilter',
    //       maChucNang: 'tai-khoan:read',
    //     },
    //     {
    //       name: 'DanhMuc',
    //       icon: 'container',
    //       path: './danhmuc',
    //       access: 'routeFilter',
    //       maChucNang: 'danh-muc:read',
    //       routes: [
    //         {
    //           name: 'ChuDeChung',
    //           icon: 'smile',
    //           path: './chudechung',
    //           component: './DanhMuc/ChuDe',
    //           access: 'routeFilter',
    //           maChucNang: 'chu-de-chung:read',
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   hideInMenu: true,
    //   icon: 'team',
    //   exact: true,
    //   access: 'sinhVienVaNhanVien',
    //   path: '/loptinchi/:id',
    //   component: './LopTinChi/$id',
    // },
    // {
    //   hideInMenu: true,
    //   icon: 'team',
    //   exact: true,
    //   access: 'nhanVien',
    //   path: '/lophanhchinhgiangvien/:id',
    //   component: './LopHanhChinh/GiangVien/$id',
    // },
    {
      path: '/',
      redirect: '/user/login',
    },
    {
      component: '404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  // esbuild is father build tools
  // https://umijs.org/plugins/plugin-esbuild
  esbuild: {},
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  // Fast Refresh 热更新
  fastRefresh: {},

  nodeModulesTransform: {
    type: 'none',
  },
  // mfsu: {},
  webpack5: {},
  exportStatic: {},
});
