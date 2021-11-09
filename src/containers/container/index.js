import React from "react";
import Header from "./header/index";
import Content from "./content/index";
import MovieHeader from "./movieheader";

export default class Container extends React.Component{
    render(){
        return(
            <div style={{display:'flex',flexDirection:'column', width:'100%'}}>
            <MovieHeader />
            <Content />
            </div>
        )
    }
}