import React, { Component } from 'react';
import Loop from './Loop';

class App extends Component {

  state = {
    number : 1
  }

  handleClick = () => {
    this.setState({ number : this.state.number+1 })
  }

  render() {
    return (
      <Loop number={this.state.number} onClick={ this.handleClick }/>
    );
  }
}

export default App;
