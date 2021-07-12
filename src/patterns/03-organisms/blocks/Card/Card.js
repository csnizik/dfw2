import React from 'react';
import classNames from 'classnames';

const Card = ({ pathName, cardPath, cols, transparent, ...props }) => {
  return (
    <div
      className={classNames(
        'flex',
        'flex-col',
        'col-span-3',
        // pathName !== cardPath ? `lg:col-span-${cols}` : '',
        pathName !== cardPath && cols === 1 ? 'lg:col-span-1' : '',
        pathName !== cardPath && cols === 2 ? 'lg:col-span-2' : '',
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
