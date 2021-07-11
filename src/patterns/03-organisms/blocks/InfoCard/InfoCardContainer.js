import React from 'react';
import classNames from 'classnames';
import InfoCardGroup from './InfoCardGroup';

function renderGroup(group) {
  return (
    <div
      className={classNames(
        'w-full',
        'flex',
        'flex-col',
        'justify-start',
        'space-y-4',
        'py-4',
        'col-span-2',
        'lg:col-span-1'
      )}>
      <h2 className={classNames('hed2')}>{group.title}</h2>
      <InfoCardGroup cards={group.contents} />
    </div>
  );
}

const InfoCardContainer = ({ cardGroups }) => {
  const numCols = cardGroups.length > 1 ? '2' : '1';
  return (
    <div
      className={classNames(
        'grid',
        `grid-cols-${numCols}`,
        'gap-8',
      )}>
      {cardGroups.map((group) => renderGroup(group))}
    </div>
  );
};

export default InfoCardContainer;
