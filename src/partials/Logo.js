import React from 'react';
import classNames from 'classnames';

import { ReactComponent as DSFWLogo } from './logo//DestinFWBLogo.svg';

const Logo = ({ color }) => {
  return <DSFWLogo className={classNames(`text-${color}`, 'fill-current','w-full', 'max-h-full')} />;
};

export default Logo;
