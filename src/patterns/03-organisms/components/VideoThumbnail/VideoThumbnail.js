import React from 'react';
import classNames from 'classnames';
import Icon from '../../../01-atoms/images/Icon/Icon'

const VideoThumbnail = (image) => {
  return (
    <div className={classNames('relative', 'overflow-hidden')}>
      <img className={classNames('video-thumb')} src={image.src} alt='Video thumbnail' />
      <div className={classNames('absolute bg-blue-dark video-thumb--overlay bg-blue-dark')}></div>
          <Icon size="l" color="white" type="Play" classes='absolute video-icon' />
    </div>
  );
};

export default VideoThumbnail;
