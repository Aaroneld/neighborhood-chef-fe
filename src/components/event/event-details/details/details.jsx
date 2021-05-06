import React from 'react';
import { Icon } from '@iconify/react';
import calendarIcon from '@iconify/icons-flat-color-icons/calendar';
import clockIcon from '@iconify/icons-flat-color-icons/clock';
import globeIcon from '@iconify/icons-flat-color-icons/globe';

import { parseTime } from '../../../../utilities/functions';
import { Typography } from '@material-ui/core';

export default function Details({ event, classes }) {
  let timeObject, parsedAddressURL;

  if (Object.keys(event).length > 0) {
    timeObject = parseTime(event.startTime, event.endTime);
    parsedAddressURL = `https://www.google.com/maps/search/${event.address.replace(' ', '+')}`;
  }

  return (
    <>
      <Typography variant="h6" className={classes.mobileHeader}>
        Details
      </Typography>
      <div className={classes.details}>
        <div className={classes.detailsContainer}>
          <div className={classes.iconTextContainer}>
            <span className={classes.span}>
              <Icon height="45" icon={calendarIcon} />
            </span>
            <p>{timeObject.formattedDate}</p>
          </div>
          <div className={classes.iconTextContainer}>
            <span className={classes.span}>
              <Icon height="45" icon={clockIcon} />
            </span>
            <p>
              {`${timeObject.startTime} ${
                timeObject.endTime !== 'Invalid date' ? '- ' + timeObject.endTime : ''
              }`}
            </p>
          </div>

          <div className={classes.addressContainer}>
            <span className={classes.span}>
              <Icon height="45" icon={globeIcon} />
            </span>

            <a href={parsedAddressURL} target="_blank" rel="noopener noreferrer">
              {event.address.split(',').slice(0, 1).join(', ')}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
