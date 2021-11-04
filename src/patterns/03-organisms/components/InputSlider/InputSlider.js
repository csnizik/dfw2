import React from 'react';
import classNames from 'classnames';

const InputSlider = () => {
  // TODO: replace this with functioning slider
  return (
    <div className={classNames('flex', 'flex-row', 'justify-between','items-center')}>
      <p className={classNames('text-sm', 'text-black', 'text-light','mx-3')}>2019</p>
      <div className={classNames('bg-teal', 'w-16','sm:w-36','h-4', 'rounded-l-full','-mr-4')}></div>
      <div style={{width: '45px', height: '25px'}} className={classNames('relative','bg-blue-dark','rounded-full','top-0','-ml-3','cursor-pointer','shadow',)}></div> 
      <div className={classNames('bg-teal-dark','w-16','sm:w-36','h-4','rounded-r-full','-ml-4')}></div>
      <p className={classNames('text-sm', 'text-black', 'text-light','mx-3')}>2021</p>
    </div>
  );
};

export default InputSlider;
