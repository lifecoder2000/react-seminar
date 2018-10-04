import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CheckBox extends Component {
    render(){
        return (
            <input type="checkbox" name="switch" onClick={this.props.onClick}/>
        );
    }
}

/* 
    액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
*/
const mapDispatchToProps = (dispatch) => ({
    onClick : () => dispatch(actions.handleCheck()),
});

// CheckBox 컴포넌트의 Container 컴포넌트
// CheckBox 컴포넌트를 어플리케이션의 데이터 레이어와 묶는 역할을 합니다.
const CheckBoxContainer = connect(
    null,
    mapDispatchToProps
)(CheckBox);

export default CheckBoxContainer;