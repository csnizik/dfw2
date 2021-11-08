import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import VideoThumbnail from '../../components/VideoThumbnail/VideoThumbnail';

const VideoBlock = ({ pathName, videoUrl, headline, poster }) => {
  return (
    <div
      className={classNames(
        'bg-white',
        'rounded-20px',
        'flex',
        'flex-row',
        'pr-0',
        'sm:pr-4',
        'items-start',
        'space-x-4',
          'shadow-card',
        'relative',
        pathName === '/sentiment' ? 'w-48 sm:w-96' : ''
      )}>
      <div
        className={classNames(
          'sm:w-48',
          'rounded-l-20px',
          'overflow-y-hidden'
        )}>
        <Link
          to={{
            pathname: '/sentiment',
            state: {
              videoUrl: videoUrl,
            },
          }}>
          <VideoThumbnail src={poster} />
        </Link>
      </div>
      <h3
        className={classNames(
          'hed3',
          'w-48',
            'leading-tight',
            'mt-3',
          'video-text'
        )}>
        {headline}
      </h3>
    </div>
  );
};

export default VideoBlock;
