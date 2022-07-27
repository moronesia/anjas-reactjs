import React from "react";

class ClassComponent extends React.Component {
    state = {
        value: 0
    }

    handlePlus = () => {
        this.setState({value: this.state.value + 1});
    }

    handleMinus = () => {
        if(this.state.value > 0) {
            this.setState({value: this.state.value - 1});
        }
    }

    render() {
        return (
            <div>
                 <h1>Hei {this.props.nama}, Are you ready for this?</h1>
                 <h2>Yes, I'm ready</h2>
                 <button onClick={this.handleMinus}>-</button>
                 <span>{` `} {this.state.value} {` `}</span>
                 <button onClick={this.handlePlus}>+</button>
            </div>
        )
    }
}

export default ClassComponent;