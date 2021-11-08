import React, { useState, useRef, useEffect } from 'react';
import Transition from '../../../../utilities/Transition';
import Icon from '../../../01-atoms/images/Icon/Icon';
import classNames from 'classnames';

function EditMenu({ children, ...rest }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div {...rest}>
      <button
        ref={trigger}
        className={classNames(
          'text-gray-400',
          'hover:text-gray-500',
          'rounded-full',
          'mr-5',
          'mt-3',
        )}
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}>
        <span className="sr-only">Menu</span>
        <Icon size="s" color="NavySky" type="IconMenuDots" />
      </button>
      <Transition
        show={dropdownOpen}
        tag="div"
        className={classNames(
          'origin-top-right',
          'z-10',
          'absolute top-full',
          'right-4',
          'w-36',
          'bg-white',
          'border',
          'border-gray-200',
          'py-1.5',
          'rounded-md',
          'mt-4',
          'speech-bubble',
          'speech-bubble-tail',
          'bg-white-dark'
        )}
        enter={classNames(
          'transition',
          'ease-out',
          'duration-200',
          'transform'
        )}
        enterStart={classNames('opacity-0', '-translate-y-2')}
        enterEnd={classNames('opacity-100', 'translate-y-0')}
        leave={classNames('transition', 'ease-out', 'duration-200')}
        leaveStart="opacity-100"
        leaveEnd="opacity-0">
        <ul
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
          onClick={() => setDropdownOpen(false)}>
          {children}
        </ul>
      </Transition>
    </div>
  );
}

export default EditMenu;
