import React from 'react';
import classNames from 'classnames';
import Icon from '../../../01-atoms/images/Icon/Icon';

const Metric = ({ value, trend, size, ...props }) => {
  return (
    <div className={classNames('flex', 'flex-col')}>
      <div
        className={classNames(
          'flex',
          'flex-row',
          'justify-center',
          'items-center',
          'pr-1',
          'lg:pr-0',
          'py-0.5',
          'mr-2',
          'lg:mr-0',
          'text-small',
          'lg:text-5xl',
          'lg:font-bold',
          trend === 'up'
            ? 'text-green'
            : trend === 'down'
            ? 'text-red'
            : 'text-gray'
        )}>
        <div className={classNames('mr-6', 'w-5', 'hidden','lg:block')}>
          {(trend === 'up' || trend === 'down') && (
            <Icon
              size='Medium'
              type={trend === 'up' ? 'ArrowUp' : 'ArrowDown'}
            />
          )}
        </div>
        <div className={classNames('block', 'lg:hidden')}>
          {(trend === 'up' || trend === 'down') && (
            <Icon
              size='xs'
              type={trend === 'up' ? 'ArrowUp' : 'ArrowDown'}
            />
          )}
        </div>
        <div className={classNames(`font-serif`)}>{value}</div>
      </div>

    </div>
  );
};

export default Metric;
