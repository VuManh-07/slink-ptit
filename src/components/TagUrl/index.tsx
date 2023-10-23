import { Setting } from '@/utils/constants';
import { Tag } from 'antd';

const TagUrl = (props: { data: string[] }) => {
  return (
    <div>
      {props?.data?.map((item, index) => (
        <Tag style={{ marginBottom: 4 }} key={item} color={Setting.primaryColor}>
          <a target="_blank" href={item} rel="noreferrer">
            Xem tập tin {props.data.length > 1 ? index + 1 : ''}
          </a>
        </Tag>
      ))}
    </div>
  );
};

export default TagUrl;
