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
        'col-span-2',
        'md:col-span-1',
        'py-4',
      )}>
      <h2 className={classNames('hed2')}>{group.title}</h2>
      <InfoCardGroup cards={group.contents} />
    </div>
  );
}

const InfoCardContainer = ({ cardGroups }) => {
  return (
    <div
      className={classNames(
        'grid',
        'grid-cols-2',
        'gap-8',
      )}>
      {cardGroups.map((group) => renderGroup(group))}
    </div>
  );
};

export default InfoCardContainer;
