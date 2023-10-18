import { message } from 'antd';
import { useState } from 'react';
import useInitService from './useInitService';

/**
 *
 * @param url path api
 * @param fieldNameCondtion condition | cond
 * @param setDanhSach useState setDanhSach
 * @param setRecord  useState setRecord
 * @param initCondition initConditionValue
 * @returns
 */
const useInitModel = (
  url: string,
  fieldNameCondtion: 'condition' | 'cond',
  setDanhSach?: any,
  setRecord?: any,
  initCondition?: any,
) => {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [loading, setLoading] = useState<boolean>(false);
  const [filterInfo, setFilterInfo] = useState<any>({});
  const [condition, setCondition] = useState<any>(initCondition || {});
  const [edit, setEdit] = useState<boolean>(false);
  const [visibleForm, setVisibleForm] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);

  const { getAllService, postService, putService, deleteService, getService, getByIdService } =
    useInitService(url);

  const getModel = async (
    paramCondition?: any,
    path?: string,
    paramPage?: number,
    paramLimit?: number,
    sort?: any,
  ) => {
    setLoading(true);
    const payload = {
      page: paramPage || page,
      limit: paramLimit || limit,
      sort,
    };
    payload[fieldNameCondtion] = { ...condition, ...paramCondition };
    const response = await getService(payload, path);
    if (page > 1 && response?.data?.data?.result?.length === 0) setPage(page - 1);
    else {
      if (setDanhSach) setDanhSach(response?.data?.data?.result ?? []);
      setTotal(response?.data?.data?.total ?? 0);
      setLoading(false);
    }
  };

  const getAllModel = async (isSetRecord?: boolean, sort?: any) => {
    setLoading(true);
    const response = await getAllService();
    const data: any[] = response?.data?.data ?? [];
    if (sort) data.sort(sort);
    setDanhSach(data);
    if (isSetRecord) setRecord(data?.[0]);
    setLoading(false);
  };

  const getByIdModel = async (id: string | number) => {
    if (!id) return;
    setLoading(true);
    const response = await getByIdService(id);
    if (setRecord) setRecord(response?.data?.data ?? null);
    setLoading(false);
    return response?.data?.data ?? null;
  };

  const postModel = async (payload: any, getData?: any) => {
    try {
      setLoading(true);
      await postService(payload);
      message.success('Thêm mới thành công');
      setLoading(false);
      if (getData) getData();
      else getModel();
      setVisibleForm(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const putModel = async (id: string | number, payload: any, getData?: any, notGet?: boolean) => {
    try {
      setLoading(true);
      await putService(id, payload);
      message.success('Lưu thành công');
      setLoading(false);
      if (getData) getData();
      else if (!notGet) getModel();
      setVisibleForm(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const deleteModel = async (id: string | number, getData?: any) => {
    try {
      setLoading(true);
      await deleteService(id);
      message.success('Xóa thành công');
      if (getData) getData();
      else getModel();
    } catch (err) {
      setLoading(false);
    }
  };

  return {
    getByIdModel,
    getModel,
    deleteModel,
    putModel,
    postModel,
    getAllModel,
    page,
    setPage,
    limit,
    setLimit,
    loading,
    setLoading,
    filterInfo,
    setFilterInfo,
    condition,
    setCondition,
    edit,
    setEdit,
    visibleForm,
    setVisibleForm,
    total,
    setTotal,
  };
};

export default useInitModel;
