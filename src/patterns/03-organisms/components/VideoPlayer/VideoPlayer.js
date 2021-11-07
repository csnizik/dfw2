import React from 'react';
import classNames from 'classnames';
import {
  Player,
  ControlBar,
  PlayToggle,
  LoadingSpinner,
  BigPlayButton,
  FullscreenToggle,
  VolumeMenuButton,
} from 'video-react';

import 'video-react/dist/video-react.css';

const VideoPlayer = (props) => {
    
  return (
    <Player>
      <source src={props.url} fluid/>
    </Player>
    
  );
};

export default VideoPlayer;
