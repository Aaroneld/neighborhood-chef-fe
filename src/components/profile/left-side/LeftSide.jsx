import React from 'react';
import Typography from '@material-ui/core/Typography';
import globeIcon from '@iconify/icons-flat-color-icons/globe';
import { Icon } from '@iconify/react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WcIcon from '@material-ui/icons/Wc';
import { buttonStyles } from '../../../styles';

const LeftSide = ({ user, loggedInUserId, userid, parsedAddressURL }) => {
  const btnStyles = buttonStyles();

  return (
    <div className="leftSide">
      <div className="details">
        {user.biography && (
          <div className="bio">
            <Typography variant="h6">Description</Typography>
            <Typography>{user.biography}</Typography>
          </div>
        )}
        <div className="textIconContainer" style={{ cursor: 'pointer' }}>
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
          style={{ cursor: 'pointer' }}
          onClick={(e) => {
            e.preventDefault();
            window.open(`mailto:${user.email}`);
          }}
        >
          <Typography variant="h6">Contact</Typography>
          <div>
            <MailOutlineIcon style={{ fontSize: '2rem' }} />
            <Typography>{user.email}</Typography>
          </div>
        </div>
        <div className="textIconContainer">
          <Typography variant="h6">Gender</Typography>
          <div>
            <WcIcon style={{ fontSize: '2rem' }} />
            <Typography>{user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}</Typography>
          </div>
        </div>
      </div>
      {loggedInUserId === userid && (
        <div className="buttons">
          <button className={`${btnStyles.root} ${btnStyles.single}`}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default LeftSide;