import { getListCourse, getProfile, importExcelFile } from '@/services/NhapDiem/nhapdiem';
import { message } from 'antd';
import { useState } from 'react';
export interface Profile {
  hinh_thuc_dao_tao_id: number;
}
export interface Course {
  id: number;
  is_ky_chinh: boolean;
  ma_ky_nam_hoc: string;
  soThuTu: number;
  ten_ky_nam_hoc: string;
  thoi_gian_bat_dau: string;
  thoi_gian_ket_thuc: string;
  hinh_thuc_dao_tao_id: Record<string, any>[];
  nam_hoc_id: Record<string, any>[];
}
export interface DanhSachLoi {
  dong: number;
  loi: string;
}
export interface ValidateFileExcel {
  danhSachLoi: DanhSachLoi[];
  passed: boolean;
  result: DataResulFileExcel[];
}
export interface DataResulFileExcel {
  diem_attendance: number;
  diem_bai_tap: number;
  diem_cuoi_ky: string;
  diem_thi_nghiem: number;
  diem_tong_ket: string;
  diem_tong_ket_dang_chu: string;
  diem_trung_binh_kiem_tra_tren_lop: number;
  du_dau_diem: boolean;
  is_diem_tieng_anh: boolean;
  ma_sinh_vien: string;
  ten_sinh_vien: string;
  diem_doc: number;
  diem_nghe: number;
  diem_noi: number;
  diem_viet: number;
}
export default () => {
  const [profile, setProfile] = useState<Profile>();
  const [listCourses, setListCourses] = useState<Course[]>([]);
  const [condition, setCondition] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [visibleTable, setVisibleTable] = useState<boolean>(false);
  const [dataNeedValidate, setDataNeedValidate] = useState<ValidateFileExcel>({
    danhSachLoi: [],
    passed: false,
    result: [],
  });
  const getProfileData = async () => {
    setLoading(true);
    const response = await getProfile();
    setProfile(response?.data?.data ?? {});
    setLoading(false);
  };
  const getListCoursesData = async (idHinhThuc: number) => {
    setLoading(true);
    const response = await getListCourse(idHinhThuc);
    setListCourses(response?.data?.data ?? []);
    setLoading(false);
  };
  const validateExcelFileCheck = async (id: string, template: string, file: any) => {
    setLoading(true);
    const response = await importExcelFile(id, template, file);
    setDataNeedValidate(response?.data?.data ?? {});
    if (response && response?.data?.data) {
      if (response?.data?.data.passed === true) {
        message.success('File hợp lệ');
      } else {
        message.warning('Có 1 số trường không hợp lệ');
      }
    }
    setLoading(false);
  };
  const handlePublishFile = async (id: string, template: string, file: any) => {
    try {
      setLoading(true);
      const response = await importExcelFile(id, template, file);
      setDataNeedValidate(response?.data?.data ?? {});
      if (response && response?.data?.data) {
        if (response?.data?.data.passed === true) {
          message.success('Nhập điểm thành công!');
        } else {
          setVisibleTable(true);
          message.warning('Có 1 số trường không hợp lệ');
        }
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  return {
    profile,
    condition,
    setCondition,
    getProfileData,
    getListCoursesData,
    loading,
    listCourses,
    setLoading,
    validateExcelFileCheck,
    dataNeedValidate,
    handlePublishFile,
    visibleTable,
    setVisibleTable,
  };
};
