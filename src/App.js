import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Home from './component/Home/Home';
import NavigationBar from './component/NavigationBar/NavigationBar';
import NotFound from './component/NotFound/NotFound';
import Login from './component/Login/Login';
import RegisterForm from './component/RegisterForm/RegisterForm';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import PeopleEvent from './component/PeopleEvent/PeopleEvent';
import Activity from './component/Activity/Activity';


export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        {/* <NavigationBar></NavigationBar> */}
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/registerForm">
            <RegisterForm></RegisterForm>
          </PrivateRoute>
          <Route path="/donation">
            <Activity></Activity>
          </Route>
          <PrivateRoute path="/works/:worksKey">
            <RegisterForm></RegisterForm>
          </PrivateRoute>
          <Route path="/event">
            <PeopleEvent></PeopleEvent>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>


  );
}

export default App;
