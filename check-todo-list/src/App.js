import React, { Component } from 'react';
import CheckBox from './components/CheckBox';
import Text from './components/Text';

class App extends Component {
  state = {
    check : false,
    todos : []
  }
  handleCheck = () => {
    this.setState({
      check : !this.state.check
    })
  }
  handleTodos = (todo) => {
    const { todos } = this.state;
    this.setState({
      todos : todos.concat(todo)
    });
  }
  render() {
    const list = this.state.todos.map((todo, index) => (
        <p key={index}> {index+1}. {todo}</p>
      )
    )
    return (
      <div>
        <div className="inputArea">
          <CheckBox onClick={this.handleCheck}/>
          <Text check={this.state.check} append={this.handleTodos} />
        </div>
        <div className="view">
          {list}
        </div>
      </div>
    );
  }
}

export default App;