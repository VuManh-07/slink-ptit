import {
  Card,
  Modal,
  Row,
  Col,
  Checkbox,
  Select,
  Button,
  Calendar as AntdCalendar,
  Popconfirm,
} from 'antd';
import moment from 'moment';
import mm from 'moment-timezone';
import { useEffect, useState } from 'react';
import type { DateRange } from 'react-big-calendar';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { history, useAccess, useModel } from 'umi';
import { PlusOutlined } from '@ant-design/icons';
import type { SuKien } from '@/services/sukien/typings';
import { ELoaiSuKien } from '@/utils/constants';
import FormLichCaNhan from './components/FormLichCaNhan';

mm.tz.setDefault('Asia/Ho_Chi_Minh');

const messages = {
  allDay: 'Cả ngày',
  previous: 'Trước',
  next: 'Sau',
  today: 'Hôm nay',
  month: 'Tháng',
  week: 'Tuần',
  day: 'Ngày',
  agenda: 'Chung',
  date: 'Ngày',
  time: 'Thời gian',
  event: 'Sự kiện',
  showMore: (total: number) => `+ Xem thêm (${total})`,
  noEventsInRange: 'Không có sự kiện nào trong khoảng thời gian này',
};

const Color = {
  [ELoaiSuKien.LICH_GIANG_DAY]: '#008080ca',
  [ELoaiSuKien.LICH_HOC]: '#008080ca',
  [ELoaiSuKien.LICH_THI]: '#cc0e00e5',
  [ELoaiSuKien.CA_NHAN]: '#1c3f10d5',
  [ELoaiSuKien.TAT_CA]: '#790c30e5',
};

