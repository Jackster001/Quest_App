import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
// layoutcomponents
import AppNavBar from './components/layout/AppNavBar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';


import QuestionsList from './components/QuestionsList';
import UserProfile from './components/UserProfile';
import QuestionModal from './components/QuestionModal';
import {Provider} from 'react-redux';
import { Container } from 'reactstrap'
import store from './store';

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            <AppNavBar/>
            <Route exact path="/" component={ Landing }/>
            <div className="container">
              <Route exact path="/register" component={Register}/>
              <Route exact path="/login" component={Login}/>

            </div>
            {/* <AppNavBar/>
            <UserProfile/>
            <Container>
              <QuestionModal/>
            <QuestionsList/>
            </Container> */}
            <Footer/>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
