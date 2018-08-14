import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import ToolBar from './components/ToolBar';
import UserList from './components/UserList';
import ActiveUser from './components/ActiveUser';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersData: [],
            searchData: [],
            active: null

        }
        this.loadData()
    }

    loadData() {
        const request = new XMLHttpRequest();
        request.open("GET", "data.json", true);

        request.addEventListener("load", () => {
            if (request.status >= 200 && request.status < 400) {
                this.startingData = JSON.parse(request.responseText);
                this.setState({
					usersData: this.startingData,
					active: this.startingData[0]
                });
                console.log(this.state.usersData);
            } else console.log("Houston, we have problems!");
        });

		request.addEventListener("error", () => console.log("Houston, we have problems!"))

        request.send();
    }

    changeState(config) {
        this.setState(config)
    }

    sorting(value, direction) {
        let users = this.state.usersData;

        if (value === "age") {
            if (direction === "forth") users = users.sort((a, b) => a.age - b.age);
            else if (direction === "back") users = users.sort((a, b) => b.age - a.age);
        } else if (value === "name") {
            if (direction === "forth") {
                users = users.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    } else if (a.name < b.name) {
                        return -1;
                    }
                return 0;
                });
            } else if (direction === "back") {
                users = users.sort((a, b) => {
                    if (a.name > b.name) {
                        return -1;
                    } else if (a.name < b.name) {
                        return 1;
                    }
                    return 0;
                });
            }
            // switch(direction) {
            //     case "forth" :
            //         users = users.sort((a, b) => {
            //             if (a.name > b.name) {
            //                 return 1;
            //             } else if (a.name < b.name) {
            //                 return -1;
            //             }
            //             return 0;
            //         });
            //         break;
            //     case "back" :
            //     users = users.sort((a, b) => {
            //         if (a.name > b.name) {
            //             return -1;
            //         } else if (a.name < b.name) {
            //             return 1;
            //         }
            //         return 0;
            //     });
            //     break;
            // }
        }
        this.setState({
            usersData: users
        })

        this.updateActiveUser(this.state.usersData[0]);
    }

    clickFunc(id) {
        this.updateActiveUser(this.getUser(id));
    }

    updateActiveUser(user) {
        this.setState({
            active: user
        })
    }

    getUser(id) {
        const user = this.state.usersData.filter((user) => user.id === id);
        return user[0];
    }

    render() {
        return ( 
			<div className="app container-fluid"> 
				<SearchBar data={this.startingData} callback={this.changeState.bind(this)} />
				<ToolBar callback={this.sorting.bind(this)} />
				<div className="row">
					<UserList users={this.state.usersData} callback={this.clickFunc.bind(this)} />
					<ActiveUser user={this.state.active}  />
				</div>
            </div>
        )
    }
}