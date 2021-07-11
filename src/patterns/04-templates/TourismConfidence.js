import classNames from 'classnames';
import React from 'react';
import Chart from '../03-organisms/blocks/Chart/Chart';
import Card from '../03-organisms/blocks/Card/Card';
import CardHeading from '../02-molecules/CardHeading';

const TourismConfidence = ({ pathName }) => {
  // const [cardExpanded, setCardExpanded] = useState(false);
  return (
    <Card pathName={pathName} cardName="confidence" cols="1">
      <CardHeading
        cardPath="/confidence"
        cardTitle="Tourism Confidence"
        pathName={pathName}
        iconType="IconTourismConfidence"
        cardSubtitle="Measures local sentiment towards tourism"
      />
      <div
        id="confidenceChart"
        className={classNames(pathName === '/' ? 'w-full' : 'w-2/3', 'm-auto')}>
        <Chart
          chartType="PieChart"
          data={[
            ['Tourism Sentiment', 'Percent'],
            ['Against of tourists', 20],
            ['Accepting of tourists', 80],
          ]}
          formatters={{
            type: 'DateFormat',
            column: 0,
            options: {
              pattern: 'MMM yyyy',
            },
          }}
          options={{
            title:
              pathName === '/confidence'
                ? 'Measures local sentiment towards tourism'
                : '',
            width: '100%',
            height: pathName === '/' ? 330 : 400,
            pieHole: 0.5,
            pieSliceText: 'Percent',
            pieSliceTextStyle: {
              color: 'black',
            },
            legend: {
              position: pathName === '/confidence' ? 'bottom' : 'none',
            },
            colors: ['#48AAED', '#77DBDB', '#FCB3B1'],
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
      <div className={classNames('')} id="confidenceExpanded"></div>
    </Card>
  );
};

export default TourismConfidence;
