import { Setting } from '@/utils/constants';
import { Tag } from 'antd';

const UrlTag = (props: { url: string[] | string }) => {
  if (typeof props.url === 'string') {
    return (
      <div>
        <a href={props.url} target="_blank" rel="noreferrer">
          <Tag style={{ marginTop: 8 }} color={Setting.primaryColor}>{`Xem tập tin ${1}`}</Tag>
        </a>
      </div>
    );
  } else {
    return (
      <div>
        {props?.url?.map((item, indexChungChi) => (
          <a key={item} href={item} target="_blank" rel="noreferrer">
            <Tag style={{ marginTop: 8 }} color={Setting.primaryColor}>{`Xem tập tin ${
              indexChungChi + 1
            }  `}</Tag>
          </a>
        ))}
      </div>
    );
  }
};

export default UrlTag;
