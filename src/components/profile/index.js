import React from "react";
import Classes from './profile.module.css'

export default class Profile extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={Classes.card}>
                <div className={Classes.cardupper}>
                    <div className={Classes.profile_img}></div>
                    <div className={Classes.namebar}>
                        <h4>{this.props.name}</h4>
                        <p>{this.props.status}</p>
                    </div>
                    <div className={Classes.dotsbar}>
                        <div className={Classes.dots}></div>
                    </div>
                </div>
                <hr />
                <div className={Classes.cardlower}>
                    <div className={`${Classes.starbar} ${
                        this.props.rating >= 3 ?
                        Classes.highrating :
                        Classes.lowrating
                        }`}>
                        <div className={Classes.star}></div>
                        <div className={Classes.star}></div>
                        <div className={Classes.star}></div>
                        <div className={Classes.star}></div>
                        <div className={Classes.star}></div>
                    </div>
                    <div className={Classes.iconbar}>
                        <div className={Classes.icon}></div>
                        <div className={Classes.icon}></div>
                    </div>
                </div>
            </div>
        )
    }
}