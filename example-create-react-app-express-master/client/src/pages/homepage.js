import React, { Component } from 'react';
import logo from '../logo.png';
import API from '../utils/API';
import {GoogleLogin} from 'react-google-login';
import {Redirect} from 'react-router-dom';


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
    backgroundColor: 'black',
    color: 'white',
    border: 'none'
  }, 
  buttonMajor: {
    display: 'block',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
      height: 100,
      width: 300,
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
    id: '',
    googleId: "",
    redirectToReferrer: false
  };

  responseGoogle = (response) => {
    console.log(response)
    this.signUp(response)
  }
  signUp = (res) => {
    if(res.w3.U3){
      API.createUser(res.googleId, {
        firstName: res.w3.ofa, 
        lastName: res.w3.wea, 
        email: res.w3.U3, 
        googleId: res.googleId
      }).then((User) => {
        console.log(User.data)
        console.log('user is: ' + User.config.data);
        this.setState({ id: User.data._id, redirectToReferrer: true })
        
      })
      .catch(err => console.log(err));   
    }
  }

render() {
  if(this.state.redirectToReferrer){
    return (<Redirect to={'/signup/'+this.state.id} />)
  }
    return (
      <div>
        <header class='container-fluid'>
          <div class='row'>
            <div class='col-lg-9' />
            <div class='col-lg-1'>
              <GoogleLogin
                clientId="897176640937-age1bq70pspnr6e64ouunmegbh8urv88.apps.googleusercontent.com"
                buttonText="Sign in"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                style={styles.button}
              />
            </div>
            <div class='col-lg-1'>
              <GoogleLogin
                clientId="897176640937-age1bq70pspnr6e64ouunmegbh8urv88.apps.googleusercontent.com"
                buttonText="Sign up"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                style={styles.button}
              />
            </div>
          </div>
        </header>
      <div class='container-fluid'>
        <div class='row justify-content-center'>
          <h1>Esports Scouting Services</h1>
        </div>
      </div>
      <div class='container-fluid'>
        <div class='row'>
          <div class="col-lg-3 container">
            <div class='row'>
              <div class="col-lg-12">
              </div>
            </div>
          </div>
          <div class="col-lg-3 container">
            <div class='row justify-content-center'>
              <div>
                <img style={styles.img} src={logo} alt='logo'/>
              </div>
            </div>
            <div class='row justify-content-center'>
              <h3>Turn your Elo into Freelo</h3>
            </div>
            <div class='row justify-content-center'>
              <h4>Get <em>aquired</em> today</h4>
            </div>
            <div class='row justify-content-center'>
              <GoogleLogin
                clientId="897176640937-age1bq70pspnr6e64ouunmegbh8urv88.apps.googleusercontent.com"
                buttonText="Sign up"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                style={styles.buttonMajor}
              />
            </div>
          </div>
          <div class="col-lg-3 container">
            <div class='row'>
                <div class="col-lg-12">
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Homepage;
