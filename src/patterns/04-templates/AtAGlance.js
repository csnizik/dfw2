import classNames from 'classnames';
import React, { useState } from 'react';
import Metric from '../03-organisms/blocks/Metric/Metric';
import Icon from '../01-atoms/images/Icon/Icon';
import Card from '../03-organisms/blocks/Card/Card';

const AtAGlance = () => {
  const [cardExpanded, setCardExpanded] = useState(false);

  return (
    <div className={classNames('col-span-3')}>
      <Card pathName="/" cardPath={''}>
        <h2 className={classNames('hed2', 'col-span-3')}>At a Glance</h2>
        <div
          className={classNames(
            'col-span-3',
            'grid',
            'grid-cols-3',
            'gap-3',
            'divide-y',
            'lg:divide-y-0',
            'lg:divide-x',
            'divide-gray-300',
            'pb-4'
          )}>
          <div className={classNames('col-span-3', 'lg:col-span-1')}>
            <div
              className={classNames(
                'flex',
                'lg:flex-col',
                'justify-start',
                'lg:justify-between',
                '-space-x-2',
                'lg:space-0',
                'items-center'
              )}>
              <Metric value="12.7%" trend="up" />
              <div className={classNames('hed4', 'font-bold', 'sm:hed3')}>
                Visa Spend Per Visitor
              </div>
            </div>
            <div
              className={classNames(
                'lg:hidden',
                'transform',
                'transition-all',
                'origin-top',
                'duration-100',
                'ease-out',
                cardExpanded ? 'h-16' : 'h-0',
                'text-black',
                'text-sm',
                cardExpanded ? 'text-opacity-100' : 'text-opacity-0',
                'ml-1'
              )}>
              <div className={classNames('font-bold')}>Goal: $240</div>
              <div className={classNames('')}>This Season: $240</div>
              <div className={classNames('')}>Last Season: $213</div>
            </div>
          </div>

          <div className={classNames('col-span-3', 'lg:col-span-1')}>
            <div
              className={classNames(
                'flex',
                'lg:flex-col',
                'justify-start',
                'lg:justify-between',
                '-space-x-2',
                'lg:space-0',
                'items-center'
              )}>
              <Metric value="12.4%" trend="down" />
              <div className={classNames('hed4', 'font-bold', 'sm:hed3')}>
                Visa Consumer Spend
              </div>
            </div>
            <div
              className={classNames(
                'lg:hidden',
                'transform',
                'transition-all',
                'origin-top',
                'duration-100',
                'ease-out',
                cardExpanded ? 'h-16' : 'h-0',
                'text-black',
                'text-sm',
                cardExpanded ? 'text-opacity-100' : 'text-opacity-0',
              )}>
              <div className={classNames('font-bold')}>Goal: $552,531,928</div>
              <div className={classNames('')}>FY 2020: $502,301,753</div>
              <div className={classNames('')}>FY 2019: $573,692,622</div>
            </div>
          </div>

          <div className={classNames('col-span-3', 'lg:col-span-1')}>
            <div
              className={classNames(
                'flex',
                'lg:flex-col',
                'justify-start',
                'lg:justify-between',
                '-space-x-2',
                'lg:space-0',
                'items-center'
              )}>
              <Metric value="0.6%" trend="up" />
              <div className={classNames('hed4', 'font-bold', 'sm:hed3')}>ROAI</div>
            </div>
            <div
              className={classNames(
                'lg:hidden',
                'transform',
                'transition-all',
                'origin-top',
                'duration-100',
                'ease-out',
                cardExpanded ? 'h-16' : 'h-0',
                'text-black',
                'text-sm',
                cardExpanded ? 'text-opacity-100' : 'text-opacity-0',                'ml-1'
              )}>
              <div className={classNames('')}>2021: 4.8M</div>
              <div className={classNames('')}>2020: 4.7M</div>
            </div>
          </div>
        </div>

        <div
          className={classNames(
            'col-span-3',
            'rounded-b-lg',
            'flex',
            'flex-col',
            'flex-grow',
            'justify-end',
            'transform',
            'transition-all',
            'origin-top',
            'duration-100',
            'ease-out',
            '-mx-3',
            '-mb-3',
            cardExpanded ? 'lg:h-36' : 'h-12'
          )}>
          <div
            className={classNames(
              'flex',
              cardExpanded ? 'h-auto' : 'h-0',
              'justify-around',
              'items-center',
              'overflow-hidden'
            )}>
            <div className={classNames('hidden', 'lg:block')}>
              <div className={classNames('my-6', 'text-center')}>
                <p className={classNames('font-bold')}>Goal: $240</p>
                <p>This Season: $240</p>
                <p>Last Season: $213</p>
              </div>
            </div>
            <div className={classNames('hidden', 'lg:block')}>
              <div className={classNames('my-6', 'text-center')}>
                <p className={classNames('font-bold')}>Goal: $552,531,928</p>
                <p>FY 2020: $502,301,753</p>
                <p>FY 2019: $573,692,622</p>
              </div>
            </div>
            <div className={classNames('hidden', 'lg:block')}>
              <div className={classNames('my-6', 'text-center')}>
                <p>2021: 4.8M</p>
                <p>2020: 4.7M</p>
              </div>
            </div>
          </div>

          <div
            className={classNames(
              'bg-teal',
              'rounded-b-20px',
              'h-12',
              'flex',
              'justify-center',
              'py-2'
            )}>
            <button
              className={classNames(
                'cursor-pointer',
                'flex',
                'space-between',
                'items-center'
              )}
              onClick={() => setCardExpanded(!cardExpanded)}>
              Show {cardExpanded ? 'Less' : 'More'} Information&nbsp;
              <div
                className={classNames(
                  'transform',
                  'transition-all',
                  'duration-200',
                  cardExpanded ? 'rotate-0' : 'rotate-180'
                )}>
                <Icon
                  type="Triangle"
                  size="xs"
                  color="black"
                  classes={classNames('mx-1')}
                />
              </div>
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AtAGlance;
