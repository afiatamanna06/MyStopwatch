import React, { Component } from 'react';
import './Title.css'
class Title extends Component {
    state = {}
    constructor(props) {
        super(props)
        this.state = {
            //number: 0
            title: 'This is a dummy title',
            isInput: false
        }
    }
    editHandler() {
            this.setState({
                ...this.state,
                isInput: true
            })
        }
        /*counter() {
            this.setState({
                number: this.state.number + 1
            })
            console.log(this.state.number)
        }*/
    render() {
        let output = null
        if (this.state.isInput) {
            output = < p > Me happy < /p>
        } else {
            output = ( <
                div className = "d-flex Title" >
                <
                h1 className = "display-4" > { this.state.title } < /h1> <
                span onClick = {
                    () => this.editHandler()
                }
                className = "ml-auto edit-icon" >
                <
                i className = "fas fa-pencil-alt" > < /i> < /
                span > <
                /div>
            )
        }
        return ( < div > { output } <
            / div > );
        }
    }

    export default Title;