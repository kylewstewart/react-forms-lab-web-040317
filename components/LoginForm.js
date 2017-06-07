import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleSubmit(event){
    event.preventDefault();

    if(!this.state.username || !this.state.password){
      return;
    }

    this.props.onSubmit({"username": this.state.username, "password": this.state.password})
    this.setState({
      username: '',
      password: ''
    })
  }

  handleInputChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input name="username" value={this.state.username} onChange={this.handleInputChange} id="test-username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input name="password" value={this.state.password} onChange={this.handleInputChange} id="test-password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
