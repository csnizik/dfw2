import classNames from 'classnames';
import React from 'react';
import UserMenu from './header/UserMenu';


function Header({ sidebarOpen, setSidebarOpen }) {
    return (
        <header className={classNames('sticky', 'top-0', 'bg-white', 'border-b', 'border-gray-200', 'z-30')}>
            <div className={classNames('px-4', 'sm:px-6', 'lg:px-8')}>
                <div className={classNames('flex', 'items-center', 'justify-between', 'h-16', '-mb-px')}>
                    {/* Left half of header */}
                    <div className={classNames('flex','bg-teal')}>
                        {/* Hamburger */}
                        <button className={classNames('text-gray-500', 'hover:text-gray-600', 'lg-hidden')} aria-controls='sidebar' aria-expanded={sidebarOpen} onClick={() => setSidebarOpen(!sidebarOpen)}>
                            <span className="sr-only">Open sidebar</span>
                            <svg className={classNames('w-6', 'h-6', 'fill-current')} viewBox="0 0 24 24" xsmlns="http://www.w3.org/2000/svg">
                                <rect x="4" y="5" width="16" height="2" />
                                <rect x="4" y="11" width="16" height="2" />
                                <rect x="4" y="17" width="16" height="2" />
                            </svg>
                        </button>
                    </div>
                    {/* Right half of header */}
                    <div className={classNames('flex', 'items-center','bg-blue')}>
                        <UserMenu />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;