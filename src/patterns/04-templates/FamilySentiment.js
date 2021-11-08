import classNames from 'classnames';
import React from 'react';
import Icon from '../01-atoms/images/Icon/Icon';
import { NavLink, useLocation } from 'react-router-dom';
import Card from '../03-organisms/blocks/Card/Card';
import VideoPlayer from '../03-organisms/components/VideoPlayer/VideoPlayer';
import VideoBlock from '../03-organisms/blocks/VideoBlock/VideoBlock';
import PosterOne from '../01-atoms/images/movie01.png';
import PosterTwo from '../01-atoms/images/movie02.png';
import PosterThree from '../01-atoms/images/movie03.png';
import PosterFour from '../01-atoms/images/movie04.png';
import PosterFive from '../01-atoms/images/movie05.png';
import PosterSix from '../01-atoms/images/movie06.png';
import PosterSeven from '../01-atoms/images/movie07.png';
import PosterEight from '../01-atoms/images/movie08.png';

const FamilySentiment = ({ pathName, props }) => {
  const location = useLocation();
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
          {pathName === '/sentiment' && location.state?.videoUrl && (
            <VideoPlayer url={location.state.videoUrl} />
          )}
          <div
            className={classNames(
              pathName === '/sentiment'
                ? 'grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 lg:gap-6 2xl:gap-8'
                : 'flex flex-col space-between space-y-5 video-grid'
            )}>
            <VideoBlock
              videoUrl="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              headline="Mom Panel Product Test Image is Great"
              poster={PosterOne}
            />
            <VideoBlock
              videoUrl="https://media.w3.org/2010/05/bunny/movie.mp4"
              headline="Atlanta Mom Feedback"
              poster={PosterTwo}
            />
            <VideoBlock
              videoUrl="https://media.w3.org/2020/08/ml-workshop/virtual-character-web-meeting.mp4"
              headline="Lorem Ipsum um Posuere"
              poster={PosterThree}
            />
            <VideoBlock
              videoUrl="https://media.w3.org/2020/08/ml-workshop/Jason_Mayes_TensorFlowJS_W3C.mp4"
              headline="Maecenas Eget Lectus vel Metus"
              poster={PosterFour}
            />
            <VideoBlock
              videoUrl="https://media.w3.org/2019/08/meig-2019-08-06.mp4"
              headline="Curabitur Ullamcorper Mattis"
              poster={PosterFive}
            />
            <VideoBlock
              videoUrl="https://media.w3.org/2017/01/webrtc-20170125.mp4"
              headline="Aliquam In Fermentum Nunc Vivamus"
              poster={PosterSix}
            />
            <VideoBlock
              videoUrl="https://media.w3.org/2020/08/ml-workshop/Chai_Chaoweeraprasit.mp4"
              headline="Et Risus et Neque"
              poster={PosterSeven}
            />
            <VideoBlock
              videoUrl="https://media.w3.org/2020/08/ml-workshop/onnxjs.mp4"
              headline="In Orci Felis, Consectetur Ut"
              poster={PosterEight}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FamilySentiment;
