import React, { Component } from 'react';

class Item_Notes extends Component {
    onDeleteClick = () => {
        this.props.onDeleteClick(this.props.value.key);
    }
    render() {
        const value = this.props.value.val();
        return (
            <div className="note m-1 d-flex p-2 bg-white">
                <h6 className="time">{value.date}</h6>
                <h6 className="ml-3 content">{value.content}</h6>
                <div onClick={this.onDeleteClick} className="fa fa-times-circle text-danger delete"></div>
            </div>
        );
    }
}

export default Item_Notes;