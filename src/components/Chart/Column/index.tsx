import { Column } from '@ant-design/charts';

const ColumnChart = (props: {
  data: { x: any; y: any }[];
  xLabel?: string;
  yLabel?: string;
  height?: number;
}) => {
  return (
    <Column
      height={props?.height ?? 300}
      forceFit
      data={props.data}
      xField="x"
      yField="y"
      color="#CC0D00"
      xAxis={{
        label: {
          autoHide: true,
          autoRotate: false,
          style: {
            fontSize: 12,
          },
        },
        visible: true,
        title: {
          visible: false,
        },
      }}
      yAxis={{
        label: {
          formatter: (name) => new Intl.NumberFormat('vi-VN').format(Number.parseInt(name)),
        },
        visible: true,
        title: {
          visible: false,
        },
      }}
      tooltip={{
        formatter: (...args) => ({
          name: props.xLabel,
          value: new Intl.NumberFormat('vi-VN').format(args[1]),
        }),
      }}
      title={{
        visible: true,
        text: props.xLabel ?? 'Số lượng',
        style: {
          fontSize: 14,
          fontFamily: "'Segoe UI', sans-serif",
        },
      }}
      meta={{
        y: {
          alias: props?.xLabel ?? 'Số lượng',
        },
      }}
    />
  );
};

export default ColumnChart;
