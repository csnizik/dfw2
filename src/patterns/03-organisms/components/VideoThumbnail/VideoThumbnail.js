import React from 'react';
import classNames from 'classnames';
import Icon from '../../../01-atoms/images/Icon/Icon'

const VideoThumbnail = (image) => {
  return (
    <div className={classNames('relative')}>
          <img className={classNames('')} src={image.src} alt='Video thumbnail' />
          <Icon size="l" color="white" type="Play" classes='absolute inset-y-1/4 inset-x-1/3' />
    </div>
  );
};

export default VideoThumbnail;
