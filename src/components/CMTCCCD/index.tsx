/* eslint-disable react-hooks/exhaustive-deps */
import rules from '@/utils/rules';
import { Col, DatePicker, Form, Input, Row } from 'antd';
import type { FormInstance } from 'antd/es/form/Form';
import moment from 'moment';

type Props = {
  disabled?: boolean;
  form: FormInstance<any>;
  hideNgayCap?: boolean;
  hideNoiCap?: boolean;
  notRequiredNgayCap?: boolean;
  notRequiredNoiCap?: boolean;
  notRequiredSoCMTCCCD?: boolean;
  fields: {
    soCMTCCCD: string[];
    ngayCap: string[];
    noiCap: string[];
  };
  initialValue?: any;
};

const CMTCCCD = (props: Props) => {
  return (
    <Row gutter={[20, 0]}>
      <Col
        xs={24}
        md={props.hideNgayCap && props.hideNoiCap ? 12 : 24}
        lg={props.hideNgayCap && props.hideNoiCap ? 24 : 8}
      >
        <Form.Item
          initialValue={props?.initialValue?.soCmtCccd}
          name={props?.fields?.soCMTCCCD ?? []}
          rules={props.notRequiredSoCMTCCCD ? [...rules.CMND] : [...rules.required, ...rules.CMND]}
        >
          <Input placeholder="Nhập số CMT/CCCD" />
        </Form.Item>
      </Col>

      {!props.hideNgayCap && (
        <Col xs={24} md={12} lg={8}>
          <Form.Item
            initialValue={
              props?.initialValue?.ngayCap ? moment(props?.initialValue?.ngayCap) : undefined
            }
            name={props?.fields?.ngayCap ?? []}
            rules={props.notRequiredNgayCap ? [] : [...rules.required]}
          >
            <DatePicker
              style={{ width: '100%' }}
              format="DD/MM/YYYY"
              // showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
            />
          </Form.Item>
        </Col>
      )}
      {!props.hideNoiCap && (
        <Col xs={24} md={12} lg={8}>
          <Form.Item
            initialValue={props?.initialValue?.noiCap}
            name={props?.fields?.noiCap ?? []}
            rules={props?.notRequiredNoiCap ? [] : [...rules.required]}
          >
            <Input placeholder="Nơi cấp" />
          </Form.Item>
        </Col>
      )}
    </Row>
  );
};

export default CMTCCCD;
