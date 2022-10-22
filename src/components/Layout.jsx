import React, { Component } from "react";
import { Outlet } from "react-router-dom";

export default class Layout extends Component {
    render() {
        return (
            <>
                <nav>
                    <ul>
                        <li style={{display: "inline", padding: "15px", border: "1px solid black"}}><a href="/home" style={{textDecoration: "none"}}>Home</a></li>
                        <li style={{display: "inline", padding: "15px", border: "1px solid black"}}><a href="/cine" style={{textDecoration: "none"}}>Cine</a></li>
                        <li style={{display: "inline", padding: "15px", border: "1px solid black"}}><a href="/musica" style={{textDecoration: "none"}}>Musica</a></li>
                        <li style={{display: "inline", padding: "15px", border: "1px solid black"}}><a href="/form" style={{textDecoration: "none"}}>Formulario simpple</a></li>
                        <li style={{display: "inline", padding: "15px", border: "1px solid black"}}><a href="/collatz" style={{textDecoration: "none"}}>Collatz</a></li>
                        <li style={{display: "inline", padding: "15px", border: "1px solid black"}}><a href="/tabla-multiplicar" style={{textDecoration: "none"}}>Tabla de multiplicar</a></li>
                        <li style={{display: "inline", padding: "15px", border: "1px solid black"}}><a href="/tabla-multiplicar2" style={{textDecoration: "none"}}>Tabla de multiplicar2</a></li>
                        <li style={{display: "inline", padding: "15px", border: "1px solid black"}}><a href="/parametros/5/Madrid" style={{textDecoration: "none"}}>Parametros</a></li>
                    </ul>
                </nav>
                <Outlet/>
            </>

        );
    }
}
