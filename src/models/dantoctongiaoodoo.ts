import { getDanTocOdoo, getTonGiaoOdoo } from '@/services/DanTocTonGiaoOdoo/dantoctongiao';
import { useState } from 'react';

export default () => {
  const [danhSachDanToc, setDanhSachDanToc] = useState<DanTocTonGiaoOdoo.DanToc[]>([]);
  const [danhSachTonGiao, setDanhSachTonGiao] = useState<DanTocTonGiaoOdoo.TonGiao[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getAllDanToc = async () => {
    setLoading(true);
    const response = await getDanTocOdoo();
    setDanhSachDanToc(response?.data?.data ?? []);
    setLoading(false);
  };

  const getAllTonGiao = async () => {
    setLoading(true);
    const response = await getTonGiaoOdoo();
    setDanhSachTonGiao(response?.data?.data ?? []);
    setLoading(false);
  };

  return {
    getAllDanToc,
    getAllTonGiao,
    loading,
    setLoading,
    danhSachDanToc,
    setDanhSachDanToc,
    danhSachTonGiao,
    setDanhSachTonGiao,
  };
};
