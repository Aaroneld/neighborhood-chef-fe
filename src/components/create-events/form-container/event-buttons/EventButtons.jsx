import React from 'react';
import { buttonStyles } from '../../CreateEvent.styles';

const EventButtons = ({ leftBtnText, leftBtnClick, rightBtnText, rightBtnClick }) => {
  const btnStyles = buttonStyles();

  return (
    <div className={btnStyles.buttonContainer}>
      <button className={btnStyles.leftBtn} onClick={leftBtnClick}>
        {leftBtnText}
      </button>
      <button type="button" className={btnStyles.rightBtn} onClick={rightBtnClick}>
        {rightBtnText}
      </button>
    </div>
  );
};

export default EventButtons;
