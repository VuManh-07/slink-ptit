
import { useState } from 'react';
import { getRank } from '@/services/Ranking/ranking';

export default () => {
  const [danhSach, setDanhSach] = useState<IRanking.Record[]>([]);
  const [loaiBieuMau, setLoaiBieuMau] = useState<string | undefined>(undefined);
  const [record, setRecord] = useState<IRanking.Record>({} as IRanking.Record);
  const [loading, setLoading] = useState<boolean>(true);
  const [edit, setEdit] = useState<boolean>(false);
  const [visibleForm, setVisibleForm] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [condition, setCondition] = useState<any>();
  const [filterInfo, setFilterInfo] = useState<any>({});
  const getRankingModel = async () => {
    setLoading(true);
    const res = await getRank();
    if (res) {
      setDanhSach(res?.data?.data ?? []);
      setTotal(res?.data?.data?.length??0);
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
    getRankingModel,
  };
};
