import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AppNavBar from './components/AppNavBar';
import QuestionsList from './components/QuestionsList';
import UserProfile from './components/UserProfile';
import QuestionModal from './components/QuestionModal';
import {Provider} from 'react-redux';
import { Container } from 'reactstrap'
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavBar/>
          <UserProfile/>
          <Container>
            <QuestionModal/>
          <QuestionsList/>
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
