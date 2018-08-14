import React, { Component } from 'react';

export default class UserData extends Component {
    
    clickFunc(event) {
        this.props.callback(this.props.id);
    }

    render() {
        return (
            <tr onClick={this.clickFunc.bind(this)} key={this.props.key} >
                <td>
                    <img className="user-image" src={"images/" + this.props.image + ".svg"} alt="logo" />
                </td>
                <td>{this.props.name}</td>
                <td>{this.props.age}</td>
                <td>
                    <span>8 </span>
                    <span>{this.props.phone}</span>
                </td>
            </tr>
        )
    }
}
