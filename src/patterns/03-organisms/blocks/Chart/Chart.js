import classNames from 'classnames';
import React from 'react';
import GoogleChart from 'react-google-charts';

const Chart = ({
  chartTitle,
  width,
  height,
  isExpanded,
  chartType,
  data,
  options,
  rootProps,
  ...props
}) => {
  return (
    <div className={classNames('')}>
      <GoogleChart
        width={width}
        height={height}
        chartType={chartType}
        loader="Chart is loading..."
        data={data}
        options={options}
        rootProps={rootProps}
        {...props}
      />
    </div>
  );
};

export default Chart;
