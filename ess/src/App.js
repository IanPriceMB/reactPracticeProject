import React, { Component } from 'react';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Header 
      signin={'Sing In'}
      signout={'Sign Out'}
      />
    );
  }
}

export default App;
