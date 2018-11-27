import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header/header';
import './vendors/bootstrap.min.css';
import FamousPeople from './component/famous_people/famousPeople';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <FamousPeople />
      </div>
    );
  }
}

export default App;
