import React, { Component } from 'react';

export default class SearchBar extends Component {
    inputFunc(event) {
        let value = event.target.value;
        this.props.callback(value)
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <form className="searchbar form-group" action="">
                        <input className="form-control" onChange={this.inputFunc.bind(this)} type="text" placeholder="Write here and I will find" />
                    </form>
                </div>
            </div>
        )
    }
}