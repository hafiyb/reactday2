import React from "react";
import Classes from './movie.module.css'



export default class Movie extends React.Component{
    render(){
        return(
            <div className={Classes.card}>
                <img className={Classes.img} src={`${this.props.img}`}/>
                <h4>
                    {this.props.title}
                </h4>
                <p>
                    {this.props.genre}
                </p>
            </div>
        )
    }
}