import React from 'react';
import Modifier from '../../form-page-two/modifier/Modifier.jsx';
import AllergyModifier from '../../form-page-two/allergies-modifiers.jsx/allergies-modifiers';
import { displayEventModifiersStyles } from './DisplayModifiers.styles';
import { modifierData, allergenModifiers } from '../../form-page-two/FormPageTwo.jsx';

const DisplayEventModifiers = ({ values, setValues }) => {
  const styles = displayEventModifiersStyles();

  return (
    <div className={styles.root}>
      {values.modifiers.length > 0 && (
        <div className={styles.modifierContainer}>
          <h4 className={styles.h4}>Modifications</h4>
          <div className={styles.modifier}>
            {modifierData.map((modifier) => {
              if (values.modifiers.includes(modifier.title)) {
                return (
                  <Modifier key={modifier.title} modifier={modifier} values={values} setValues={setValues} />
                );
              } else {
                return '';
              }
            })}
          </div>
        </div>
      )}
      {values.allergenWarnings.length > 0 && (
        <div className={styles.modifierContainer}>
          <h4 className={styles.h4}>Allergy Warnings</h4>
          <div className={styles.modifier}>
            {allergenModifiers.map((modifier) => {
              if (values.allergenWarnings.includes(modifier.title)) {
                return (
                  <AllergyModifier key={modifier.title} modifier={modifier} values={values} setValues={setValues} />
                );
              } else {
                return '';
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayEventModifiers;
