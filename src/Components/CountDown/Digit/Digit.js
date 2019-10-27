import React, { Component } from 'react';
import './Digit.css'

const Digit = (props) => {
    return ( < div className = 'Digit mx-4 text-center'
        style = {
            { borderColor: props.color }
        } >
        <
        h1 className = "display-3 py-5"
        style = {
            { color: props.color }
        } > { props.value } < /h1> < /
        div >
    )
}

export default Digit