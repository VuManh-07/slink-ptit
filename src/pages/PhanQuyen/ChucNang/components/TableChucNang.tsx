/* eslint-disable no-underscore-dangle */
import type { IColumn } from '@/utils/interfaces';
import { SaveOutlined } from '@ant-design/icons';
import { Button, Checkbox, Popconfirm, Table, Tooltip, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { useModel } from 'umi';

const TableChucNang = (props: {
  data: { tenChucNang: string; children: PhanQuyen.ChucNang[] }[];
}) => {
  const { danhSachNhomVaiTro, putPhanQuyenChucNangNhomVaiTroModel, loading } =
    useModel('phanquyen');
  const [dataPhanQuyen, setDataPhanQuyen] = useState<
    { idNhomVaiTro: string; idChucNang: string }[]
  >([]);
  let width = 350;
  const columns: IColumn<{ tenChucNang: string; children: PhanQuyen.ChucNang[] }>[] = [
    {
      title: 'Chức năng',
      width: 350,
      fixed: 'left',
      align: 'center',
      render: (record) => {
        return (
          <Tooltip
            color="white"
            title={record._id ? <Typography.Text copyable>{record._id}</Typography.Text> : ''}
          >
            <div style={{ textAlign: 'left' }}>{record?.tenChucNang || record?.ten}</div>
          </Tooltip>
        );
      },
    },
  ];

  const handleChangeCheckBox = (
    e: { target: { checked: boolean } },
    idNhomVaiTro: string,
    idChucNang: string,
  ) => {
    if (e.target.checked) {
      setDataPhanQuyen([...dataPhanQuyen, { idNhomVaiTro, idChucNang }]);
    } else {
      setDataPhanQuyen(
        dataPhanQuyen?.filter(
          (item) => !(item.idChucNang === idChucNang && item.idNhomVaiTro === idNhomVaiTro),
        ),
      );
    }
  };
  danhSachNhomVaiTro?.forEach((nhomvaitro: any) => {
    width += 150;
    columns.push({
      title: nhomvaitro._id,
      align: 'center',
      width: 150,
      render: (record) => (
        <div>
          {record?.ten && (
            <Checkbox
              onChange={(e) => {
                handleChangeCheckBox(e, nhomvaitro._id, record?._id);
              }}
              checked={
                !!dataPhanQuyen?.find(
                  (item) => item.idChucNang === record?._id && item.idNhomVaiTro === nhomvaitro._id,
                )
              }
            />
          )}
        </div>
      ),
    });
  });
  useEffect(() => {
    const dataTemp: { idNhomVaiTro: string; idChucNang: string }[] = [];
    danhSachNhomVaiTro?.forEach((nhomvaitro: any) => {
      nhomvaitro?.danhSachChucNang?.forEach((idChucNang: any) => {
        dataTemp.push({
          idNhomVaiTro: nhomvaitro._id,
          idChucNang,
        });
      });
    });
    setDataPhanQuyen(dataTemp);
  }, [danhSachNhomVaiTro]);

  return (
    <>
      <Popconfirm
        onConfirm={() => {
          putPhanQuyenChucNangNhomVaiTroModel(dataPhanQuyen);
        }}
        title="Bạn có chắc chắn muốn lưu ?"
      >
        <Button
          loading={loading}
          style={{ marginBottom: 8 }}
          icon={<SaveOutlined />}
          type="primary"
        >
          Lưu
        </Button>
      </Popconfirm>

      <Table
        loading={loading}
        scroll={{ x: width }}
        pagination={false}
        dataSource={props.data}
        columns={columns}
      />
    </>
  );
};

export default TableChucNang;
