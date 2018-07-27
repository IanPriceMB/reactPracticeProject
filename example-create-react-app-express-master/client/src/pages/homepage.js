import React, { Component } from 'react';
import logo from '../logo.png';
import API from '../utils/API'

const styles = {
  img: {
    maxWidth: 400,
    margin: '0 auto',
    display: 'block'
  }, 
  header: {
    width: '100%',
    float: 'left'
  }, 
  span: {
    padding: 5, 
    float: 'right'
  },
  button: {
    display: 'block',
    backgroundColor: 'blue', 
    borderRadius: 10,
    padding: '15px 30px',
    color: 'white',
    border: 'none',
    margin: '30px auto',
    fontSize: '2em'
  }, 
  text: {
    textAlign: 'center',
  },
}

class Homepage extends Component {
  state = {
    users: [],
    name: "",
    googleId: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.signUp()
  };

  render() {
    return (
      <div>
        <header style={styles.header}>
          <span style={styles.span} onClick={this.handleFormSubmit}>Sign in</span>
          <span style={styles.span} onClick={this.handleFormSubmit}>Sign up</span>
        </header>
        <h1 style={styles.text}>Esports Scouting Services</h1>
        <img style={styles.img} src={logo} alt='logo'/>
          <h3 style={styles.text}>Turn your Elo into Freelo</h3>
          <h4 style={styles.text}>Get <em>aquired</em> today</h4>
          <button style={styles.button} onClick={this.handleFormSubmit}> 
          Sign up
          </button>
      </div>
    );
  }
}

export default Homepage;
