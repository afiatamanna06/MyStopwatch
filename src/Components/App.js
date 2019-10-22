import React from 'react';
//import logo from './logo.svg';
import Title from './Title/Title';
import CountDown from './CountDown/CountDown';
import './App.css';

function App() {
    return ( <
        div className = "App" >
        <
        div className = "container py-5" >
        <
        div className = "row" >
        <
        div className = "col-sm-8 offset-sm-2" >
        <
        Title / >
        <
        CountDown / >
        <
        /div> < /
        div > <
        /
        div > <
        /div>
    );
}

export default App;