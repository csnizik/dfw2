import React from 'react';
import classNames from 'classnames';

const headingColor = (color) => {
  switch (color) {
    case 'Crystal-Clear Teal':
    case 'teal':
      return 'text-teal';
    case 'Sunny-Sky Blue':
    case 'blue-light':
      return 'text-blue';
    case 'Sunset Pink':
    case 'pink':
      return 'text-pink';
    case 'Sea Foam Teal':
    case 'teal-dark':
      return 'text-teal-dark';
    case 'Navy Sky':
    case 'blue-dark':
      return 'text-blue-dark';
    case 'Moss Green':
    case 'green':
      return 'text-green';
    case 'Dusty Rose':
    case 'red':
      return 'text-red';
    case 'Whitewash White':
    case 'white-dark':
      return 'text-white-dark';
    case 'Black':
    case 'black':
      return 'text-black';
    case 'Gray':
    case 'gray':
      return 'text-gray-500';
    default:
      return '';
  }
};

const renderHeading = ({ size, color, classes, ...props }) => {
  switch (size) {
    case 'h1':
        return (
            <h1 className={classNames('hed1', headingColor(color, classes))}>{props.children}</h1>
        );
    case 'super':
      return (
          <h1 className={classNames('super', headingColor(color, classes))}>{props.children}</h1>
      );
    case 'h2':
      return (
        <h2 className={classNames('hed2', headingColor(color, classes))}>
          {props.children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={classNames('hed3', headingColor(color, classes))}>
          {props.children}
        </h3>
      );
    default:
      return (
        <p className={classNames(headingColor(color, classes))}>
          {props.children}
        </p>
      );
  }
};

const Heading = (props) => {
  return renderHeading({ ...props });
};

export default Heading;
