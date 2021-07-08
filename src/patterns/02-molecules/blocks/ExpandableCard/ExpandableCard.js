import React, { useState } from 'react';
import Icon from '../../../01-atoms/images/Icon/Icon';
import classNames from 'classnames';

const ExpandableCard = ({ title, ...props }) => {
  const [cardExpanded, setCardExpanded] = useState(false);

  return (
    <div className={classNames('flex', 'flex-col', 'space-y-4','rounded-lg',
          'bg-white',
          'shadow',
        'p-3',
    'transform','transition-all','duration-200')}>
      <div
        className={classNames(
          'flex',
          'flex-row',
          
          'justify-between'
        )}>
        <h3 className={classNames('hed3', 'text-black')}>{title}</h3>
        <button
          id="expandToggle"
          className={classNames(
            'transform',
            'transition-all',
            'duration-200',
            cardExpanded ? 'rotate-90' : '-rotate-90'
          )}>
          <div
            className={classNames('cursor-pointer')}
            onClick={() => setCardExpanded(!cardExpanded)}>
            <Icon type="ArrowDown" size="m" color="black" />
          </div>
        </button>
      </div>
        {cardExpanded && <div className={classNames('')}>{props.children}</div>}
    </div>
  );
};

export default ExpandableCard;
