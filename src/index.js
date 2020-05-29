/*
 * @description: 
 * @Author: WE1ZHANTA0
 * @Creat: 2019-07-02 14:45:44
 * @lastTime: 2019-07-02 14:45:44
 * @LastAuthor: WE1ZHANTA0
 */
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
