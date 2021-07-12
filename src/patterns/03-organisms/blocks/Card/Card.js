import React from 'react';
import classNames from 'classnames';

const Card = ({ pathName, cardName, cols, transparent, ...props }) => {
  return (
    <div
      className={classNames(
        'flex',
        'flex-col',
        pathName === '/' ? `col-span-3 lg:col-span-${cols}` : '',
        // 'col-span-3',
        // pathName !== `/${cardName}` ? `lg:col-span-${cols}` : '',
        pathName === `/${cardName}` ? 'h-full' : '',
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
