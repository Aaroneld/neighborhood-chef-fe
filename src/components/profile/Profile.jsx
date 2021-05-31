import React, { useEffect, useState } from 'react';
import { print } from 'graphql';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import { axiosWithAuth } from '../../utilities/axiosWithAuth';
import { USER_BY_ID } from '../../graphql/users/user-queries';
import { styles } from './profile.styles.js';
import Spinner from '../shared/spinner/Spinner';
import Header from './header/Header';
import Image from '../../assets/sushi.jpg';
import LeftSide from './left-side/LeftSide';
import RightSide from './right-side/RightSide';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [parsedAddressURL, setParsedAddressURL] = useState('');
  const { userid } = useParams();
  const loggedInUserId = useSelector((state) => state.user.id);
  const classes = styles({ user, img: Image });

  useEffect(() => {
    if (userid) {
      setLoading(true);
      axiosWithAuth()({
        url: `${process.env.REACT_APP_BASE_URL}/graphql`,
        method: 'post',
        data: {
          query: print(USER_BY_ID),
          variables: {
            queryParams: {
              id: Number(userid),
            },
          },
        },
      }).then(
        (res) => {
          setLoading(false);
          setUser(res.data.data.Users[0]);
          setEvents(res.data.data.Users[0].UserEvents.owned);
          setParsedAddressURL(
            `https://www.google.com/maps/search/${res.data.data.Users[0].address.replace(' ', '+')}`
          );
        },
        (err) => {
          console.dir(err);
          setLoading(false);
        }
      );
    }
  }, [userid]);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        {user && (
          <Card className={classes.root}>
            <div className="mainContainer">
              <LeftSide
                user={user}
                parsedAddressURL={parsedAddressURL}
                setUser={setUser}
                loggedInUserId={loggedInUserId}
                userid={userid}
              />
              <RightSide events={events} setEvents={setEvents} userFirstName={user.firstName} />
            </div>
          </Card>
        )}
      </>
    );
  }
};

export default Profile;
