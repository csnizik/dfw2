import React from 'react';
import classNames from 'classnames';
import {
  Player
} from 'video-react';

import 'video-react/dist/video-react.css';
import './VideoPlayer.css';

const VideoPlayer = (props) => {
  return (
      <Player src={props.url} fluid preload="auto" autoPlay={true} className={classNames(props.className)}/>
  );
};

export default VideoPlayer;
