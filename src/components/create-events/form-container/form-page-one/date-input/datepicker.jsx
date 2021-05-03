import React, { useState, useEffect } from 'react';

import { styles } from './datepicker.styles';

import DateCell from './date-cell';
import MonthYearPicker from './month-year-picker';

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

export default function DatePicker({ setDate, values }) {
  const classnames = styles();
  const DAYS_OF_THE_WEEK = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const currentDay = new Date().getDate();
  const [initialRender, setInitialRender] = useState(true);

  const [currentSelectedMonth, setSelectedMonth] = useState(() => {
    if (!values.date) {
      const currentDate = new Date();
      return currentDate.getMonth();
    } else {
      return new Date(values.date).getMonth();
    }
  });

  const [currentSelectedYear, setSelectedYear] = useState(() => {
    if (!values.date) {
      const currentDate = new Date();
      return currentDate.getFullYear();
    } else {
      return new Date(values.date).getFullYear();
    }
  });

  const [currentDaysInMonth, setCurrentDaysInMonth] = useState(null);

  const [selectedDate, setSelectedDate] = useState(() => {
    if (!values.date) {
      const currentDate = new Date();
      return currentDate.getDate() + 1;
    } else {
      return new Date(values.date).getDate();
    }
  });

  const [open, setOpen] = useState(false);

  const selectDate = (e) => {
    setSelectedDate(Number(e.target.textContent));
  };

  const isValid = (date) => {
    if (currentSelectedMonth > currentMonth || currentSelectedYear > currentYear) {
      return true;
    } else if (currentSelectedMonth === currentMonth && currentSelectedYear === currentYear) {
      return date >= currentDay;
    }
    return false;
  };

  useEffect(() => {
    if (
      currentSelectedMonth === currentMonth &&
      currentSelectedYear === currentYear &&
      values.date &&
      initialRender
    ) {
      let editModeDate = values.date.split('-');
      setSelectedDate(Number(editModeDate[editModeDate.length - 1]));
    } else if (currentSelectedMonth === currentMonth && currentSelectedYear === currentYear) {
      setSelectedDate(currentDay);
    } else if (values.date && new Date(values.date).getMonth() === currentSelectedMonth) {
      setSelectedDate(new Date(values.date).getDate() + 1);
    } else if (currentSelectedMonth !== currentMonth) {
      setSelectedDate(1);
    }
    setInitialRender(false);
    let date = new Date(currentSelectedYear, currentSelectedMonth, 1);
    const firstDay = date.getDay();
    let lastDay = '';
    const days = [];

    while (date.getMonth() === currentSelectedMonth) {
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

    date = new Date(currentSelectedYear, currentSelectedMonth, lastDay);
    while (days.length < 35) {
      date.setDate(date.getDate() + 1);
      days.push({ date: date.getDate(), currentMonth: false });
    }

    setCurrentDaysInMonth(days);
    // eslint-disable-next-line
  }, [currentSelectedYear, currentSelectedMonth]);

  useEffect(() => {
    //prettier-ignore
    setDate(
      `${currentSelectedYear}-${currentSelectedMonth + 1 < 10 ? '0' : ''}${currentSelectedMonth + 1}-${
        selectDate < 10 ? '0' : ''
      }${selectedDate}`
    );
    // eslint-disable-next-line
  }, [selectedDate, currentSelectedYear]);

  return (
    <div
      className={classnames.container}
      onClick={() => {
        setOpen(false);
      }}
    >
      <div>
        <MonthYearPicker
          currentSelectedMonth={currentSelectedMonth}
          setSelectedMonth={setSelectedMonth}
          currentSelectedYear={currentSelectedYear}
          setSelectedYear={setSelectedYear}
          open={open}
          setOpen={setOpen}
        />
        <div className="display">
          <p>Date</p>
          <div
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setOpen(true);
            }}
            className="year-month-button"
          >
            <p>{MONTHS[currentSelectedMonth].slice(0, 3)}</p>
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
                selectDate={selectDate}
                isValid={isValid}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
