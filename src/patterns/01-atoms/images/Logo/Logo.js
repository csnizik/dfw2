import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as DSFWLogo } from './DestinFWBLogo.svg';

const logoClasses = (size) => {
  switch (size) {
    case 'lg':
      return 'w-96 h-96'
    case 'full':
      return 'w-full h-auto'
    case 'md':
      return 'w-48 h-48'
    case 'sm':
      return 'w-24 h-24'
    case 'responsive':
      return 'w-20 h-24 self-start sm:w-full sm:h-auto sm:self-auto'
    default:
      return ''
  }
}

const logoColor = (color) => {
  switch (color) {
    case 'teal':
      return 'text-teal fill-current'
    case 'black':
      return 'text-black fill-current'
    case 'blue':
      return 'text-blue-dark fill-current'
    case 'white':
      return 'text-white-dark fill-current'
    default:
      return 'text-teal fill-current'
  }
}
 
const Logo = ({ size, color }) => {
  return <DSFWLogo className={`${logoColor(color)} ${logoClasses(size)}`}/>;

};

Logo.propTypes = {
  size: PropTypes.string,
};
export default Logo;
