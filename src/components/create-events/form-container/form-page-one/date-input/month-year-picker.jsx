import React, { useState } from 'react';
import { styles } from './month-year-picker.styles';

import { Icon, InlineIcon } from '@iconify/react';
import triangleRight from '@iconify-icons/entypo/triangle-left';
import triangleLeft from '@iconify-icons/entypo/triangle-right';

const MONTHS = [];
MONTHS[0] = 'January';
MONTHS[1] = 'February';
MONTHS[2] = 'March';
MONTHS[3] = 'April';
MONTHS[4] = 'May';
MONTHS[5] = 'June';
MONTHS[6] = 'July';
MONTHS[7] = 'August';
MONTHS[8] = 'September';
MONTHS[9] = 'October';
MONTHS[10] = 'November';
MONTHS[11] = 'December';

export default function MonthYearPicker({
  currentSelectedMonth,
  setSelectedMonth,
  currentSelectedYear,
  setSelectedYear,
  open,
  setOpen,
}) {
  const [currentYear] = useState(() => {
    const currentDate = new Date();
    return currentDate.getFullYear();
  });
  const classnames = styles();

  const handleYearDecrement = (e) => {
    if (currentSelectedYear > currentYear) {
      setSelectedYear((prev) => prev - 1);
    }
  };

  const handleYearIncrement = (e) => {
    if (Math.abs(currentSelectedYear - currentYear) < 5) {
      setSelectedYear((prev) => prev + 1);
    }
  };
  return (
    <div
      className={classnames.container}
      style={{ display: `${open ? '' : 'none'}` }}
      onMouseLeave={() => {
        setOpen(false);
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div>
        <div>
          <Icon
            icon={triangleRight}
            onClick={handleYearDecrement}
            style={{ color: `${currentSelectedYear === currentYear ? 'lightgrey' : 'black'}` }}
          />
          <p>{currentSelectedYear}</p>
          <Icon
            icon={triangleLeft}
            onClick={handleYearIncrement}
            style={{ color: `${Math.abs(currentSelectedYear - currentYear) >= 5 ? 'lightgrey' : 'black'}` }}
          />
        </div>
        <div className="month-picker">
          {MONTHS.map((month, index) => (
            <p
              className={`day picker-cell ${index === currentSelectedMonth ? 'selected-month' : ''}`}
              onClick={() => {
                console.log(index);
                setSelectedMonth(index);
              }}
            >
              {month.slice(0, 3)}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
