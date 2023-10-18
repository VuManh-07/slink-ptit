
import { useState } from 'react';
import { getMember} from '@/services/Member/member';

export default () => {
  const [danhSach, setDanhSach] = useState<IMember.Record[]>([]);
  const [loaiBieuMau, setLoaiBieuMau] = useState<string | undefined>(undefined);
  const [record, setRecord] = useState<IMember.Record>({} as IMember.Record);
  const [loading, setLoading] = useState<boolean>(true);
  const [edit, setEdit] = useState<boolean>(false);
  const [visibleForm, setVisibleForm] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [condition, setCondition] = useState<any>();
  const [filterInfo, setFilterInfo] = useState<any>({});
  const getDataMemberModel = async () => {
    setLoading(true);
    const res = await getMember({ page, limit, condition });
    if (res) {
      setDanhSach(res?.data?.data?.result ?? []);
      setTotal(res?.data?.data?.total);
    }
    setLoading(false);
  };
  return {
    setRecord,
    edit,
    setEdit,
    visibleForm,
    setVisibleForm,
    setLoaiBieuMau,
    setPage,
    setLimit,
    danhSach,
    record,
    loading,
    total,
    page,
    loaiBieuMau,
    limit,
    condition,
    setCondition,
    filterInfo,
    setFilterInfo,
    confirm,
    setLoading,
    getDataMemberModel,
  };
};
