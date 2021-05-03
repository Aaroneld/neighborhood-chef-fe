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
      <div className={classes.imageContainer}>
        <div className={classes.img} title="Event Details Photo" /> 
      </div>
    </div>
  );
}
