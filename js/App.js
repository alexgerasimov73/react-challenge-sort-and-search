import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import ToolBar from './components/ToolBar';
import UserList from './components/UserList';
import ActiveUser from './components/ActiveUser';

// const request = new XMLHttpRequest();
// const url = "data.json";
// request.open("GET", url, true);

// request.addEventListener("load", () => {
//     if (request.status >= 200 && request.status < 400) {
//         const response = JSON.parse(request.responseText);
//         console.log(response);
//     }
// });

// request.send();

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
                const response = JSON.parse(request.responseText);
                this.setState({
					usersData: response,
					active: response[0]
                });
                console.log(this.usersData);
            } else console.log("Houston, we have problems!");
        });

		request.addEventListener("error", () => console.log("Houston, we have problems!"))

        request.send();
    }

    render() {
        return ( 
			<div className="app container-fluid"> 
				<SearchBar />
				<ToolBar />
				<div className="row">
					<UserList users={this.state.usersData} />
					<ActiveUser user={this.state.active} />
				</div>
            </div>
        )
    }
}


// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       phrase: 'Нажми на кнопку!',
//       count: 0
//     };
//   }

//   updateBtn() {
//     const phrases = [
//       'ЖМИ!', 'Не останавливайся!',
//       'У тебя хорошо получается!', 'Красавчик!',
//       'Вот это и есть React!', 'Продолжай!',
//       'Пока ты тут нажимаешь кнопку другие работают!',
//       'Всё хватит!', 'Ну и зачем ты нажал?',
//       'В следующий раз тут будет полезный совет',
//       'Чего ты ждешь от этой кнопки?',
//       'Если дойдёшь до тысячи, то сразу научищься реакту',
//       'ой, всё!', 'Ты нажал кнопку столько раз, что обязан на ней жениться',
//       'У нас было 2 npm-пакета с реактом, 75 зависимостей от сторонних библиотек, '
//       + '5 npm-скриптов и целое множество плагинов галпа всех сортов и расцветок, '
//       + 'а также redux, jquery, mocha, пачка плагинов для eslint и ингерация с firebase. '
//       + 'Не то что бы это был необходимый набор для фронтенда. Но если начал собирать '
//       + 'вебпаком, становится трудно остановиться. Единственное, что вызывало у меня '
//       + 'опасения - это jquery. Нет ничего более беспомощного, безответственного и испорченного, '
//       + 'чем рядовой верстальщик без jquery. Я знал, что рано или поздно мы перейдем и на эту дрянь.',
//       'coub про кота-джедая: http://coub.com/view/spxn',
//       'Дальнобойщики на дороге ярости: http://coub.com/view/6h0dy',
//       'Реакция коллег на ваш код: http://coub.com/view/5rjjw',
//       'Енот ворует еду: http://coub.com/view/xi3cio',
//       'Российский дизайн: http://coub.com/view/16adw5i0'
//     ];
//     this.setState({
//       count: this.state.count + 1,
//       phrase: phrases[parseInt(Math.random() * phrases.length)]
//     });
//   }

//   render() {
//     return (
//       <div className="container app">
//         <Button count={this.state.count} update={this.updateBtn.bind(this)} />
//         <p style={{marginTop: 2 + 'rem'}}>{this.state.phrase}</p>
//       </div>
//     );
//   }
// }