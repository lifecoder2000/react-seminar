import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Text extends Component {
    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.props.append(e.target.value);
            e.target.value = '';
        }
    }
    render() {
        return (
            <input type="text" id="text" onKeyPress={this.handleKeyPress} disabled={this.props.check}/>
        );
    }
}

// store 안의 state 값을 props 로 연결해줍니다.
const mapStateToProps = (state) => ({
    check : state.check,
});

/* 
    액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
*/
const mapDispatchToProps = (dispatch) => ({
    append : (todo) => dispatch(actions.handleTodos(todo)),
});

// Text 컴포넌트의 Container 컴포넌트
// Text 컴포넌트를 어플리케이션의 데이터 레이어와 묶는 역할을 합니다.
const TextContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Text);

export default TextContainer;