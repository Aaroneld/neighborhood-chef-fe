import React from 'react';
import moment from 'moment';

import DisplayEventModifiers from './display-event-modifiers/DisplayEventModifiers';
import EventButtons from '../event-buttons/EventButtons';
import { scrollToTop } from '../form-page-one/FormPageOne.jsx';

import { convertTime, chooseDefaultPicture } from '../../../../utilities/functions';

import { formPageThreeStyles } from './FormPageThree.styles';
import { changePage } from '../../../../utilities/actions';
import { useDispatch } from 'react-redux';

const FormPageThree = (props) => {
  const styles = formPageThreeStyles({image: props.values.photo || chooseDefaultPicture(props.values.title.charAt(0))});
  const dispatch = useDispatch();

  return (
    <div className={styles.root}>
      <h3 className={styles.h3}>
        Double check if your event details are correct. Once finished, click done.
      </h3>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.img} id="form-confirm-image" alt="Event Page 3 Img"/>

          
          {/* <img
            className={styles.img}
            src={props.values.photo || chooseDefaultPicture(props.values.title.charAt(0))}
            alt="Event Page 3 Img"
          /> */}

          <div className={styles.text}>
            <h4 className={styles.h4}>
              {props.values.title.length < 22 ? props.values.title : `${props.values.title.slice(0, 22)}...`}
            </h4>
            <div className={styles.dateDiv}>
              <p className={styles.grayText}>
                {props.values.date && moment(props.values.date).format('MMMM Do YYYY')}
                &nbsp;
              </p>
              <p className={styles.startTime}>{convertTime(props.values.startTime)}&nbsp;</p>

              {props.values.endTime && (
                <>
                  <p className={styles.grayText}>to&nbsp;</p>
                  <p className={styles.endTime}>{convertTime(props.values.endTime)}</p>
                </>
              )}
            </div>
            <p className={styles.grayText}>{props.values.address}</p>
          </div>
        </div>
        <div>
          <h4>Description</h4>
          <p>{props.values.description}</p>
        </div>
        <DisplayEventModifiers values={props.values} setValues={props.setValues} />
      </div>
      <EventButtons
        leftBtnText="Previous"
        leftBtnClick={() => {
          dispatch(changePage(2));
          scrollToTop();
        }}
        rightBtnText="Done"
        rightBtnClick={props.handleSubmit}
      />
    </div>
  );
};

export default FormPageThree;
