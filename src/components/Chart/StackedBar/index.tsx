import { StackedBar } from '@ant-design/charts';

export interface IStackedBarData {
  type: string;
  value: number;
  name: string;
}

const StackedBarChart = (props: {
  data: IStackedBarData[];
  xLabel?: string;
  yLabel?: string;
  height?: number;
}) => {
  return (
    <StackedBar
      height={props?.height ?? 300}
      forceFit
      data={props.data}
      xField="value"
      yField="name"
      stackField="type"
      color={['#CC0D00', '#CCC']}
      xAxis={{
        label: {
          autoHide: true,
          autoRotate: false,
          style: {
            fontSize: 12,
          },
          formatter: (text) => new Intl.NumberFormat('vi-VN').format(Number.parseInt(text)),
        },
        visible: true,
        title: {
          visible: false,
        },
      }}
      yAxis={{
        visible: true,
        title: {
          visible: false,
        },
      }}
      tooltip={{
        formatter: (...args) => {
          return {
            name: args[2],
            value: new Intl.NumberFormat('vi-VN').format(args[0]),
          };
        },
      }}
      label={{
        position: 'middle',
        formatter: (text) => new Intl.NumberFormat('vi-VN').format(Number.parseInt(text)),
        layout: [
          {
            type: 'interval-adjust-position',
          },
          {
            type: 'interval-hide-overlap',
          },
          {
            type: 'adjust-color',
          },
        ],
      }}
      title={{
        visible: true,
        text: props.xLabel ?? 'Số lượng',
        style: {
          fontSize: 14,
          fontFamily: "'Segoe UI', sans-serif",
        },
      }}
    />
  );
};

export default StackedBarChart;
