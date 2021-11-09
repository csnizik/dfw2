import React from 'react';
import classNames from 'classnames';

const InputSlider = () => {
  // TODO: replace this with functioning slider
  return (
    <div className={classNames('flex', 'flex-row', 'justify-center', 'items-center')}>
      
        <div className={classNames('text-base')}>2022</div>
      <form>
        <input type="range" id="year" name="year" />
      </form>
        <div className={classNames('text-base')}>2020</div>
    </div>
  );
};

export default InputSlider;
