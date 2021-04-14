import React from 'react';
import { Icon } from '@iconify/react';
import { modifierStyles } from '../modifier/Modifier.styles';

const AllergyModifier = ({ modifier, values, setValues }) => {
  const styles = modifierStyles();

  const updateModifier = () => {
    if (values.allergenWarnings.includes(modifier.title)) {
      modifier.active = false;
      setValues({
        ...values,
        allergenWarnings: values.allergenWarnings.filter((mod) => mod !== modifier.title),
      });
    } else {
      modifier.active = true;
      setValues({ ...values, allergenWarnings: [...values.allergenWarnings, modifier.title] });
    }
  };

  return (
    <div className={styles.root + " modifier"}>
      <div
        onClick={() => updateModifier()}
        className={`${styles.modifierNotActive} ${modifier.active ? styles.modifierActive : ''} modifier-icon`}
        style={{background: "#EA6565"}}
      >
        <Icon icon={modifier.icon} className={styles.icon} />
      </div>

      <p className={styles.p}>{modifier.title}</p>
    </div>
  );
};

export default AllergyModifier;
