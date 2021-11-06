import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../../01-atoms/images/Logo/Logo';
import Icon from '../../../01-atoms/images/Icon/Icon';
import classNames from 'classnames';

import { ReactComponent as MenuRight } from '../../../01-atoms/images/menu-right.svg';

function Sidebar({ pathName }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const trigger = useRef(null);
  const sidebar = useRef(null);

  // close on click outside sidebar
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if ESC is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className={classNames('sidebar')}>
      <div
        id="sidebarBackdrop"
        className={classNames(
          'fixed',
          'inline',
          'inset-0',
          'bg-white',
          'bg-opacity-80',
          'sm:hidden',
          'w-screen',
          'h-full',
          'z-20',
          'sm:z-0',
          'transition-opacity',
          'duration-100',
          'ease-out',
          'pointer-events-none',
          sidebarOpen ? 'opacity-100' : 'opacity-0'
        )}></div>
      <div
        id="sidebar"
        ref={sidebar}
        className={classNames(
          'fixed',
          'inline',
          'h-full',
          'sm:relative',
          'inset-0',
          'bg-blue-dark',
          'z-30',
          'flex',
          'flex-col',
          'justify-start',
          'items-center',
          'transform',
          'sm:transform-none',
          'origin-left',
          'transition-all',
          'sm:transition-none',
          'duration-100',
          'ease-out',
          sidebarOpen ? 'menu-250' : 'menu-80'
        )}>
        <Logo size="responsive" className="sm:self-start" />
        {sidebarOpen && (
          <button
            className={classNames(
              'absolute',
              'top-2',
              'right-3',
              'text-white',
              'text-2xl',
              'font-extralight'
            )}
            onClick={() => setSidebarOpen(false)}>
            X
          </button>
        )}
        <ul
          className={classNames(
            'text-right',
            'space-y-2',
            'self-center',
            'sm:self-end',
            'flex',
            'flex-col',
            'mt-8',
            'sm:mt-0'
          )}>
          <li
            className={classNames(
              'list-none',
              'py-3',
              'pr-2',
              'pl-5',
              'rounded-bl-full',
              'rounded-tl-full',
              pathName === '/' ? 'bg-white-dark' : ''
            )}>
            <div
              className={classNames(
                'flex',
                'items-center',
                sidebarOpen ? 'justify-start' : 'justify-end sm:justify-start',
                sidebarOpen ? 'w-52' : 'w-auto  sm:w-52',
                'transform',
                'transition-all',
                'duration-100',
                'ease-out',
                'origin-left',
                'listItem'
              )}>
              <div className={classNames('listItemIcon', 'pr-3')}>
                {pathName === '/' && (
                  <MenuRight className={classNames('menu-right')} />
                )}
                <NavLink exact to="/">
                  <Icon
                    type="IconDashboard"
                    size="m"
                    color={pathName === '/' ? 'black' : 'teal'}
                  />
                </NavLink>
              </div>
              <div
                className={classNames(
                  'listItemText',
                  pathName === '/' ? 'text-black' : 'text-teal',
                  !sidebarOpen ? 'hidden sm:block' : ''
                )}>
                <NavLink exact to="/">
                  Dashboard
                </NavLink>
              </div>
            </div>
          </li>
          <li
            className={classNames(
              'list-none',
              'py-3',
              'pr-2',
              'pl-5',
              'rounded-bl-full',
              'rounded-tl-full',
              pathName === '/markets' ? 'bg-white-dark' : '',
              pathName
            )}>
            <div
              className={classNames(
                'flex',
                'items-center',
                sidebarOpen ? 'justify-start' : 'justify-end sm:justify-start',
                sidebarOpen ? 'w-52' : 'w-auto sm:w-52',
                'transform',
                'transition-all',
                'duration-200',
                'origin-right',
                'listItem'
              )}>
              <div className={classNames('listItemIcon', 'pr-3')}>
                {pathName === '/markets' && (
                  <MenuRight className={classNames('menu-right')} />
                )}
                <NavLink exact to="/markets">
                  <Icon
                    type="IconTopMarkets"
                    size="m"
                    color={pathName === '/markets' ? 'black' : 'teal'}
                  />
                </NavLink>
              </div>
              <div
                className={classNames(
                  'listItemText',
                  pathName === '/markets' ? 'text-black' : 'text-teal',
                  !sidebarOpen ? 'hidden sm:block' : ''
                )}>
                <NavLink exact to="/markets">
                  Top Markets
                </NavLink>
              </div>
            </div>
          </li>
          <li
            className={classNames(
              'list-none',
              'py-3',
              'pr-2',
              'pl-5',
              'rounded-bl-full',
              'rounded-tl-full',
              pathName === '/water' ? 'bg-white-dark' : '',
              pathName
            )}>
            <div
              className={classNames(
                'flex',
                'items-center',
                sidebarOpen ? 'justify-start' : 'justify-end sm:justify-start',
                sidebarOpen ? 'w-52' : 'w-auto sm:w-52',
                'transform',
                'transition-all',
                'duration-200',
                'origin-right',
                'listItem'
              )}>
              <div className={classNames('listItemIcon', 'pr-3')}>
                {pathName === '/water' && (
                  <MenuRight className={classNames('menu-right')} />
                )}
                <NavLink exact to="/water">
                  <Icon
                    type="IconWaterAdventures"
                    size="m"
                    color={pathName === '/water' ? 'black' : 'teal'}
                  />
                </NavLink>
              </div>
              <div
                className={classNames(
                  // 'pl-3',
                  'listItemText',
                  pathName === '/water' ? 'text-black' : 'text-teal',
                  !sidebarOpen ? 'hidden sm:block' : ''
                )}>
                <NavLink exact to="/water">
                  Water Adventures
                </NavLink>
              </div>
            </div>
          </li>
          <li
            className={classNames(
              'list-none',
              'py-3',
              'pr-2',
              'pl-5',
              'rounded-bl-full',
              'rounded-tl-full',
              pathName === '/value' ? 'bg-white-dark' : '',
              pathName
            )}>
            <div
              className={classNames(
                'flex',
                'items-center',
                sidebarOpen ? 'justify-start' : 'justify-end sm:justify-start',
                sidebarOpen ? 'w-52' : 'w-auto sm:w-52',
                'transform',
                'transition-all',
                'duration-200',
                'origin-right',
                'listItem'
              )}>
              <div className={classNames('listItemIcon', 'pr-3')}>
                {pathName === '/value' && (
                  <MenuRight className={classNames('menu-right')} />
                )}
                <NavLink exact to="/value">
                  <Icon
                    type="IconValueGap"
                    size="m"
                    color={pathName === '/value' ? 'black' : 'teal'}
                  />
                </NavLink>
              </div>
              <div
                className={classNames(
                  // 'pl-3',
                  'listItemText',
                  pathName === '/value' ? 'text-black' : 'text-teal',
                  !sidebarOpen ? 'hidden sm:block' : ''
                )}>
                <NavLink exact to="/value">
                  Value Gap
                </NavLink>
              </div>
            </div>
          </li>
          <li
            className={classNames(
              'list-none',
              'py-3',
              'pr-2',
              'pl-5',
              'rounded-bl-full',
              'rounded-tl-full',
              pathName === '/confidence' ? 'bg-white-dark' : '',
              pathName
            )}>
            <div
              className={classNames(
                'flex',
                'items-center',
                sidebarOpen ? 'justify-start' : 'justify-end sm:justify-start',
                sidebarOpen ? 'w-52' : 'w-auto sm:w-52',
                'transform',
                'transition-all',
                'duration-200',
                'origin-right',
                'listItem'
              )}>
              <div className={classNames('listItemIcon', 'pr-3')}>
                {pathName === '/confidence' && (
                  <MenuRight className={classNames('menu-right')} />
                )}
                <NavLink exact to="/confidence">
                  <Icon
                    type="IconTourismConfidence"
                    size="m"
                    color={pathName === '/confidence' ? 'black' : 'teal'}
                  />
                </NavLink>
              </div>
              <div
                className={classNames(
                  'listItemText',
                  pathName === '/confidence' ? 'text-black' : 'text-teal',
                  !sidebarOpen ? 'hidden sm:block' : ''
                )}>
                <NavLink exact to="/confidence">
                  Tourism Confidence
                </NavLink>
              </div>
            </div>
          </li>
          <li
            className={classNames(
              'list-none',
              'py-3',
              'pr-2',
              'pl-5',
              'rounded-bl-full',
              'rounded-tl-full',
              pathName === '/sentiment' ? 'bg-white-dark' : '',
              pathName
            )}>
            <div
              className={classNames(
                'flex',
                'items-center',
                sidebarOpen ? 'justify-start' : 'justify-end sm:justify-start',
                sidebarOpen ? 'w-52' : 'w-auto sm:w-52',
                'transform',
                'transition-all',
                'duration-200',
                'origin-right',
                'listItem'
              )}>
              <div className={classNames('listItemIcon', 'pr-3')}>
                {pathName === '/sentiment' && (
                  <MenuRight className={classNames('menu-right')} />
                )}
                <NavLink exact to="/sentiment">
                  <Icon
                    type="IconFamilySentiment"
                    size="m"
                    color={pathName === '/sentiment' ? 'black' : 'teal'}
                  />
                </NavLink>
              </div>
              <div
                className={classNames(
                  'listItemText',
                  pathName === '/sentiment' ? 'text-black' : 'text-teal',
                  !sidebarOpen ? 'hidden sm:block' : ''
                )}>
                <NavLink exact to="/sentiment">
                  Family Sentiment
                </NavLink>
              </div>
            </div>
          </li>
        </ul>
        <div
          className={classNames(
            'flex',
            'flex-col',
            'pt-8',
            'mx-2',
            'items-center',
            'justify-center',
            sidebarOpen ? 'block' : 'download-button'
          )}>
          <p className={classNames('text-white', 'sm:block')}>PDF Report</p>
          <p className={classNames('text-white', 'font-light', 'sm:block')}>
            Download the monthly report
          </p>
          <button>
            <div
              className={classNames(
                'h-12',
                'w-48',
                'bg-teal',
                'rounded-full',
                'flex',
                'justify-center',
                'items-center',
                'ring-0',
                'py-7',
                'px-5',
                'mt-3',
                'space-between',
                'space-x-3'
              )}>
              <p className={classNames('block')}>Download</p>
              <Icon size="m" type="IconDownload" />
            </div>
          </button>
        </div>
        <div
          className={classNames(
            'flex-grow',
            'flex',
            'flex-col',
            'justify-end',
            'p-4',
            'self-start'
          )}>
          <button
            id="sidebarToggle"
            ref={trigger}
            className={classNames(
              'sm:hidden',
              'box-border',
              'transform',
              'transition-all',
              'duration-100',
              'ease-out',
              sidebarOpen ? 'rotate-180' : 'rotate-0',
              'z-50',
              'h-12',
              'w-12',
              'bg-teal',
              'rounded-full',
              'flex',
              'justify-center',
              'items-center',
              'ring-0'
            )}>
            <div
              className={classNames('cursor-pointer')}
              onClick={() => setSidebarOpen(!sidebarOpen)}>
              <Icon type="IconExpand" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
