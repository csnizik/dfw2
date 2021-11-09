import React from 'react';
import classNames from 'classnames';

const InputSlider = () => {
  // TODO: replace this with functioning slider
  return (
    <div className={classNames('flex', 'flex-row', 'justify-center', 'items-center')}>
      
        <div className={classNames('text-base')}>2021</div>
      <form>
        <input type="range" id="year" name="year" min="0" max="2" defaultValue="1" step="1" />
      </form>
        <div className={classNames('text-base')}>2019</div>
    </div>
  );
};

export default InputSlider;
