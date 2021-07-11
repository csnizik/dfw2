import React, { useState } from 'react';
import Card from '../03-organisms/blocks/Card/Card';
import { Link, NavLink } from 'react-router-dom';
import EditMenu from '../03-organisms/navigation/EditMenu/EditMenu';
import Chart from '../03-organisms/blocks/Chart/Chart';
import Icon from '../01-atoms/images/Icon/Icon';
import classNames from 'classnames';
import CardHeading from '../02-molecules/CardHeading';

const WaterAdventures = ({ pathName }) => {
  // const [cardExpanded, setCardExpanded] = useState(false);
  return (
    <Card pathName={pathName} cardName='water' cols='1'>
      <CardHeading cardPath="/water" cardTitle="Water Adventures" pathName={pathName} iconType="IconWaterAdventures" cardSubtitle="Increase in water-based family adventures taken" />
      <div id="waterChart" className={classNames(pathName=== '/' ? 'w-full' : 'w-2/3','m-auto')}>
        <Chart
          chartType="Bar"
          data={[
            ['Year', 'Total Water Adventures', { role: 'style' }],
            ['2019', 6.94, '#124168'],
            ['2020', 8.49, '#48AAED'],
            ['2021', 10.49, '#77DBDB'],
          ]}
          options={{
            colors: ['#48AAED', '#5F7772'],
            chart: {
              title:
                pathName === '/water'
                  ? 'Increase in water-based family adventures taken'
                  : '',
            },
            width: '85%',
            height: pathName === '/' ? '100%' : '500px',
            bar: { groupWidth: '100%' },
            legend: { position: pathName === '/water' ? 'right' : 'none' },
            hAxis: {
              title: pathName === '/water' ? '# of adventures' : ''
            }
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
      <div className={classNames()} id="waterExpanded"></div>
    </Card>
  );
};

export default WaterAdventures;
