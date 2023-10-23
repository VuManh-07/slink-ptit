import { includes } from '@/utils/utils';
import { Select } from 'antd';
import { useEffect } from 'react';
import { useModel } from 'umi';

const FilterDonVi = (props: { style?: any }) => {
  const {
    danhSach: danhSachDonVi,
    record: recordDonVi,
    getAllDonViModel,
    setRecord,
  } = useModel('donvi');

  useEffect(() => {
    if (danhSachDonVi.length === 0) getAllDonViModel();
  }, []);

  return (
    <Select
      size="small"
      showSearch
      filterOption={(value, option) => includes(option?.label ?? '', value)}
      value={recordDonVi?.ma_don_vi}
      onChange={(val) => setRecord(danhSachDonVi.find((item) => item.ma_don_vi === val))}
      allowClear
      style={props.style}
      placeholder="Lọc theo đơn vị"
      options={danhSachDonVi.map((item) => ({
        value: item.ma_don_vi,
        label: `${item.ten_don_vi} (${item.ma_don_vi})`,
      }))}
    />
  );
};

export default FilterDonVi;
