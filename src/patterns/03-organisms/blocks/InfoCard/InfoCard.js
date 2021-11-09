import React, { useState } from 'react';
import Icon from '../../../01-atoms/images/Icon/Icon';
import classNames from 'classnames';

const InfoCard = ({ card }) => {
  const [cardExpanded, setCardExpanded] = useState(false);

  return (
    <div
      className={classNames(
        'flex',
        'flex-col',
        'space-y-4',
        'rounded-20px',
        'bg-white',
        'shadow',
        'p-3',
        'transform',
        'transition-all',
        'duration-200'
      )}>
      <div
        className={classNames(
          'flex',
          'flex-row',
          'justify-between',
          'cursor-pointer'
        )}
        onClick={() => setCardExpanded(!cardExpanded)}>
        <h3 className={classNames('hed3', 'text-black')}>{card.title}</h3>
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
            <Icon type="ArrowRight" size="m" color="black" />
          </div>
        </button>
      </div>
      {cardExpanded && <div className={classNames('font-serif')}>{card.data}</div>}
    </div>
  );
};

export default InfoCard;
