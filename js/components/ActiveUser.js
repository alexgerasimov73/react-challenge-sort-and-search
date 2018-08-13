import React, { Component } from 'react';

export default class ActiveUser extends Component {
    

    render() {
        return (
            <div className="col-sm-4 col-md-3 col-lg-2">
                <div className=""thumbnail>
                    <img src={ "images/" + this.props.image + ".svg" } alt="logo" />
                    <div className="thumbnail-caption">
                        <h3>{ this.props.name }</h3>
                        <table className="user-info table table-responsive">
                            <tbody>
                                <tr>
                                    <td>Age:</td>
                                    <td>{ this.props.age }</td>
                                </tr>
                                <tr>
                                    <td>Favorite Animal</td>
                                    <td>{ this.props.image }</td>
                                </tr>
                                <tr>
                                    <td>Phone</td>
                                    <td>
                                        <span>8 </span>
                                        <span>{ this.props.phone }</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            <b>Favorite phrase:</b>
                            <span> </span>
                            <span>{ this.props.phrase }</span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}