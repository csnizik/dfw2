import classNames from 'classnames';
import React from 'react';
import Icon from '../01-atoms/images/Icon/Icon';
import { NavLink } from 'react-router-dom';
import Card from '../03-organisms/blocks/Card/Card';
import VideoThumbnail from '../03-organisms/components/VideoThumbnail/VideoThumbnail';
import VideoPlayer from '../03-organisms/components/VideoPlayer/VideoPlayer'
import PosterOne from '../01-atoms/images/movie01.png';
import PosterTwo from '../01-atoms/images/movie02.png';

const demoMovie = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4";

const FamilySentiment = ({ pathName }) => {
  return (
    <div className={classNames('col-span-3', 'lg:col-span-1')}>
      <Card pathName={pathName} cardPath="/sentiment" transparent>
        <div
          className={classNames(
            'flex',
            'flex-col',
            'space-between',
            'space-y-5'
          )}>
          <div
            className={classNames(
              'flex',
              'self-start',
              'space-x-3',
              'justify-center',
              'items-center',
              pathName === '/' ? 'visible' : 'invisible'
            )}>
            <Icon size="small" color="Navy Sky" type="IconFamilySentiment" />
            <NavLink to="/sentiment">
              <h3 className={classNames('hed3', 'text-black')}>
                Family Sentiment
              </h3>
            </NavLink>
          </div>

          <div
            className={classNames(
              'bg-white',
              'rounded-lg',
              'flex',
              'flex-row',
              'pr-4',
              'items-center',
              'space-x-4',
              'shadow-card',
              pathName === '/sentiment' ? 'w-96' : ''
            )}>
            <div
              className={classNames(
                'w-48',
                'rounded-l-lg',
                'overflow-y-hidden'
              )}>
              <VideoThumbnail src={PosterOne} />
            </div>
            <h3
              className={classNames(
                'hed3',
                'w-48',
                'text-overflow: ellipsis',
                'leading-tight'
              )}>
              Mom Panel Product Test Image is great
            </h3>
          </div>
          <div
            className={classNames(
              'bg-white',
              'rounded-lg',
              'flex',
              'flex-row',
              'pr-4',
              'items-center',
              'space-x-4',
              'shadow-card',
              pathName === '/sentiment' ? 'w-96' : ''
            )}>
            <div
              className={classNames(
                'w-48',
                'rounded-l-lg',
                'overflow-y-hidden'
              )}>
              
              <VideoThumbnail src={PosterTwo} />
            </div>
            <h3
              className={classNames(
                'hed3',
                'w-48',
                'text-overflow: ellipsis',
                'leading-tight'
              )}>
              Atlanta Mom Feedback
            </h3>
          </div>
          <div className={classNames('')} id="sentimentExpanded"></div>
        </div>

      </Card>
    </div>
  );
};

export default FamilySentiment;
