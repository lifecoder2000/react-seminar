import React, { Component } from 'react';

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

export default Text;