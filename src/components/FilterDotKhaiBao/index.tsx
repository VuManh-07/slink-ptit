import { Select } from 'antd';
import { useEffect } from 'react';
import { useModel } from 'umi';

const FilterDotKhaiBao = () => {
  const {
    danhSach,
    getAllModel,
    record: recordDotKhaiBao,
    setRecord: setRecordDotKhaiBao,
  } = useModel('dotkhaibaokhcn');

  const { setPage, setLimit } = useModel('khaibaonckh');

  const { setPage: setPageRequest, setLimit: setLimitRequest } = useModel('requestthanhvien');

  useEffect(() => {
    if (danhSach.length === 0) getAllModel(true);
  }, []);

  return (
    <Select
      size="small"
      allowClear
      placeholder="Lọc theo đợt khai báo"
      options={danhSach?.map((item) => ({ label: item.tenDotKhaiBao, value: item._id }))}
      value={recordDotKhaiBao?._id}
      onChange={(val) => {
        setRecordDotKhaiBao(danhSach.find((item) => item._id === val));
        setPage(1);
        setLimit(10);
        setPageRequest(1);
        setLimitRequest(10);
      }}
      style={{ width: 250, marginRight: 8 }}
    />
  );
};

export default FilterDotKhaiBao;
