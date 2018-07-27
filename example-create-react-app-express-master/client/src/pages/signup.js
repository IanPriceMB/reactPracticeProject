import React, { Component } from 'react';
import API from "../utils/API";
import {
Link,
} from 'react-router-dom';

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

class Signup extends Component {
  state = {
    id: '',
    payed: false,
    type: ''
  }

  componentDidMount() {
    this.changeState(this.props.match.params.id);
  };
  changeState = id => {
    API.getUser(id)
      .then(res =>{
        this.setState({ id: res.data._id, payed: res.data.payed, type: res.data.type })
      })
      .catch(err => console.log(err));
  };
  updateUser = (id, data) => {
    API.updateUser(id, data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  updateTypePlayer = () => {
    this.setState({
     type: 'player'
    });
  };
  updateTypeUniversity = () => {
    this.setState({
     type: 'university'
    });
  };
  comeBackToThis = () => {
    this.setState({
      payed: true
    })
  }
  signOut = () => {
    API.signOut()
    .then(res => console.log(res))
    .catch(err => console.log(err));
  };
  pressMe = () => {
    console.log(this.state)
  };

  render() {
    return (
      <div>
        <header style={styles.header}>
          <span style={styles.span} onClick={this.signOut}>Sign out</span>
        </header>
        <h1 style={styles.text}>Esports Scouting Services</h1>
        {this.state.id && !this.state.payed && this.state.type === '' ? (
          <div>
            <h2 style={styles.text}>
              Are you a boy or a girl?
            </h2>
            <button style={styles.button} onClick={() => this.updateTypePlayer()}>Player</button>
            <button style={styles.button} onClick={() => this.updateTypeUniversity()}>University</button>
          </div>
        ): 
        this.state.id && !this.state.payed && (this.state.type === 'player' || 'university') ? (
          <div>
            <h2 style={styles.text}>
              Payment Information: 
            </h2>
            <button style={styles.button} onClick={() => this.comeBackToThis()}>yes to paid</button>
          </div>) : 
        this.state.id && this.state.payed && (this.state.type === 'player' || 'university') ? (
          <Link to={'/profile/' + this.state.id}>
            <button style={styles.button} onClick={() => this.updateUser(this.state.id, { type: this.state.type, payed: this.state.payed})}>
              next
            </button>
          </Link>) : 
        (
          <div>
            nothing for you!
          </div>
        )}
        {/* <button onClick={() => this.pressMe()}> 
          press me
        </button> */}
      </div>
    );
  }
}

export default Signup;
