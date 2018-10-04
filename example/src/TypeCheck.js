import React, { Component } from 'react';
import propType from 'prop-types';

class TypeCheck extends Component {

    static defaultProps = {
        name : ' 기본이름'
    }

    static propTypes = {
        name : propType.string
    }

    render() {
        return (
            <div>
                안녕하세요! 제 이름은 {this.props.name} 입니다. 
            </div>
        );
    }
}

export default TypeCheck;