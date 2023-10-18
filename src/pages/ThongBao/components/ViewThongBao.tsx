import { getNameFile } from '@/utils/utils';
import { Avatar, Card } from 'antd';
import moment from 'moment';

const ViewThongBao = (props: { record?: ThongBao.Record }) => {
  const { record } = props;
  return (
    <Card title="Chi tiết thông báo">
      <Card.Meta
        avatar={record?.imageUrl ? <Avatar src={record?.imageUrl} /> : false}
        title={<b>{record?.title}</b>}
        description={
          <div>
            {record?.senderName ?? ''} đã gửi vào lúc{' '}
            {moment(record?.createdAt).format('HH:mm DD/MM/YYYY')}
            <br />
            {record?.description}
          </div>
        }
      />
      <br />
      <div
        dangerouslySetInnerHTML={{ __html: record?.htmlContent || '' }}
        style={{ width: '100%', overflowX: 'auto' }}
      />
      {record?.urlFile?.length ? (
        <>
          File đính kèm:{' '}
          {record?.urlFile?.map((item) => (
            <div key={item}>
              <a href={item}>{getNameFile(item)}</a>
            </div>
          ))}
        </>
      ) : (
        <div />
      )}
    </Card>
  );
};

export default ViewThongBao;
