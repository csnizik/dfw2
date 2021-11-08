import classNames from 'classnames';
import React from 'react';
import Icon from '../01-atoms/images/Icon/Icon';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Card from '../03-organisms/blocks/Card/Card';
import VideoThumbnail from '../03-organisms/components/VideoThumbnail/VideoThumbnail';
import VideoPlayer from '../03-organisms/components/VideoPlayer/VideoPlayer';
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
                ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3 gap-4'
                : 'flex flex-col space-between space-y-5 video-grid'
            )}>
            <div
              className={classNames(
                'bg-white',
                'rounded-lg',
                'flex',
                'flex-row',
                'pr-0',
                'sm:pr-4',
                'items-center',
                'space-x-4',
                'shadow-card',
                pathName === '/sentiment' ? 'w-48 sm:w-96' : ''
              )}>
              <div
                className={classNames(
                  'sm:w-48',
                  'rounded-l-lg',
                  'overflow-y-hidden'
                )}>
                <Link
                  to={{
                    pathname: '/sentiment',
                    state: {
                      videoUrl:
                        'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
                    },
                  }}>
                  <VideoThumbnail src={PosterOne} />
                </Link>
                <div
                  className={classNames(
                    'text-overflow: ellipsis',
                    'leading-tight',
                    'text-center',
                    'my-2',
                    'block',
                    'sm:hidden',
                  )}>
                  Mom Panel Product Test Image is Great
                </div>
              </div>
              <h3
                className={classNames(
                  'hed3',
                  'w-48',
                  'text-overflow: ellipsis',
                  'leading-tight',
                  'hidden',
                  'sm:block'
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
                'pr-0',
                'sm:pr-4',
                'items-center',
                'space-x-4',
                'shadow-card',
                pathName === '/sentiment' ? 'w-48 sm:w-96' : ''
              )}>
              <div
                className={classNames(
                  'sm:w-48',
                  'rounded-l-lg',
                  'overflow-y-hidden'
                )}>
                <Link
                  to={{
                    pathname: '/sentiment',
                    state: {
                      videoUrl: 'https://media.w3.org/2010/05/bunny/movie.mp4',
                    },
                  }}>
                  <VideoThumbnail src={PosterTwo} />
                </Link>
                <div
                  className={classNames(
                    'text-overflow: ellipsis',
                    'leading-tight',
                    'text-center',
                    'my-2',
                    'block',
                    'sm:hidden',
                  )}>
                  Atlanta Mom Feedback
                </div>
              </div>
              <h3
                className={classNames(
                  'hed3',
                  'w-48',
                  'text-overflow: ellipsis',
                  'leading-tight',
                  'hidden',
                  'sm:block'
                )}>
                Atlanta Mom Feedback
              </h3>
            </div>
            <div
              className={classNames(
                'bg-white',
                'rounded-lg',
                'flex',
                'flex-row',
                'pr-0',
                'sm:pr-4',
                'items-center',
                'space-x-4',
                'shadow-card',
                pathName === '/sentiment' ? 'w-48 sm:w-96' : ''
              )}>
              <div
                className={classNames(
                  'sm:w-48',
                  'rounded-l-lg',
                  'overflow-y-hidden'
                )}>
                <Link
                  to={{
                    pathname: '/sentiment',
                    state: {
                      videoUrl:
                        'https://media.w3.org/2020/08/ml-workshop/virtual-character-web-meeting.mp4',
                    },
                  }}>
                  <VideoThumbnail src={PosterThree} />
                </Link>
                <div
                  className={classNames(
                    'text-overflow: ellipsis',
                    'leading-tight',
                    'text-center',
                    'my-2',
                    'block',
                    'sm:hidden',
                  )}>
                  Lorem Ipsum um Posuere
                </div>
              </div>
              <h3
                className={classNames(
                  'hed3',
                  'w-48',
                  'text-overflow: ellipsis',
                  'leading-tight',
                  'hidden',
                  'sm:block'
                )}>
                Lorem Ipsum um Posuere
              </h3>
            </div>
            <div
              className={classNames(
                'bg-white',
                'rounded-lg',
                'flex',
                'flex-row',
                'pr-0',
                'sm:pr-4',
                'items-center',
                'space-x-4',
                'shadow-card',
                pathName === '/sentiment' ? 'w-48 sm:w-96' : ''
              )}>
              <div
                className={classNames(
                  'sm:w-48',
                  'rounded-l-lg',
                  'overflow-y-hidden'
                )}>
                <Link
                  to={{
                    pathname: '/sentiment',
                    state: {
                      videoUrl:
                        'https://media.w3.org/2020/08/ml-workshop/Jason_Mayes_TensorFlowJS_W3C.mp4',
                    },
                  }}>
                  <VideoThumbnail src={PosterFour} />
                </Link>
                <div
                  className={classNames(
                    'text-overflow: ellipsis',
                    'leading-tight',
                    'text-center',
                    'my-2',
                    'block',
                    'sm:hidden',
                  )}>
                  Maecenas Eget Lectus vel Metus
                </div>
              </div>
              <h3
                className={classNames(
                  'hed3',
                  'w-48',
                  'text-overflow: ellipsis',
                  'leading-tight',
                  'hidden',
                  'sm:block'
                )}>
                Maecenas Eget Lectus vel Metus
              </h3>
            </div>
            <div
              className={classNames(
                'bg-white',
                'rounded-lg',
                'flex',
                'flex-row',
                'pr-0',
                'sm:pr-4',
                'items-center',
                'space-x-4',
                'shadow-card',
                pathName === '/sentiment' ? 'w-48 sm:w-96' : ''
              )}>
              <div
                className={classNames(
                  'sm:w-48',
                  'rounded-l-lg',
                  'overflow-y-hidden'
                )}>
                <Link
                  to={{
                    pathname: '/sentiment',
                    state: {
                      videoUrl: 'https://media.w3.org/2019/08/meig-2019-08-06.mp4',
                    },
                  }}>
                  <VideoThumbnail src={PosterFive} />
                </Link>
                <div
                  className={classNames(
                    'text-overflow: ellipsis',
                    'leading-tight',
                    'text-center',
                    'my-2',
                    'block',
                    'sm:hidden',
                  )}>
                  Curabitur Ullamcorper Mattis
                </div>
              </div>
              <h3
                className={classNames(
                  'hed3',
                  'w-48',
                  'text-overflow: ellipsis',
                  'leading-tight',
                  'hidden',
                  'sm:block'
                )}>
                Curabitur Ullamcorper Mattis
              </h3>
            </div>
            <div
              className={classNames(
                'bg-white',
                'rounded-lg',
                'flex',
                'flex-row',
                'pr-0',
                'sm:pr-4',
                'items-center',
                'space-x-4',
                'shadow-card',
                pathName === '/sentiment' ? 'w-48 sm:w-96' : ''
              )}>
              <div
                className={classNames(
                  'sm:w-48',
                  'rounded-l-lg',
                  'overflow-y-hidden'
                )}>
                <Link
                  to={{
                    pathname: '/sentiment',
                    state: {
                      videoUrl:
                        'https://media.w3.org/2017/01/webrtc-20170125.mp4	',
                    },
                  }}>
                  <VideoThumbnail src={PosterSix} />
                </Link>
                <div
                  className={classNames(
                    'text-overflow: ellipsis',
                    'leading-tight',
                    'text-center',
                    'my-2',
                    'block',
                    'sm:hidden',
                  )}>
                  Aliquam In Fermentum Nunc Vivamus
                </div>
              </div>
              <h3
                className={classNames(
                  'hed3',
                  'w-48',
                  'text-overflow: ellipsis',
                  'leading-tight',
                  'hidden',
                  'sm:block'
                )}>
                Aliquam In Fermentum Nunc Vivamus
              </h3>
            </div>
            <div
              className={classNames(
                'bg-white',
                'rounded-lg',
                'flex',
                'flex-row',
                'pr-0',
                'sm:pr-4',
                'items-center',
                'space-x-4',
                'shadow-card',
                pathName === '/sentiment' ? 'w-48 sm:w-96' : ''
              )}>
              <div
                className={classNames(
                  'sm:w-48',
                  'rounded-l-lg',
                  'overflow-y-hidden'
                )}>
                <Link
                  to={{
                    pathname: '/sentiment',
                    state: {
                      videoUrl:
                        'https://media.w3.org/2020/08/ml-workshop/Chai_Chaoweeraprasit.mp4',
                    },
                  }}>
                  <VideoThumbnail src={PosterSeven} />
                </Link>
                <div
                  className={classNames(
                    'text-overflow: ellipsis',
                    'leading-tight',
                    'text-center',
                    'my-2',
                    'block',
                    'sm:hidden',
                  )}>
                  Et Risus et Neque
                </div>
              </div>
              <h3
                className={classNames(
                  'hed3',
                  'w-48',
                  'text-overflow: ellipsis',
                  'leading-tight',
                  'hidden',
                  'sm:block'
                )}>
                Et Risus et Neque
              </h3>
            </div>
            <div
              className={classNames(
                'bg-white',
                'rounded-lg',
                'flex',
                'flex-row',
                'pr-0',
                'sm:pr-4',
                'items-center',
                'space-x-4',
                'shadow-card',
                pathName === '/sentiment' ? 'w-48 sm:w-96' : ''
              )}>
              <div
                className={classNames(
                  'sm:w-48',
                  'rounded-l-lg',
                  'overflow-y-hidden'
                )}>
                <Link
                  to={{
                    pathname: '/sentiment',
                    state: {
                      videoUrl: 'https://media.w3.org/2020/08/ml-workshop/onnxjs.mp4',
                    },
                  }}>
                  <VideoThumbnail src={PosterEight} />
                </Link>

                <div
                  className={classNames(
                    'text-overflow: ellipsis',
                    'leading-tight',
                    'text-center',
                    'my-2',
                    'block',
                    'sm:hidden',
                  )}>
                  In Orci Felis, Consectetur Ut
                </div>
              </div>
              <h3
                className={classNames(
                  'hed3',
                  'w-48',
                  'text-overflow: ellipsis',
                  'leading-tight',
                  'hidden',
                  'sm:block'
                )}>
                In Orci Felis, Consectetur Ut
              </h3>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FamilySentiment;
