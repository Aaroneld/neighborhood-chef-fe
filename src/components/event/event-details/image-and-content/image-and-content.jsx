import React from 'react';

import Typography from '@material-ui/core/Typography';

import { displayEventModifiersStyles } from '../../../create-events/form-container/form-page-three/display-event-modifiers/DisplayModifiers.styles';
import {
  modifierData,
  allergenModifiers,
} from '../../../create-events/form-container/form-page-two/FormPageTwo.jsx';
import Modifier from '../../../create-events/form-container/form-page-two/modifier/Modifier.jsx';
import AllergyModifier from '../../../create-events/form-container/form-page-two/allergies-modifiers.jsx/allergies-modifiers';

export default function ImageAndContent({ event, classes }) {
  const modifierClasses = displayEventModifiersStyles();

  return (
    <div className={classes.imageAndContent}>
      <div className={classes.img} title="Event Details Photo" />
      <div className={classes.contentContainer}>
        {event.modifiers.length > 0 && (
          <div className={classes.modifierContainer}>
            <Typography variant="h6">Modifications</Typography>
            <div className={classes.eventDetailsModifier + ' ' + modifierClasses.modifier}>
              {modifierData.map((modifier) => {
                if (event.modifiers.includes(modifier.title)) {
                  return <Modifier key={modifier.title} modifier={modifier} />;
                } else {
                  return '';
                }
              })}
            </div>
          </div>
        )}
        {event.allergenWarnings.length > 0 && (
          <div>
            <Typography variant="h6">Allergy Warnings</Typography>
            <div className={classes.eventDetailsModifier + ' ' + modifierClasses.modifier}>
              {allergenModifiers.map((modifier) => {
                if (event.allergenWarnings.includes(modifier.title)) {
                  return <AllergyModifier key={modifier.title} modifier={modifier} />;
                } else {
                  return '';
                }
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
