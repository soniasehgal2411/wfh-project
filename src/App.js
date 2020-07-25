import React, { Component } from 'react';
// import Router from 'react-router';
import './App.css';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';

class App extends Component {
  render() {
    const name = 'Sonia Sehgal';
    const status = false;

    return (
      <React.Fragment>
        <h1 style={{ textAlign: "center" }}>This section is the basic use of props</h1>
        <h2>Hello {name}</h2>
        {status ? <h3>Status verified...</h3> : <h4>{name} status not verified</h4>}
        <Navbar topic="Github Project" />
        <UserItem />
      </React.Fragment>
    );
  }
}

export default App;
