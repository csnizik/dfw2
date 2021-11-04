import React from 'react';
import classNames from 'classnames';

const Card = ({ pathName, cardPath, transparent, ...props }) => {
  return (
    <div
      className={classNames(
        'flex',
        'flex-col',
        'h-full',
        transparent ? 'p-0' : 'p-3',
        transparent ? '' : 'rounded-20px',
        transparent ? '' : 'shadow-card',
        transparent ? 'bg-transparent' : 'bg-white'
      )}>
      {props.children}
    </div>
  );
};

export default Card;
