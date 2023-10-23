import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Input, Table, Drawer, Modal } from 'antd';
import React, { useEffect, useState, useRef } from 'react';
import Highlighter from 'react-highlight-words';

const TableBaseStatic = (props) => {
  const [searchText, setSeachText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [visible, setVisible] = useState(false);
  const { Form, showEdit, setShowEdit } = props;

  useEffect(() => {
    if (showEdit !== undefined) setVisible(showEdit);
  }, [showEdit]);

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder="Nhập từ khóa"
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Tìm
          </Button>
          <Button
            onClick={() => {
              handleReset(clearFilters);
              handleSearch(selectedKeys, confirm, dataIndex);
              setSeachText('');
            }}
            size="small"
            style={{ width: 90 }}
          >
            Xóa
          </Button>
        </div>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#CC0D00' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: (visible) => {},
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSeachText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSeachText('');
    setSearchedColumn('');
  };

  return (
    <>
      {props?.children}
      {props?.hascreate && (
        <Button
          onClick={() => {
            setVisible(true);
          }}
          icon={<PlusOutlined />}
          type="primary"
          style={{ marginBottom: 8 }}
          size={props?.createSmall ? 'small' : 'middle'}
        >
          Thêm mới
        </Button>
      )}
      {props.hasTotal && (
        <h4 style={{ display: 'inline-block', margin: '0 0px 8px 50px', float: 'right' }}>
          Tổng số:
          <Input
            style={{ width: '90px', fontWeight: 600, fontSize: 14, marginLeft: 10 }}
            value={props?.data?.length ?? 0}
            readOnly
            // ref={setTableBaseRef}
          />
        </h4>
      )}
      <Table
        rowKey={(rec) => rec['id']}
        {...props?.otherProps}
        title={props?.title ? () => props.title : false}
        columns={props.columns
          ?.filter((item) => !item.hide)
          ?.map((item) => {
            return item?.search === 'search'
              ? {
                  ...item,
                  ...getColumnSearchProps(item.dataIndex),
                }
              : { ...item };
          })}
        dataSource={props?.data ?? []}
      />
      {Form && (
        <>
          {props?.formType === 'Drawer' ? (
            <Drawer
              width={props?.widthDrawer}
              onClose={() => {
                setVisible(false);
                setShowEdit && setShowEdit();
              }}
              destroyOnClose
              footer={false}
              // bodyStyle={{ padding: 0 }}
              visible={visible}
            >
              <Form
                onCancel={() => {
                  setVisible(false);
                  setShowEdit && setShowEdit();
                }}
              />
            </Drawer>
          ) : (
            <Modal
              width={props?.widthDrawer}
              onCancel={() => {
                setVisible(false);
                setShowEdit && setShowEdit();
              }}
              destroyOnClose
              footer={false}
              bodyStyle={{ padding: 0 }}
              visible={visible}
            >
              <Form
                onCancel={() => {
                  setVisible(false);
                  setShowEdit && setShowEdit();
                }}
              />
            </Modal>
          )}
        </>
      )}
    </>
  );
};

export default TableBaseStatic;
