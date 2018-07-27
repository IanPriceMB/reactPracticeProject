import React, { Component } from 'react';

class Homepage extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    // this.callApi()
    //   .then(res => this.setState({ response: res.express }))
    //   .catch(err => console.log(err));    
  }

  callApi = async () => {
    // const response = await fetch('/api/hello');
    // const body = await response.json();

    // if (response.status !== 200) throw Error(body.message);

    // return body;
  };

  render() {
    return (
      <div>
        <header>
          <a href='http://localhost:5000/auth/google'><span>Sign in</span></a>
          <a href='http://localhost:5000/auth/google'><span>Sign up</span></a>
        </header>
        <img src='#' alt='logo'/>
        <a href='/auth/google'>
          <button> 
          Sign up
          </button>
        </a>
      </div>
    );
  }
}

export default Homepage;
