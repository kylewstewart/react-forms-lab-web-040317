import React from 'react';

function isHaiku(poem) {
  const poemLines = poem.split('\n').filter(l => l);
  const isRightAmountOfLines = poemLines.length === 3;
  const hasRightAmountOfWords = countWords(poemLines[0]) === 5 && countWords(poemLines[1]) === 3 && countWords(poemLines[2]) === 5;
  return isRightAmountOfLines && hasRightAmountOfWords;
}

function countWords(line) {
  return line.split(' ').filter(l => l).length
}

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      showError: false
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const value = event.target.value

    if (value) {
      this.setState ({
        value: value,
        showError: !isHaiku(value)
      })
    }
  }

  render() {
    return (
      <div>
        <textarea value={this.value} onChange={this.handleChange} rows="3" cols="60" />
        {this.state.showError === true
          ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>
          : null
        }
      </div>
    );
  }

}
