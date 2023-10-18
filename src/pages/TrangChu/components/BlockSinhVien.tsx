import { useModel } from 'umi';
import { thongKeKetQuaHocTap } from '@/services/Dashboard/dashboard';
import { thongKeDon } from '@/services/DichVuMotCuaV2/dichvumotcuav2';
import type { LopTinChi } from '@/services/LopTinChi/typings';
import { ArrowUpOutlined } from '@ant-design/icons';
import { Badge, Card, Col, Progress, Statistic } from 'antd';
import { useEffect, useState } from 'react';

const BlockSinhVien = () => {
  const [dataThongKe, setDataThongKe] =
    useState<{ tong: number; daDuyet: number; khongDuyet: number }>();
  const [recordDiemTongKet, setRecordDiemTongKet] = useState<LopTinChi.DiemTongKet>();
  const { sinhVienGetDiemTongKetModel } = useModel('loptinchi');
  const [ketQuaHocTap, setKetQuaHocTap] = useState<{
    gpaKyGanNhat: number;
    tongSoTinChiTichLuy: 0;
    tongSoTinChiPhaiDat: 0;
  }>({ gpaKyGanNhat: 0, tongSoTinChiTichLuy: 0, tongSoTinChiPhaiDat: 0 });

  const getThongKeDon = async () => {
    const res = await thongKeDon();
    setDataThongKe(res?.data?.data ?? {});
  };

  const getThongKeKetQuaHocTap = async () => {
    const res = await thongKeKetQuaHocTap();
    setKetQuaHocTap(res?.data?.data);
  };

  const getGPAKyGanNhat = async () => {
    const response: LopTinChi.DiemTongKet[] = await sinhVienGetDiemTongKetModel();
    for (let i = response.length - 1; i >= 0; i--) {
      if (response[i]?.diem_tb_tich_luy_hoc_ky_thang_4) {
        setRecordDiemTongKet(response[i]);
        break;
      }
    }
  };

  useEffect(() => {
    getThongKeDon();
    getThongKeKetQuaHocTap();
    getGPAKyGanNhat();
  }, []);

  return (
    <>
      <Col xs={24} md={12} xl={6}>
        <Card>
          <Statistic
            title={<div style={{ fontSize: 16 }}>GPA</div>}
            value={recordDiemTongKet?.diem_tb_tich_luy_hoc_ky_thang_4 ?? 0}
          />
          <br />
          <div>
            <ArrowUpOutlined /> Kỳ gần nhất
          </div>
        </Card>
      </Col>
      <Col xs={24} md={12} xl={6}>
        <Card>
          <Statistic
            title={<div style={{ fontSize: 16 }}>Tổng số tín chỉ tích lũy</div>}
            value={`${recordDiemTongKet?.tong_so_tin_chi_tich_luy_sau_hoc_ky ?? 0}/${
              ketQuaHocTap?.tongSoTinChiPhaiDat ?? 0
            }`}
          />
          <br />
          <Progress
            percent={
              ketQuaHocTap?.tongSoTinChiPhaiDat > 0 &&
              recordDiemTongKet?.tong_so_tin_chi_tich_luy_sau_hoc_ky
                ? +(
                    (recordDiemTongKet?.tong_so_tin_chi_tich_luy_sau_hoc_ky /
                      ketQuaHocTap.tongSoTinChiPhaiDat) *
                    100
                  ).toFixed(0)
                : 0
            }
            size="small"
          />
        </Card>
      </Col>
      <Col xs={24} md={12} xl={6}>
        <Card>
          <Statistic
            title={<div style={{ fontSize: 16 }}>Xếp hạng sinh viên</div>}
            value={'Đang cập nhật'}
          />
          <br />
          <div>...</div>
        </Card>
      </Col>
      <Col xs={24} md={12} xl={6}>
        <Card>
          <Statistic
            title={<div style={{ fontSize: 16 }}>Dịch vụ sử dụng</div>}
            value={`${dataThongKe?.tong ?? 0}`}
          />
          <Badge color="green" text={`Đã duyệt: ${dataThongKe?.daDuyet ?? 0}`} />
          <br />
          <Badge color="red" text={`Không duyệt: ${dataThongKe?.khongDuyet ?? 0}`} />
        </Card>
      </Col>
    </>
  );
};

export default BlockSinhVien;
