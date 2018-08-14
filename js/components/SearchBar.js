import React, { Component } from 'react';

export default class SearchBar extends Component {

    searchFunc(event) {
        const value = event.target.value;
        const filterData = this.props.data.filter(user => {
            return user.name.toLowerCase().includes(value.toLowerCase());
        });

        this.props.callback({
            usersData: filterData,
            searchData: value,
            active: filterData[0]
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <form className="searchbar form-group" action="">
                        <input className="form-control" onChange={this.searchFunc.bind(this)} type="text" placeholder="Write here and I will find" />
                    </form>
                </div>
            </div>
        )
    }
}