import React, { Component } from "react";
// import { useParams } from "react-router-dom";

export default class Parametros extends Component {

    // constructor(props){
    //     super(props)
    //     console.log(props.match.params.id)
    // }

    // componentDidMount() {
        
    // }

    render() {
        return (
            <div>
                <h1>{this.id}</h1>
                <h2>El indentificador es: {this.title}</h2>
            </div>
        );
    }
}
