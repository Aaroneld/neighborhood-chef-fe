import React from 'react';
import './App.css';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/utils/private-route';
import GenericRedirect from './components/utils/generic-redirect';
import LoginRedirect from './components/utils/login-redirect';
import Register from './components/register/Register';
import ChangePassword from './components/change-password/PasswordChangePage';
import CheckEmail from './components/check-email/CheckEmail';
import DatePicker from './components/create-events/form-container/form-page-one/date-input/datepicker';
import MobileNavigation from './components/mobile-navigation/mobile-navigation';
import Login from './components/login/Login';
import GridStructure from './components/shared/grid-structure/gridstructure';

function App() {
  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/wakeup`)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Switch>
        <Route path="/date">
          <DatePicker
            setDate={(date) => {
              return;
            }}
          />
        </Route>
        <Route path="/login-redirect-url" component={LoginRedirect} />
        <Route path="/generic-redirect/:redirect_path" component={GenericRedirect} />
        <Route exact path="/" component={Login} />
        <Route path="/initialChangePassword/:string" component={ChangePassword} />
        <PrivateRoute path="/dashboard" component={GridStructure} />
        <PrivateRoute path="/create-event" component={GridStructure} />
        <PrivateRoute path="/create-event/:event_string" component={GridStructure} />
        <PrivateRoute path="/view-events" component={GridStructure} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/events/:id" component={GridStructure} />
        <PrivateRoute path="/profile/:userid" component={GridStructure} />
        <PrivateRoute path="/settings" component={GridStructure} />
        <Route path="/register-check-email" component={CheckEmail} />
        <PrivateRoute path="/navigation" component={MobileNavigation} />
      </Switch>
    </div>
  );
}

export default App;
