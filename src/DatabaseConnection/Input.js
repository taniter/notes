import React, { Component } from 'react';

class Input extends Component {

    onChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        }, () => {
            if (this.state)
                this.props.onChangeInput(this.state)
        });

    }
    onSendClick = () => {
        this.props.onSendClick();
    }
    render() {
        return (
            <div className="form-group mt-2 d-flex text-input">
                <input onChange={this.onChange} className="form-control" name="content" placoehlder="text..." />
                <i onClick={this.onSendClick} className="fa btn btn-primary fa-paper-plane"></i>
            </div>
        );
    }
}

export default Input;