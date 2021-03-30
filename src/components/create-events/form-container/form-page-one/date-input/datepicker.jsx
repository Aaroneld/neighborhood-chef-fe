import React, { useState, useEffect } from 'react';

import { styles } from './datepicker.styles';

import DateCell from './date-cell';

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

export default function DatePicker({ setDate }) {
  const classnames = styles();
  const DAYS_OF_THE_WEEK = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const [currentSelectedMonth, setSelectedMonth] = useState(() => {
    const currentDate = new Date();
    return currentDate.getMonth();
  });

  const [currentSelectedYear, setSelectedYear] = useState(() => {
    const currentDate = new Date();
    return currentDate.getFullYear();
  });

  const [currentDaysInMonth, setCurrentDaysInMonth] = useState(null);

  const [selectedDate, setSelectedDate] = useState(null);

  const selectDate = (e) => {
    setSelectedDate(Number(e.target.textContent));
  };

  useEffect(() => {
    let date = new Date(currentSelectedYear, currentSelectedMonth, 1);
    const firstDay = date.getDay();
    let lastDay = '';
    const days = [];

    console.log(date, firstDay);
    while (date.getMonth() === currentSelectedMonth) {
      console.log('here');
      days.push({ date: date.getDate(), currentMonth: true });
      date.setDate(date.getDate() + 1);
    }

    date.setDate(date.getDate() - 1);
    lastDay = date.getDate();

    if (firstDay !== 0) {
      date = new Date(currentSelectedYear, currentSelectedMonth, 1);

      for (let i = firstDay; i > 0; i--) {
        date.setDate(date.getDate() - 1);
        days.unshift({ date: date.getDate(), currentMonth: false });
      }
    }

    console.log(lastDay);
    date = new Date(currentSelectedYear, currentSelectedMonth, lastDay);
    while (days.length !== 35) {
      date.setDate(date.getDate() + 1);
      days.push({ date: date.getDate(), currentMonth: false });
    }

    setCurrentDaysInMonth(days);
  }, [currentSelectedYear, currentSelectedMonth]);

  useEffect(() => {
    //prettier-ignore
    console.log(`${currentSelectedYear}-${currentSelectedMonth + 1 < 10? '0' : ''}${currentSelectedMonth + 1}-${selectDate < 10 ? '0' : ''}${selectedDate}`)
    //prettier-ignore
    setDate(`${currentSelectedYear}-${currentSelectedMonth + 1 < 10? '0' : ''}${currentSelectedMonth + 1}-${selectDate < 10 ? '0' : ''}${selectedDate}`)
  }, [selectedDate]);

  return (
    <div className={classnames.container}>
      <div className="display">
        
        <p>Date</p>
        <div>
          <p>{MONTHS[currentSelectedMonth]}</p>
          <p>{currentSelectedYear}</p>
        </div>
      </div>
      <div className="picker">
        {DAYS_OF_THE_WEEK.map((day) => (
          <p key="day" className="picker-cell day">
            {day}
          </p>
        ))}
        {currentDaysInMonth &&
          currentDaysInMonth.map((date, index) => (
            <DateCell
              date={date}
              index={index}
              setSelectedDate={setSelectedDate}
              selectedDate={selectedDate}
            />
          ))}
      </div>
    </div>
  );
}
