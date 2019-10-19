import React, { Component } from 'react';

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
        /*counter() {
            this.setState({
                number: this.state.number + 1
            })
            console.log(this.state.number)
        }*/
    render() {
        let output = null
        if (this.state.isInput) {

        } else {
            output = ( <
                div className = "d-flex" >
                <
                h1 className = "display-4" > { this.state.title } < /h1> <
                span className = "ml-auto" >
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