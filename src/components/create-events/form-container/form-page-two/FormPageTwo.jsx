import React from 'react';

import strollerIcon from '@iconify/icons-vs/stroller';
import baselineOutdoorGrill from '@iconify/icons-ic/baseline-outdoor-grill';
import bottleWine from '@iconify/icons-mdi/bottle-wine';
import dogIcon from '@iconify/icons-whh/dog';
import icon18Plus from '@iconify/icons-uil/18-plus';
import foodApple from '@iconify/icons-mdi/food-apple';

import EventImageUpload from '../../../shared/event-image-upload/EventImageUpload';
import Modifier from './modifier/Modifier.jsx';
import AddHashtag from './add-hashtag/AddHashtag.jsx';
import EventButtons from '../event-buttons/EventButtons';
import { scrollToTop } from '../form-page-one/FormPageOne.jsx';

import AllergyModifier from './allergies-modifiers.jsx/allergies-modifiers';

import Typography from '@material-ui/core/Typography';

import { formPageTwoStyles } from './FormPageTwo.styles';
import { changePage } from '../../../../utilities/actions';
import { useDispatch } from 'react-redux';

import peanutIcon from '@iconify-icons/mdi/peanut';
import crabIcon from '@iconify-icons/emojione-monotone/crab';
import eggsIcon from '@iconify-icons/jam/eggs';
import fishIcon from '@iconify-icons/ion/fish';
import cowIcon from '@iconify-icons/whh/cow';
import wheatIcon from '@iconify-icons/carbon/wheat';

export const allergenModifiers = [
  { title: 'Peanuts', icon: peanutIcon },
  { title: 'Shellfish', icon: crabIcon },
  { title: 'Eggs', icon: eggsIcon },
  { title: 'Fish', icon: fishIcon },
  { title: 'Dairy', icon: cowIcon },
  { title: 'Wheat', icon: wheatIcon },
];
export const modifierData = [
  { title: 'Vegetarian', icon: foodApple },
  { title: 'Kid-Friendly', icon: strollerIcon },
  { title: '18+ Event', icon: icon18Plus },
  { title: 'Pet-Friendly', icon: dogIcon },
  { title: 'BBQ', icon: baselineOutdoorGrill },
  { title: 'Alcohol Accepted', icon: bottleWine },
];

const FormPageTwo = (props) => {
  const styles = formPageTwoStyles();
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.container}>
        <div id="image-hashtag-container">
          <EventImageUpload
            values={props.values}
            setValues={props.setValues}
            className="sadasdsa"
            caption={'Upload a main picture for your event page'}
          />
          <AddHashtag values={props.values} setValues={props.setValues} />
        </div>
        <div id="modifier-container-first">
          <Typography className={styles.modifierLabel}>Pick modifiers for your event.</Typography>
          <div className={styles.modifierContainer}>
            {modifierData
              .map((modifier) => {
                if (props.values.modifiers.includes(modifier.title)) {
                  return { ...modifier, active: true };
                } else {
                  return { ...modifier, active: false };
                }
              })
              .map((modifier) => {
                return (
                  <Modifier
                    key={modifier.title}
                    modifier={modifier}
                    values={props.values}
                    setValues={props.setValues}
                  />
                );
              })}
          </div>
        </div>
        <div id="modifier-container-second">
          <Typography className={styles.modifierLabel}>Add Allergy Warnings</Typography>
          <div className={styles.modifierContainer}>
            {allergenModifiers
              .map((modifier) => {
                if (props.values.allergenWarnings.includes(modifier.title)) {
                  return { ...modifier, active: true };
                } else {
                  return { ...modifier, active: false };
                }
              })
              .map((modifier) => {
                return (
                  <AllergyModifier
                    key={modifier.title}
                    modifier={modifier}
                    values={props.values}
                    setValues={props.setValues}
                  />
                );
              })}
          </div>
        </div>
      </div>
      <EventButtons
        leftBtnText="Previous"
        leftBtnClick={() => {
          dispatch(changePage(1));
          scrollToTop();
        }}
        rightBtnText="Next"
        rightBtnClick={() => {
          dispatch(changePage(3));
          scrollToTop();
        }}
      />
    </>
  );
};

export default FormPageTwo;
