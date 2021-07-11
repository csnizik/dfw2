import React from 'react';
import classNames from 'classnames';

const Table = (title) => {
  return (
    <div className={classNames('flex', 'flex-col', title)}>
      <div
        className={classNames(
          'flex',
          'flex-row',
          'bg-teal-dark',
          'text-white',
          'divide-white',
          'divide-x',
          'divide-opacity-50',
          'rounded-t-lg'
        )}>
        <div className={classNames('px-8', 'pt-3', 'pb-1', 'w-1/2')}>Month</div>
        <div className={classNames('px-8', 'pt-3', 'pb-1', 'w-1/2')}>
          Arrivals
        </div>
          </div>
          
          <div
        className={classNames(
          'flex',
          'flex-row',
          'text-blue-dark',
          'border-r',
          'border-b',
          'border-l',
          'border-teal',
          'border-opacity-50',
          'divide-x',
          'divide-teal',
          'divide-opacity-50'
        )}>
        <div className={classNames('px-8', 'pt-3', 'pb-1', 'w-1/2')}>June</div>
        <div className={classNames('px-8', 'pt-3', 'pb-1', 'w-1/2')}>
          92,029
        </div>
      </div><div
        className={classNames(
          'flex',
          'flex-row',
          'text-blue-dark',
          'border-r',
          'border-b',
          'border-l',
          'border-teal',
          'border-opacity-50',
          'divide-x',
          'divide-teal',
          'divide-opacity-50'
        )}>
        <div className={classNames('px-8', 'pt-3', 'pb-1', 'w-1/2')}>July</div>
        <div className={classNames('px-8', 'pt-3', 'pb-1', 'w-1/2')}>
          102,857
        </div>
      </div><div
        className={classNames(
          'flex',
          'flex-row',
          'text-blue-dark',
          'border-r',
          'border-b',
          'border-l',
          'rounded-b-lg',
          'border-teal',
          'border-opacity-50',
          'divide-x',
          'divide-teal',
          'divide-opacity-50'
        )}>
        <div className={classNames('px-8', 'pt-3', 'pb-1', 'w-1/2')}>August</div>
        <div className={classNames('px-8', 'pt-3', 'pb-1', 'w-1/2')}>
          95,938
        </div>
      </div>
    </div>
  );
};

export default Table;
