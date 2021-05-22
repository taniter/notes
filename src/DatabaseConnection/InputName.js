import React, { Component } from 'react';

class InputName extends Component {
    onChange = (ev) => {
        const name = ev.target.name;
        const value = ev.target.value;
        this.setState({
            [name]: value
        }, () => {
            this.props.onNameInput(this.state);
        });
    }
    onClick = () => {
        this.props.onSaveNameClick();
    }
    render() {
        return (
            <div className="form-group mt-5 text-input">
                <div>Input Name:</div>
                <input onChange={this.onChange} className="form-control" name="content" placoehlder="text..." />
                <i onClick={this.onClick} className="btn btn-primary">Save</i>
            </div>
        );
    }
}

export default InputName;