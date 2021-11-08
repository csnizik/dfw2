import React from 'react';
import classNames from 'classnames';
import Icon from '../01-atoms/images/Icon/Icon';
import Heading from '../01-atoms/typography/Heading';
import EditMenu from '../03-organisms/navigation/EditMenu/EditMenu';
import { Link } from 'react-router-dom';

const CardHeading = ({
  cardPath,
  cardTitle,
  cardSubtitle,
  pathName,
  iconType,
}) => {
  return (
    <>
      <div
        className={classNames(
          'flex',
          '-mt-3',
          '-mx-3',
          'rounded-t-20px',
          'min-w-full',
          'justify-between'
        )}>
        <Link
          to={cardPath}
          className={classNames(
            'pt-4',
            'pl-4',
            'flex',
            'self-start',
            'space-x-3',
            'justify-center',
            'items-center',
            pathName === '/' ? 'visible' : 'invisible'
          )}>
          <Icon size="small" color="Navy Sky" type={iconType} />
          <Heading size="h3" color="blue-dark">
            {cardTitle}
          </Heading>
        </Link>
        {pathName === '/' && (
          <Link to={cardPath}>
            <div className={classNames('self-end', 'flex', 'items-center')}>
              <button
                className={classNames(
                  'expand-button',
                  `bg-teal`,
                  `text-white`,
                  `rounded-tr-20px`,
                  `rounded-bl-20px`,
                  `focus:outline-none`,
                  `hover:bg-teal-light`,
                  `w-12`,
                  `h-12`,
                  `font-sans`,
                  'flex',
                  'justify-center',
                  'items-center'
                )}>
                <Icon color="Navy Sky" size="Small" type="IconZoom" />
              </button>
            </div>
          </Link>
        )}
        {pathName === cardPath && (
          <EditMenu className="relative inline-flex">
            <li>
              <Link
                className="font-medium text-sm text-gray-600 hover:text-gray-800 flex py-1 px-1 justify-center font-serif"
                to="#0">
                Download as PDF
              </Link>
            </li>
          </EditMenu>
        )}
      </div>
      {cardSubtitle && <p
        className={classNames(
          'text-gray-500',
          'text-sm',
          'font-serif','mb-4',
          pathName === '/' ? 'block' : 'hidden'
        )}>
        {cardSubtitle}
      </p>}
    </>
  );
};

export default CardHeading;
