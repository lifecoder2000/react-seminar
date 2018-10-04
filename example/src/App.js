import React, { Component } from 'react';
import Introduce from './Introduce';
import TypeCheck from './TypeCheck';
import StateUpdate from './StateUpdate';

class App extends Component{
  render(){
    return(
      <div>
        <StateUpdate /> { /* state 예제 */ }
        <Introduce name='tester'/> { /* props 기본 값 설정 예제 */ }
        <TypeCheck /> { /* props 타입 검증 예제 */ }
      </div>
    )
  }
}
export default App;