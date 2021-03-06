import classNames from 'classnames';
// import React, { useState } from 'react';
import React from 'react';
import Chart from '../03-organisms/blocks/Chart/Chart';
import InputSlider from '../03-organisms/components/InputSlider/InputSlider';
import Table from '../03-organisms/blocks/Table/Table';
import Card from '../03-organisms/blocks/Card/Card';
import InfoCardContainer from '../03-organisms/blocks/InfoCard/InfoCardContainer';
import CardHeading from '../02-molecules/CardHeading';
// import MarketsPlaceholder from '../01-atoms/images/placeholder-markets.png';
// import SliderPlaceholder from '../01-atoms/images/placeholder-slider.png';

const TopMarkets = ({ pathName }) => {
  return (
    <div className={classNames('col-span-3', 'lg:col-span-2')}>
      <Card pathName={pathName} cardPath="/markets" cols="2">
        <CardHeading
          cardPath="/markets"
          cardTitle="Top Markets"
          pathName={pathName}
          iconType="IconTopMarkets"
          cardSubtitle="Increased arrivals from key markets and increased visitor spending per market"
        />
        {pathName === '/markets' && (
          <>
            <div className={classNames('-mt-6')}>
              <span className={classNames('hed2')}>2020 Prime</span>{' '}
              <span className={classNames('hed3')}>(Oct-March)</span>
            </div>
            <div className={classNames('w-64', 'self-center','mt-2','xl:-mt-6')}>
              <InputSlider />
          </div>
          </>
        )}
        <div
          id="marketsChart"
          className={classNames(
            pathName === '/' ? 'w-full' : 'container',
            'm-auto'
          )}>
          {/* <img src={MarketsPlaceholder} alt="placeholder" /> */}
          <Chart
            chartType="GeoChart"
            data={[
              ['City', 'Total Spend', 'Arrivals'],
              ['Atlanta', 18688021, 102359],
              ['Dallas', 12693514, 53605],
              ['Chicago', 2571710, 9763],
              ['DC', 1860281, 6055],
              ['Nashville', 7455620, 33111],
              ['Detroit', 1539163, 6936],
              ['Minneapolis', 382824, 1717],
              ['Saint Louis', 4794885, 19638],
              ['Indianapolis', 1982138, 7998],
              ['Cincinnati', 3651065, 14541],
            ]}
            options={{
              width: '100%',
              height: 450,
              region: 'US',
              displayMode: 'markers',
              colorAxis: { colors: ['#77DBDB', '#48AAED'] },
              resolution: 'provinces',
              enableRegionInteractivity: true,
              magnifyingGlass: {
                enable: true,
                zoomFactor: 12,
              },
              // TODO: how do labels display on GeoCharts? below doesn't workk
              chart: {
                title:
                  pathName === '/markets'
                    ? 'Increased arrivals from key markets and increased visitor spending per market'
                    : '',
              },
            }}
            // Note: you will need to get a mapsApiKey for your project.
            // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
            mapsApiKey="YOUR_KEY_HERE"
            rootProps={{ 'data-testid': '1' }}
          />
        </div>
      </Card>
      {pathName === '/markets' && (
        <div className={classNames()} id="marketsExpanded">
          <InfoCardContainer
            cardGroups={[
              {
                title: 'Primary Markets',
                contents: [
                  { title: 'Atlanta', data: <Table title="Atlanta" /> },
                  { title: 'Dallas/Ft.Worth', data: <Table title="DFW" /> },
                  { title: 'Nashville', data: <Table title="Nashville" /> },
                  { title: 'Saint Louis', data: <Table title="Saint Louis" /> },
                ],
              },
              {
                title: 'Secondary Markets',
                contents: [
                  { title: 'Chicago', data: <Table title="Chicago" /> },
                  { title: 'Cincinnati', data: <Table title="Cincinnati" /> },
                  { title: 'Detroit', data: <Table title="Detroit" /> },
                  {
                    title: 'Indianapolis',
                    data: <Table title="Indianapolis" />,
                  },
                  {
                    title: 'Minneapolis/Saint Paul',
                    data: <Table title="Minneapolis/Saint Paul" />,
                  },
                  {
                    title: 'Washington, DC',
                    data: <Table title="Washington, DC" />,
                  },
                ],
              },
            ]}
          />
        </div>
      )}
    </div>
  );
};

export default TopMarkets;
