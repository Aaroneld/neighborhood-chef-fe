import React from 'react';
import { buttonStyles } from '../../CreateEvent.styles';
import { styles } from './event-buttons.styles';

const EventButtons = ({ leftBtnText, leftBtnClick, rightBtnText, rightBtnClick }) => {
  const btnStyles = buttonStyles();
  const classnames = styles();
  return (
    <div className={btnStyles.buttonContainer + ' ' + classnames.container} id="form-buttons">
      <button id="first-form-button" className={btnStyles.leftBtn + ' form-button'} onClick={leftBtnClick}>
        {leftBtnText}
      </button>
      <button id='second-form-button' type="button" className={btnStyles.rightBtn + ' form-button'} onClick={rightBtnClick}>
        {rightBtnText}
      </button>
    </div>
  );
};

export default EventButtons;
