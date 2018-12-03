import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import PrivateRoute from './components/common/PrivateRoute'
// layoutcomponents
import AppNavBar from './components/layout/AppNavBar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import QuestionsList from './components/QuestionsList';
import UserProfile from './components/UserProfile';
import QuestionModal from './components/QuestionModal';
import {Provider} from 'react-redux';
import { Container } from 'reactstrap'
import store from './store';
import dashboard from './components/dashboard/dashboard';
// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // TODO: Clear current Profile

    // Redirect to login
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      
        <Provider store={store}>
          <Router>
          <div className="App">
            <AppNavBar/>
            <Route exact path="/" component={ Landing }/>
            <div className="container">
              <Route exact path="/register" component={Register}/>
              <Route exact path="/login" component={Login}/>
              <Switch>
              <PrivateRoute exact path="/UserProfile" component={UserProfile}/></Switch>


            </div>
            {/* <AppNavBar/>
            <UserProfile/>
            <Container>
              <QuestionModal/>
            <QuestionsList/>
            </Container> */}
            <Footer/>
          </div>
          
        </Router>
      </Provider>
    );
  }
}

export default App;
