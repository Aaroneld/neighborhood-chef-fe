import React from 'react';
import Typography from '@material-ui/core/Typography';
import globeIcon from '@iconify/icons-flat-color-icons/globe';
import { Icon } from '@iconify/react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WcIcon from '@material-ui/icons/Wc';

const LeftSide = ({ user, parsedAddressURL }) => {
  return (
    <div className="leftSide">
      <div className="details">
        {user.biography && (
          <div className="bio">
            <Typography variant="h6">Description</Typography>
            <Typography>{user.biography}</Typography>
          </div>
        )}
        <div className="textIconContainer">
          <Typography variant="h6">Address</Typography>
          <div>
            <span>
              <Icon height="20" icon={globeIcon} />
            </span>
            <a href={parsedAddressURL} target="_blank" rel="noopener noreferrer">
              {user.address}
            </a>
          </div>
        </div>

        <div
          className="textIconContainer"
          onClick={(e) => {
            e.preventDefault();
            window.open(`mailto:${user.email}`);
          }}
        >
          <Typography variant="h6">Contact</Typography>
          <div>
            <MailOutlineIcon style={{ fontSize: '2rem' }} />
            <Typography style={{ cursor: 'pointer', maxWidth: '95%' }}>{user.email}</Typography>
          </div>
        </div>

        {user.UserEvents.owned.length === 0 && (
          <div className="textIconContainer">
            <Typography variant="h6">Events</Typography>
            <div>
              <Typography>{`${user.firstName} has not created any events`}</Typography>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftSide;
