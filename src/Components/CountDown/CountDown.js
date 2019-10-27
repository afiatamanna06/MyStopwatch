import React, { Component } from 'react';
import Digit from './Digit/Digit';

const CountDown = (props) => {
    return ( < div className = "d-flex" >
        <
        Digit color = "palegreen"
        value = "10" / >
        <
        Digit color = "skyblue"
        value = "05" / >
        <
        Digit color = "salmon"
        value = "03" / >
        <
        /div>
    )
}

export default CountDown