import React, { Component } from 'react';

class CheckBox extends Component {
    handleSwitch = () => {
        this.props.onClick();
    }
    render(){
        return (
            <input type="checkbox" name="switch" onClick={this.props.onClick}/>
        );
    }
}

export default CheckBox;