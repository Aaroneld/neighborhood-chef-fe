import React, { useEffect, useState } from 'react';
import Header from './header/header';
import Sidebar from './sidebar/Sidebar';
import Logo from './logo/logo';
import VariableMainContent from './variable-main-content/variableMainContent';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { styles } from './gridstructure.styles';

//kyles imports
import ls from 'local-storage';
import jwt from 'jwt-decode';
import { USER_BY_EMAIL } from '../../../graphql/users/user-queries';
import { axiosWithAuth } from '../../../utilities/axiosWithAuth';
import { print } from 'graphql';
import { saveUser } from '../../../utilities/actions';

function GridStructure(props) {
  const dispatch = useDispatch();
  const classes = styles();
  const location = useLocation();

  const [isEmpty, setEmpty] = useState(false);

  const [urlLocation, setUrlLocation] = useState(location.pathname.split('/')[1]);
  useEffect(() => {
    setUrlLocation(location.pathname.split('/')[1]);
  }, [location]);

  useEffect(() => {
    if (ls.get('access_token')) {
      const token = ls.get('access_token');
      const decodedToken = jwt(token).sub;
      axiosWithAuth()({
        url: `${process.env.REACT_APP_BASE_URL}/graphql`,
        method: 'post',
        data: {
          query: print(USER_BY_EMAIL),
          variables: {
            queryParams: { email: decodedToken },
            mileRadius: 10,
          },
        },
      })
        .then((res) => {
          dispatch(saveUser(res.data.data.Users[0]));
        })
        .catch((err) => {
          console.log(err);
          console.dir(err);
        });
    }
  }, [dispatch]);

  return (
    <div className={classes['grid-container']}>
      <div className={classes['Logo']}>
        <Logo />
      </div>
      <div className={classes['Sidebar']}>
        <Sidebar active={urlLocation} />
      </div>
      <div className={classes['Header']} style={{ display: `${isEmpty ? 'none' : 'block'}` }}>
        <Header setEmpty={setEmpty} />
      </div>
      <div className={classes['Variable']}>
        <VariableMainContent {...props} active={urlLocation} />
      </div>
    </div>
  );
}

export default GridStructure;
