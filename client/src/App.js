import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AppNavBar from './components/AppNavBar';
import QuestionsList from './components/QuestionsList';
import UserProfile from './components/UserProfile';

class App extends Component {
  render() {
    return (
      <div className="App">

        <AppNavBar/>
        <UserProfile/>
        <QuestionsList/>
        
        
      </div>
    );
  }
}

export default App;