export default (props: { type?: string }) => {
  const eventPropGetter = (event: { title: string; loaiSuKien?: string }) => ({
    style: { backgroundColor: Color?.[event?.loaiSuKien ?? ''] },
  });

  const isDashboard = props?.type === 'dashboard';
  const access = useAccess();

  const eventCustom = ({ event }: any) => {
    const { title, loaiSuKien } = event;
    return (
      <div style={{ width: '100%', fontSize: 13 }}>
        {access.nhanVien && loaiSuKien === 'Lịch học'
          ? 'Lịch dạy'
          : loaiSuKien === 'Tất cả'
          ? 'Chung'
          : `${loaiSuKien || ''}`}{' '}
        - {`${title || 'Chưa cập nhật'}`}{' '}
      </div>
    );
  };
  const localizer = momentLocalizer(moment);
  const {
    danhSach: danhSachSuKien,
    getSuKienSinhVienByNamModel,
    visibleForm,
    setVisibleForm,
    year,
    setYear,
    selectValue,
    setSelectValue,
    record,
    setRecord,
    deleteSuKienCaNhanModel,
    setEdit,
  } = useModel('sukien');
  const [date, setDate] = useState(new Date());
  const [visibleDetail, setVisibleDetail] = useState<boolean>(false);

  useEffect(() => {
    // if (access.sinhVien) {
    setSelectValue([
      ELoaiSuKien.LICH_HOC,
      ELoaiSuKien.LICH_THI,
      ELoaiSuKien.CA_NHAN,
      ELoaiSuKien.TAT_CA,
    ]);
    // } else {
    //   setSelectValue([
    //     ELoaiSuKien.LICH_GIANG_DAY,
    //     ELoaiSuKien.LICH_THI,
    //     ELoaiSuKien.CA_NHAN,
    //     ELoaiSuKien.TAT_CA,
    //   ]);
    // }
  }, []);

  useEffect(() => {
    getSuKienSinhVienByNamModel({
      year: Number(moment(date).format('YYYY')),
      selectValue,
    });
  }, [selectValue, year]);

  const dataCalendar: { title: string; [x: string]: unknown }[] | undefined = [];
  danhSachSuKien?.forEach((x: SuKien.Record) =>
    dataCalendar.push({
      ...x,
      title: x?.tenSuKien ?? '',
      start: moment(x?.thoiGianBatDau).toDate(),
      end: moment(x?.thoiGianKetThuc).toDate(),
    }),
  );

  const changeLoaiSuKien = (checkedValue: any) => {
    setSelectValue(checkedValue as string[]);
  };

  const pickDate = (val: moment.Moment) => {
    setDate(val.toDate());
    setYear(moment(val).year());
  };

  const handleSelect = (event?: any) => {
    if (isDashboard) return;
    setRecord({
      thoiGianBatDau: event?.start?.toISOString(),
      thoiGianKetThuc: event?.end?.toISOString(),
    } as SuKien.Record);
    setVisibleForm(true);
  };

  return (
    <Card title={access.sinhVien ? 'Thời khóa biểu' : 'Lịch công tác'} bordered>
      <Row gutter={[12, 12]}>
        <Col
          span={24}
          sm={10}
          md={isDashboard ? 0 : 8}
          lg={isDashboard ? 0 : 6}
          style={isDashboard ? { display: 'none' } : { display: 'block' }}
        >
          <Button
            type="primary"
            block
            onClick={() => {
              setVisibleForm(true);
            }}
          >
            <PlusOutlined /> Thêm lịch cá nhân
          </Button>
          <AntdCalendar
            headerRender={({ value, onChange }) => {
              const start = 0;
              const end = 12;
              const monthOptions = [];

              const current = value.clone();
              const yearDate = value.clone();
              yearDate.add(20, 'days');
              const localeData = value.localeData();
              const months = [];
              for (let i = 0; i < 12; i++) {
                current.month(i);
                months.push(localeData.monthsShort(current));
              }

              for (let index = start; index < end; index++) {
                monthOptions.push(
                  <Select.Option className="month-item" key={`${index}`}>
                    {months[index]}
                  </Select.Option>,
                );
              }
              const month = value.month();

              const year1 = yearDate.year();
              const options = [];
              for (let i = 2020; i <= moment().year() + 1; i += 1) {
                options.push(
                  <Select.Option key={i} value={i} className="year-item">
                    {i}
                  </Select.Option>,
                );
              }
              return (
                <div style={{ marginTop: 8, marginBottom: 8 }}>
                  <Row gutter={8}>
                    <Col span={12}>
                      <Select
                        style={{ width: '100%' }}
                        size="small"
                        dropdownMatchSelectWidth={false}
                        // className="my-year-select"
                        onChange={(newYear: any) => {
                          const now = value.clone().year(newYear);
                          onChange(now);
                        }}
                        value={String(year1)}
                      >
                        {options}
                      </Select>
                    </Col>
                    <Col span={12}>
                      <Select
                        style={{ width: '100%' }}
                        size="small"
                        dropdownMatchSelectWidth={false}
                        value={String(month)}
                        onChange={(selectedMonth) => {
                          const newValue = value.clone();
                          newValue.month(parseInt(selectedMonth, 10));
                          onChange(newValue);
                        }}
                      >
                        {monthOptions}
                      </Select>
                    </Col>
                  </Row>
                </div>
              );
            }}
            onChange={(val: any) => pickDate(val)}
            fullscreen={false}
            mode={'month'}
            value={moment(date)}
          />

          <Checkbox.Group
            value={selectValue}
            onChange={changeLoaiSuKien}
            style={{ fontSize: '20px', fontWeight: 500 }}
          >
            <Row>
              <Checkbox value={ELoaiSuKien.LICH_HOC}>
                <p
                  style={{
                    backgroundColor: Color[ELoaiSuKien.LICH_HOC],
                    color: 'white',
                    padding: '2px 6px',
                    borderRadius: 5,
                  }}
                >
                  {access.sinhVien ? ELoaiSuKien.LICH_HOC : ELoaiSuKien.LICH_GIANG_DAY}
                </p>
              </Checkbox>
            </Row>
            <Row>
              <Checkbox value={ELoaiSuKien.LICH_THI}>
                <p
                  style={{
                    backgroundColor: Color[ELoaiSuKien.LICH_THI],
                    color: 'white',
                    padding: '2px 6px',
                    borderRadius: 5,
                  }}
                >
                  {access.sinhVien ? ELoaiSuKien.LICH_THI : 'Lịch coi thi'}
                </p>
              </Checkbox>
            </Row>
            <Row>
              <Checkbox value={ELoaiSuKien.CA_NHAN}>
                <p
                  style={{
                    backgroundColor: Color[ELoaiSuKien.CA_NHAN],
                    color: 'white',
                    padding: '2px 6px',
                    borderRadius: 5,
                  }}
                >
                  Sự kiện cá nhân
                </p>
              </Checkbox>
            </Row>
            <Row>
              <Checkbox value={ELoaiSuKien.TAT_CA}>
                <p
                  style={{
                    backgroundColor: Color[ELoaiSuKien.TAT_CA],
                    color: 'white',
                    padding: '2px 6px',
                    borderRadius: 5,
                  }}
                >
                  Sự kiện chung
                </p>
              </Checkbox>
            </Row>
          </Checkbox.Group>
        </Col>
        <Col span={24} sm={14} md={isDashboard ? 24 : 16} lg={isDashboard ? 24 : 18}>
          <Calendar
            formats={{
              dayHeaderFormat: 'dddd DD/MM/YYYY',
              dayRangeHeaderFormat: (range: DateRange) => {
                return `${moment(range.start).format('DD/MM/YYYY')} - ${moment(range.end).format(
                  'DD/MM/YYYY',
                )}`;
              },
            }}
            localizer={localizer}
            events={dataCalendar}
            defaultView={Views.WEEK}
            onNavigate={(newDate: Date) => {
              setDate(newDate);
              setYear(moment(newDate).year());
            }}
            selectable
            scrollToTime={new Date(1970, 1, 1)}
            defaultDate={new Date()}
            date={date}
            messages={messages}
            views={['month', 'week', 'day']}
            style={{ height: isDashboard ? 592 : 700 }}
            min={moment('0700', 'HHmm').toDate()}
            max={moment('2200', 'HHmm').toDate()}
            eventPropGetter={eventPropGetter}
            onSelectSlot={handleSelect}
            onSelectEvent={(rec: any) => {
              setRecord(rec);
              setVisibleDetail(true);
            }}
            components={{
              event: (event: any) => eventCustom(event),
            }}
            popup
          />
        </Col>
      </Row>

      <Modal
        visible={visibleForm}
        bodyStyle={{ padding: 0 }}
        width="500px"
        destroyOnClose
        onCancel={() => {
          setVisibleForm(false);
          setRecord({} as SuKien.Record);
          setEdit(false);
        }}
        footer={null}
        maskClosable
      >
        <FormLichCaNhan />
      </Modal>
      <Modal
        visible={visibleDetail}
        width="500px"
        title="Chi tiết"
        destroyOnClose
        onCancel={() => setVisibleDetail(false)}
        footer={
          record?.loaiSuKien === ELoaiSuKien.CA_NHAN
            ? [
                <Button key="1" type="primary" onClick={() => setVisibleDetail(false)}>
                  Đóng
                </Button>,
                <Button
                  key="2"
                  onClick={() => {
                    setEdit(true);
                    setVisibleForm(true);
                    setVisibleDetail(false);
                  }}
                  style={{ marginLeft: '8px' }}
                >
                  Chỉnh sửa
                </Button>,
                <Popconfirm
                  key="3"
                  title="Bạn có chắc chắn muốn xóa sự kiện này không?"
                  onConfirm={() => {
                    deleteSuKienCaNhanModel(record?._id ?? '');
                    setVisibleDetail(false);
                  }}
                >
                  <Button key="3" type="primary">
                    Xóa sự kiện
                  </Button>
                </Popconfirm>,
              ]
            : [
                <Button
                  key="1"
                  onClick={() => setVisibleDetail(false)}
                  style={{ marginLeft: '8px' }}
                >
                  Đóng
                </Button>,
              ]
        }
        maskClosable
      >
        <div>
          <p>
            Tên sự kiện: <b>{record?.tenSuKien || 'Chưa cập nhật'}</b>
          </p>
          <p>
            Loại sự kiện:{' '}
            <b>
              {access.nhanVien && record?.loaiSuKien === ELoaiSuKien.LICH_HOC
                ? 'Lịch dạy'
                : `${record?.loaiSuKien || 'Chưa cập nhật'}`}
            </b>
          </p>
          {!['Cá nhân'].includes(record?.loaiSuKien ?? '') ? (
            <>
              <p>
                Tên học phần: <b>{record?.info?.ten_hoc_phan || 'Chưa cập nhật'}</b>
              </p>
              <p>
                Mã học phần: <b>{record?.info?.hoc_phan_id?.[1] || 'Chưa cập nhật'}</b>
              </p>
              <p>
                Link phòng học zoom:{' '}
                {record?.info?.link_zoom ? (
                  <a target="_blank" href={record?.info?.link_zoom} rel="noreferrer">
                    Link
                  </a>
                ) : (
                  <b>Chưa cập nhật</b>
                )}
              </p>
              {access.sinhVien && (
                <>
                  <p>
                    ID phòng học Zoom: <b>{record?.info?.id_zoom || 'Chưa cập nhật'}</b>
                  </p>
                  <p>
                    Mật khẩu phòng học Zoom: <b>{record?.info?.mat_khau_1 || 'Chưa cập nhật'}</b>
                  </p>
                </>
              )}
              {access.nhanVien && (
                <>
                  <p>
                    Tên đăng nhập Zoom: <b>{record?.info?.tai_khoan || 'Chưa cập nhật'}</b>
                  </p>
                  <p>
                    Mật khẩu Zoom: <b>{record?.info?.mat_khau || 'Chưa cập nhật'}</b>
                  </p>
                </>
              )}
            </>
          ) : (
            <>
              <p>
                Địa điểm: <b>{record?.diaDiem || 'Chưa cập nhật'}</b>
              </p>
              <p>
                Ghi chú: <b>{record?.ghiChu || 'Chưa cập nhật'}</b>
              </p>
            </>
          )}
          <p>
            Thời gian bắt đầu:{' '}
            <b>
              {' '}
              {record?.thoiGianBatDau
                ? moment(record?.thoiGianBatDau).format('HH:mm DD/MM/YYYY')
                : 'Chưa cập nhật'}
            </b>
          </p>
          <p>
            Thời gian kết thúc:{' '}
            <b>
              {' '}
              {record?.thoiGianKetThuc
                ? moment(record?.thoiGianKetThuc).format('HH:mm DD/MM/YYYY')
                : 'Chưa cập nhật'}
            </b>
          </p>

          {record?.loaiSuKien === ELoaiSuKien.LICH_HOC && (
            <>
              {access.sinhVien && (
                <>
                  <p>Giảng viên: {record?.info?.ten_giang_vien ?? ' Chưa cập nhật'}</p>
                  <p>Email: {record?.info?.email || 'Chưa cập nhật'}</p>
                  <p>Số điện thoại: {record?.info?.dien_thoai || 'Chưa cập nhật'}</p>
                </>
              )}
              <Button
                type="link"
                onClick={() => {
                  history.push(`/loptinchi/${record?.info?.lop_tin_chi_id?.[0]}`);
                }}
              >
                Chi tiết lớp học
              </Button>
            </>
          )}
          {record?.loaiSuKien === ELoaiSuKien.LICH_THI && (
            <>
              <p>Hình thức thi: {record?.info?.hinh_thuc ?? ' Chưa cập nhật'}</p>
              <p>Cán bộ coi thi: {record?.info?.can_bo_coi_thi || 'Chưa cập nhật'}</p>
              <p>Ghi chú: {record?.info?.ghi_chu || 'Chưa cập nhật'}</p>
            </>
          )}
        </div>
      </Modal>
    </Card>
  );
};
