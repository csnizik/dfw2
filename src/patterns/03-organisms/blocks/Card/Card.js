import React from 'react';
import classNames from 'classnames';

const Card = ({ pathName, cardPath, cols, transparent, ...props }) => {
  const dynamicWidth = `lg:col-span-${cols}`;

  return (
    <div
      className={classNames(
        'flex',
        'flex-col',
        'col-span-3',
        pathName !== cardPath ? dynamicWidth : '',
        pathName === cardPath ? 'h-full' : '',
        transparent ? 'p-0' : 'p-3',
        transparent ? '' : 'rounded-lg',
        transparent ? '' : 'shadow',
        transparent ? 'bg-transparent' : 'bg-white'
        // 'hidden'
      )}>
      {props.children}
    </div>
  );
};

export default Card;
