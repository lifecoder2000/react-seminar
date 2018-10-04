import React, { Component } from 'react';
import CheckBox from './components/CheckBox';
import Text from './components/Text';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const list = this.props.todos.map((todo, index) => (
        <p key={index}> {index+1}. {todo}</p>
      )
    )
    return (
      <div>
        <div className="inputArea">
          <CheckBox/>
          <Text/>
        </div>
        <div className="view">
          {list}
        </div>
      </div>
    );
  }
}

// store 안의 state 값을 props 로 연결해줍니다.
const mapStateToProps = (state) => ({
  todos : state.todos,
});

// App 컴포넌트의 Container 컴포넌트
// App 컴포넌트를 어플리케이션의 데이터 레이어와 묶는 역할을 합니다.
const AppContainer = connect(
  mapStateToProps,
  null
)(App);

export default AppContainer;