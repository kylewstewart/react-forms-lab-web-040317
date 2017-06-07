import React from 'react';

export default class TwitterMessage extends React.Component {

  constructor(props) {
    super(props);

    const max = props.maxChars

    this.state = {
       value: '',
       count: max,
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
      this.setState((prevState) => ({
        count: prevState.count - 1
      }))
      this.setState({
        value: event.target.value,
      })
    }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <p> Remaining: {this.state.count}</p>
      </div>
    );
  }

}
