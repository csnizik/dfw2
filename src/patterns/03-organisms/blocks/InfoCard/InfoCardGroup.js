import React from 'react';
import classNames from 'classnames';
import InfoCard from './InfoCard';

function renderCard(card) {
    const a = 'b';
    return (
        <InfoCard card={card}/>
    )
}


const InfoCardGroup = ({ cards }) => {
    return (
        <div className={classNames('flex','flex-col','space-y-4')}>
            {cards.map((card) => renderCard(card))}
        </div>
        );
};

export default InfoCardGroup;
