import React, { Component } from 'react';
import API from "../utils/API";

class Signup extends Component {
  state = {
    id: '',
    payed: false,
    type: ''
  }

  componentDidMount() {
    this.changeState(this.props.match.params.id);
  }

  changeState = id => {
    API.getUser(id)
      .then(res =>{
        console.log(res)
        this.setState({ id: res.id  })
      }

      )
      .catch(err => console.log(err));
  };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <div>
        {this.props.match.params.id}
        hello you are here
        <a href='http://localhost:5000/auth/signout'>
      <button> 
      press me
      </button>
    </a>
      </div>
    );
  }
}

export default Signup;
