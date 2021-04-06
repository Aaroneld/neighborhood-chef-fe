import React from 'react';

export default function DateCell({ date, selectDate, selectedDate }) {
  return (
    <p
      className={`picker-cell ${!date.currentMonth ? 'prevMonthDay' : ''} ${
        Number(date.date) === selectedDate && date.currentMonth ? 'selected' : ''
      }`}
      onClick={(e) => (date.currentMonth ? selectDate(e) : null)}
    >
      {date.date}
    </p>
  );
}
