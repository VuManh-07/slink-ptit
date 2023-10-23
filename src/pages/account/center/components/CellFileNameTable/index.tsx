import { Setting } from '@/utils/constants';
import { Tag } from 'antd';

const CellFileNameTable = (props: { data: string[]; order?: boolean }) => {
  return (
    <div>
      {props.data.map((item, index) => (
        <a key={item} href={item} target="_blank" rel="noreferrer">
          <Tag color={Setting.primaryColor}>{`Xem tập tin ${props.order ? index + 1 : ''}  `}</Tag>
        </a>
      ))}
    </div>
  );
};

export default CellFileNameTable;
