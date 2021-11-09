import react from 'react'
import classes from './menu.module.css'

export default class MenuList extends react.Component{
    constructor(props){
        super(props);
        this.state = {
            titleText: '',
        }
    }

    render(){
        // var noti
        // if(this.props.noti >= 1){
        //     noti = <div className={classes.noti_holder}>{this.props.noti}</div>
        // } else noti = <div></div>

        return(
            <div className={classes.menu_holder}>
                <div className={classes.menu_icon}>
                    <img src={this.props.icon}></img>
                </div>
                <p>{this.props.title}</p>
                {
                    this.props.noti >= 1 && (
                        <div className={classes.noti_holder}>{this.props.noti}</div>
                    )
                }
                {/* {noti} */}
            </div>

        )
    }
}

