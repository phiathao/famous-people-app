import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from '../header/header';
import './../../vendors/bootstrap.min.css';
import People from '../people/people.jsx'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <People />
      </div>
    );
  }
}

export default App;
