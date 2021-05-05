import React from 'react';
import { cardStyles } from '../../../../styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import StatusButtons from './status-buttons/status-buttons';
import Header from './header/Header';
import Details from './details/Details';
import Image from './image/Image';

const RecentCard = (props) => {
  const classes = cardStyles();

  return (
    <Card className={`${classes.root} ${classes.dashboard}`}>
      <Header {...props} />
      <Image {...props} />
      <Details {...props} />
      <div className={classes.dashboardLineBreak} />
      <CardContent>
        <div className={classes.statusButtonContainerDashboard}>
          <Typography variant="h6">Going?</Typography>
          <StatusButtons id={props.id} currentUserId={props.currentUserId} />
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentCard;
