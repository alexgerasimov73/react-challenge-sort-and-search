import React, { Component } from 'react';

export default class ToolBar extends Component {
    
    sortFunc(event) {
        let value, direction;
        if (event.target instanceof HTMLButtonElement) {
            value = event.target.value;
            direction = event.target.dataset.direction;
            this.changeDirection(event.target);
        } else {
            value = event.target.parentNode.value;
            direction = event.target.parentNode.dataset.direction;
            this.changeDirection(event.target.parentNode);
        }

        this.props.callback(value, direction);
    }
    
    changeDirection(node) {
        if (node.dataset.direction === "forth") {
            node.dataset.direction = "back";
        } else if (node.dataset.direction === "back") {
            node.dataset.direction = "forth";
        }
    } 

    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <div className="toolbar">
                        <button className="btn btn-default btn-margin" value="name" data-direction="forth" onClick={this.sortFunc.bind(this)} >
                            <i className="fa fa-sort-alpha-asc"></i>
                            <span> Sort by name</span>
                        </button>
                        <button className="btn btn-default btn-margin" value="age" data-direction="forth" onClick={this.sortFunc.bind(this)} >
                            <i className="fa fa-sort-numeric-desc"></i>
                            <span> Sort by age</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}