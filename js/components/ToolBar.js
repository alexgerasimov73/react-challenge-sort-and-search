import React, { Component } from 'react';

export default class ToolBar extends Component {
    

    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <div className="toolbar">
                        <button className="btn btn-default">
                            <i className="fa fa-sort-alpha-asc"></i>
                            <span>Sort by name</span>
                        </button>
                        <button className="btn btn-default">
                            <i className="fa fa-sort-numeric-desc"></i>
                            <span>Sort by age</span>
                        </button>
                        <button className="btn btn-danger">
                            <i className="fa fa-ban"></i>
                            <span>Reset</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}