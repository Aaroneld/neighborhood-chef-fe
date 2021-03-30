import React from 'react';

export default function DateCell({ date, setSelectedDate, index, selectedDate }) {
  return (
    <p
      className={`picker-cell ${!date.currentMonth ? 'prevMonthDay' : ''} ${
        index === selectedDate ? 'selected' : ''
      }`}
      onClick={() => setSelectedDate(index)}
    >
      {date.date}
    </p>
  );
}
