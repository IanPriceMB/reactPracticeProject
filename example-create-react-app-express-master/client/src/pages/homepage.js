import React, { Component } from 'react';
import logo from '../logo.png';
import API from '../utils/API';
import GoogleLogin from 'react-google-login';
import {Redirect, Link} from 'react-router-dom';


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

  responseGoogle = (response) => {
    console.log(response)
    // if()
    this.signUp(response)
  }
  signUp = (res) => {
    if(res.w3.U3){
      API.updateUser(res.googleId, {
        firstName: res.w3.ofa, 
        lastName: res.w3.wea, 
        email: res.w3.U3, 
        googleId: res.googleId
      }).then((User) => {
        console.log(User.data)
        console.log('user is: ' + User.config.data);
        this.setState({ id: User.data._id, payed: User.data.payed, type: User.data.type })
      })
      .catch(err => console.log(err));   
    }
  }

render() {
  if(this.state.redirectToReferrer){
    return (<Redirect to={'/home'} />)
  }
    return (
      <div>
        <header style={styles.header}>
          <Link to={'/signup'}>Sign in</Link>
          <span style={styles.span}>
            <GoogleLogin
              clientId="897176640937-age1bq70pspnr6e64ouunmegbh8urv88.apps.googleusercontent.com"
              buttonText="Sign up"
              style={styles.button}
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
            />
          </span>
        </header>
        <h1 style={styles.text}>Esports Scouting Services</h1>
        <img style={styles.img} src={logo} alt='logo'/>
          <h3 style={styles.text}>Turn your Elo into Freelo</h3>
          <h4 style={styles.text}>Get <em>aquired</em> today</h4>
          <GoogleLogin
            clientId="897176640937-age1bq70pspnr6e64ouunmegbh8urv88.apps.googleusercontent.com"
            buttonText="Sign up"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            style={styles.button}
          />
      </div>
    );
  }
}

export default Homepage;
