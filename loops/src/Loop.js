import React, { Component } from 'react';

class Loop extends Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.number}/>
                <br/>
                <input type="button" value="plus" onClick={this.props.onClick}/>
            </div>
        );
    }
}

export default Loop;