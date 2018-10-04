import React, { Component } from 'react';

class StateUpdate extends Component {
    state = {
        number : 0
    }
    handleIncrease = () => {
        this.setState({
            number : this.state.number + 1
        })
    }
    render() {
        return (
            <div>
                <p> 숫자 : {this.state.number} </p>
                <button onClick={this.handleIncrease}>+</button>
            </div>
        );
    }
}

export default StateUpdate;