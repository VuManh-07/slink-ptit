import rules from '@/utils/rules';
import { Card, Form, Button, DatePicker, Row, Col, Input, message } from 'antd';
import { useModel } from 'umi';
import moment from 'moment';
import { useState } from 'react';

const FormLichCaNhan = () => {
  const [form] = Form.useForm();
  const {
    record,
    setRecord,
    loading,
    edit,
    setEdit,
    setVisibleForm,
    postSuKienCaNhanModel,
    putSuKienCaNhanModel,
  } = useModel('sukien');
  const [dateStart, setDateStart] = useState<Date>();

  return (
    <Card title={edit ? 'Chỉnh sửa sự kiện cá nhân' : 'Thêm mới sự kiện cá nhân'}>
      <Form
        form={form}
        layout="vertical"
        onFinish={async (values) => {
          if (
            Number(moment(values.thoiGianKetThuc).diff(moment(values.thoiGianBatDau), 'minutes')) <=
            0
          ) {
            message.info('Thời gian kết thúc phải sau thời gian bắt đầu!');
            return;
          }
          const valuesFinal = { ...values, loaiSuKien: 'Cá nhân' };
          if (!edit) {
            postSuKienCaNhanModel(valuesFinal);
          } else {
            putSuKienCaNhanModel(record?._id ?? '', valuesFinal);
            setEdit(false);
          }
          setRecord({});
          form.resetFields();
        }}
      >
        <Form.Item
          rules={[...rules.required, ...rules.text, ...rules.length(300)]}
          initialValue={record?.tenSuKien}
          name="tenSuKien"
          label="Tên sự kiện"
        >
          <Input placeholder="Tên sự kiện" />
        </Form.Item>

        <Row gutter={[12, 12]}>
          <Col xs={24} md={24} lg={12} xl={12}>
            <Form.Item
              initialValue={record?.thoiGianBatDau ? moment(record?.thoiGianBatDau) : undefined}
              rules={[...rules.required]}
              name="thoiGianBatDau"
              label="Thời gian bắt đầu"
            >
              <DatePicker
                style={{ width: '100%' }}
                showTime
                format="HH:mm DD/MM/YYYY"
                onChange={(e: any) => {
                  setDateStart(e);
                  form.setFieldsValue({ thoiGianKetThuc: undefined });
                }}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={12} xl={12}>
            <Form.Item
              initialValue={record?.thoiGianKetThuc ? moment(record?.thoiGianKetThuc) : undefined}
              rules={[...rules.required]}
              name="thoiGianKetThuc"
              label="Thời gian kết thúc"
            >
              <DatePicker
                style={{ width: '100%' }}
                showTime
                format="HH:mm DD/MM/YYYY"
                disabledDate={(cur) => moment(cur).isBefore(dateStart)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          rules={[...rules.text, ...rules.length(200)]}
          initialValue={record?.diaDiem}
          name="diaDiem"
          label="Địa điểm"
        >
          <Input placeholder="Địa điểm" />
        </Form.Item>

        <Form.Item
          rules={[...rules.text, ...rules.length(1000)]}
          initialValue={record?.ghiChu}
          name="ghiChu"
          label="Ghi chú"
        >
          <Input.TextArea placeholder="Ghi chú" rows={3} />
        </Form.Item>
        <Form.Item style={{ textAlign: 'center', marginBottom: 0 }}>
          <Button loading={loading} style={{ marginRight: 8 }} htmlType="submit" type="primary">
            {edit ? 'Lưu' : 'Thêm mới'}
          </Button>
          <Button
            onClick={() => {
              setEdit(false);
              setVisibleForm(false);
            }}
          >
            Đóng
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default FormLichCaNhan;
