import React from 'react';

import CardHeader from '@material-ui/core/CardHeader';
import SubHeader from './subheader/subheader';

import { Icon } from '@iconify/react';
import pencilIcon from '@iconify/icons-mdi/pencil';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Typography from '@material-ui/core/Typography';

import { useSelector, useDispatch } from 'react-redux';
//react router imports

//jsonwebtoken encoder

export default function Header({ classes, event }) {
  const { push } = useHistory();
  const dispatch = useDispatch();
  const currentUserId = useSelector((state) => state.user.id);

  return (
    <div className={classes.headerContainer}>
      <CardHeader
        title={
          <Typography variant="h3" className={classes.title} style={{ marginBottom: '5px' }}>
            {event.title}
          </Typography>
        }
        subheader={<SubHeader classes={classes} event={event} />}
      />
      {event.User.id === currentUserId && (
        <div className={classes.iconsContainer}>
          <DeleteOutlinedIcon className={classes.icon} onClick={removeEvent} />
          <Icon icon={pencilIcon} className={classes.icon} onClick={redirectToEventEdit} />
        </div>
      )}
    </div>
  );
}
