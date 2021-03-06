import React, { Component } from 'react';
import UserData from './UserData';

export default class UserList extends Component {
    
    clickFunc(id) {
        this.props.callback(id);
    }

    render() {
        return (
            <div className="col-sm-8 col-md-9 col-lg-10">
                <table className="user-list table table-striped">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.users.map((user) => {
                            return <UserData id={user.id} key={user.id} name={user.name} age={user.age} phone={user.phone} image={user.image} callback={this.clickFunc.bind(this)} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}