import React from "react";


export default class Header extends React.Component{
    render(){
        return(
            <header style={{backgroundColor:'gray', width:'100%',height:'25vh'}}>
                <h1>Senior Product Designer</h1>
                <ul>
                    <li>Design</li>
                    <li>Full time</li>
                    <li>Test</li>
                </ul>
            </header>
        )
    }
}