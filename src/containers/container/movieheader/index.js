import React from "react";
import Shrek from "../../../assets/images/shreklogo.png"

export default class MovieHeader extends React.Component{
    render(){
        return(
            <header style={{backgroundColor:'rgba(0,255,0,0.8)', width:'100%',height:'10vh',display:'flex',flexDirection:'row',alignItems:'center', justifyContent:'space-between'}}>
                <input type='text' placeholder="Search for your ogre" style={{backgroundColor:'rgba(0,0,0,0.2)', width:'50%',height:'8vh', border:'none', borderRadius:'20px', margin:'0 5px', padding:'0 50px'}}/>
                <div style={{display:'flex',flexDirection:'row', alignItems:'center', padding:'10px'}}>
                   
                    <h2 style={{margin:'0 30px'}}>Shrek</h2>
                    <div style={{width:'40px', height:'40px', borderRadius:'50%', backgroundColor:'black', overflow:'hidden'}}>
                        <img src={Shrek} style={{width:'80px',height:'80px', transform:'translateX(-25px)'}}></img>
                    </div>
                </div>
            </header>
        )
    }
}