import React from 'react';
import classNames from 'classnames';

const InputSlider = () => {
  return (
    <div className={classNames('flex', 'flex-row', 'justify-between','items-center')}>
      <p className={classNames('text-sm', 'text-black', 'text-light','mx-3')}>2019</p>
      <div className={classNames('bg-teal', 'w-16','sm:w-36','h-4', 'rounded-l-full','-mr-4')}></div>
      <div className={classNames('relative','z-10','w-5','h-5','bg-blue-dark','rounded-full','top-0','-ml-3','cursor-pointer','shadow',)}></div>
      <div className={classNames('bg-teal-dark','w-16','sm:w-36','h-4','rounded-r-full','-ml-4')}></div>
      <p className={classNames('text-sm', 'text-black', 'text-light','mx-3')}>2021</p>
    </div>
  );
};

export default InputSlider;
