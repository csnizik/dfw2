import classNames from 'classnames';
import React from 'react';
import Chart from '../03-organisms/blocks/Chart/Chart';
import Card from '../03-organisms/blocks/Card/Card';
import CardHeading from '../02-molecules/CardHeading';
import ValuePlaceholder from '../01-atoms/images/placeholder-value.png';

const ValueGap = ({ pathName }) => {
  return (
    <div className={classNames('col-span-3', 'lg:col-span-1')}>
      <Card pathName={pathName} cardPath="/value">
        <CardHeading
          cardPath="/value"
          cardTitle="Value Gap"
          pathName={pathName}
          iconType="IconValueGap"
          cardSubtitle="Measures the dark green gap"
        />
        <div id="valueChart" className={classNames('w-full', 'm-auto')}>
          <img src={ValuePlaceholder} />
          {/* <Chart
            chartType="ComboChart"
            data={[
              [
                'Month',
                'FY 2019 Revenue',
                'FY 2019 Occupancy',
                'FY 2020 Occupancy',
              ],
              [new Date(2020, 0), 10, 60, 70],
              [new Date(2020, 1), 8, 50, 60],
              [new Date(2020, 2), 7, 45, 50],
              [new Date(2020, 3), 7.5, 55, 60],
              [new Date(2020, 4), 8, 75, 80],
              [new Date(2020, 5), 11, 60, 84],
              [new Date(2020, 6), 11, 30, 80],
              [new Date(2020, 7), 20, 55, 85],
              [new Date(2020, 8), 30, 80, 90],
              [new Date(2020, 9), 70, 83, 85],
              [new Date(2020, 10), 65, 70, 73],
              [new Date(2020, 11), 50, 72, 65],
            ]}
            formatters={{
              type: 'DateFormat',
              column: 0,
              options: {
                pattern: 'MMM yyyy',
              },
            }}
            options={{
              chartArea: {
                width: '50%',
              },
              title:
                pathName === '/value'
                  ? 'Measures decreased dark green gap'
                  : '',
              width: '100%',
              height: pathName === '/' ? '100%' : '500px',
              seriesType: 'bars',
              series: {
                1: { type: 'line' },
                2: { type: 'line' },
              },
              bar: { groupWidth: '100%' },
              legend: { position: pathName === '/value' ? 'right' : 'none' },
              colors: ['#48AAED', '#77DBDB', '#FCB3B1'],
              vAxes: {
                0: {
                  title: 'TDT Collections ($ millions)',
                  titleTextStyle: { bold: true, italic: false },
                  textPosition: 'none',
                  minorGridlines: {
                    color: '#fff',
                  },
                },
              },
              hAxes: {
                0: {
                  format: 'MMM',
                  gridlines: {
                    color: '#fff',
                  },
                },
              },
            }}
            rootProps={{ 'data-testid': '1' }}
          /> */}
        </div>
        <div className={classNames('')} id="valueExpanded"></div>
      </Card>
    </div>
  );
};

export default ValueGap;
