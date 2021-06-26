import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  //   const location = useLocation();
  //   const { pathname } = location;
  //   const page = pathname.split('/')[1];

  const trigger = useRef(null);
  const sidebar = useRef(null);

  // close on click outside
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

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });
  return (
    <div className={classNames('lg:w-64')}>
      <div
        className={classNames(
          'fixed',
          'inset-0',
          'bg-gray-900',
          'bg-opacity-30',
          'z-40',
          'lg:hidden',
          'lg:z-auto',
          'transition-opacity',
          'duration-200',
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        aria-hidden="true"
      ></div>
      <div
        className={classNames(
          'flex',
          'justify-between',
          'mb-10',
          'pr-3',
          'sm:px-2'
        )}
      >
        <button
          ref={trigger}
          className={classNames(
            'lg:hidden',
            'text-gray-500',
            'hover:text-gray-400'
          )}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
        >
          <span className="sr-only">Close sidebar</span>
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
          </svg>
        </button>
        <div className="testing">
          <NavLink exact to="/" className={classNames('block')}>
            <Logo color="teal" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
