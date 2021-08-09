import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";

let MyPostData = [
    {id: 1, text: 'hello', coun: 0},
    {id: 2, text: 'privki', coun: 15},
    {id: 3, text: 'hello', coun: 20},
]
let DataDialogs = [
    {id: 1, name: 'Ilya'},
    {id: 2, name: 'Igor'},
    {id: 3, name: 'Anastasiya'},
    {id: 4, name: 'Vladimir'},
]
let DataMessage = [
    {message: 'hello'},
    {message: 'hi'},
    {message: 'hey'}
]

ReactDOM.render(
    <React.StrictMode>
        <App
            MyPostData={MyPostData}
            DataMessage={DataMessage}
            DataDialogs={DataDialogs}
        />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
