import { Tooltip, Typography } from 'antd';

const Paragraph = (text: any, rows?: number, style?: object) => (
  <Tooltip title={text}>
    <Typography.Paragraph ellipsis={{ rows, expandable: false }} style={style}>
      {text}
    </Typography.Paragraph>
  </Tooltip>
);

export default Paragraph;
