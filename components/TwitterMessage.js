import React from 'react';

export default class TwitterMessage extends React.Component {

  constructor() {
    super();

    this.state = {
       value: '',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  // handleChange = event => {
  //     this.setState({
  //       value: event.target.value,
  //     });
  //   }

  handleChange(event) {
      this.setState({
        value: event.target.value,
      });


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }

}
