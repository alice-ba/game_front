import React, { Component } from 'react';

export default class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastName: '',
      firstName :'',
      login : '', 
      email : ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:8080/user', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        lastName: this.state.lastName,
        firstName: this.state.firstName,
        login:this.state.login,
        email: this.state.email
      })
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
         Nom
          <input
            name="lastName"
            type="string"
            value={this.state.lastName}
            onChange={this.handleInputChange} />
        </label>

        <br />
        <label>
          Prénom
          <input
            name="firstName"
            type="string"
            value={this.state.firstName}
            onChange={this.handleInputChange} />
        </label>

        <br />
        <label>
          Nom d'utilisateur
          <input
            name="login"
            type="string"
            value={this.state.login}
            onChange={this.handleInputChange} />
        </label>

        <br />
        <label>
          E-mail
          <input 
            name="email"
            type="string"
            value={this.state.email}
            onChange={this.handleInputChange} />
        </label>

        <br />
        <button onSubmit={this.handleSubmit} type="submit">
          Submit
        </button>
      </form>
    );
  }
}

