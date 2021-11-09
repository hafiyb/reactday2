import React from "react";
import Profile from "../../../components/profile"
import Movie from "../movie/index"

import MovieImg1 from "../../../assets/images/shrek.jpg"
import MovieImg2 from "../../../assets/images/shrek2.jpg"
import MovieImg3 from "../../../assets/images/shrek3.jpg"
import MovieImg4 from "../../../assets/images/shrek4.jpg"


const DATA = [
    {
        name: 'Jamal',
        status: 'Dead',
        rating: 3
    },
    {
        name: 'Jimal',
        status: 'Dead',
        rating: 1
    },
    {
        name: 'Jamil',
        status: 'Dying',
        rating: 5
    },
    {
        name: 'Jomol',
        status: 'Alive',
        rating: 2
    },
]

const MOVIEDATA = [
    {
        title: 'Shrek',
        genre: 'Biography/ History',
        img: MovieImg1
    },
    {
        title: 'Shrek 2',
        genre: 'Biography/ History',
        img: MovieImg2
    },
    {
        title: 'Shrek 3',
        genre: 'Biography/ History',
        img: MovieImg3
    },
    {
        title: 'Shrek Forever After',
        genre: 'Biography/ History',
        img: MovieImg4
    },
    {
        title: 'Shrek',
        genre: 'Biography/ History',
        img: MovieImg1
    },
    {
        title: 'Shrek 2',
        genre: 'Biography/ History',
        img: MovieImg2
    },
    {
        title: 'Shrek 3',
        genre: 'Biography/ History',
        img: MovieImg3
    },
    {
        title: 'Shrek Forever After',
        genre: 'Biography/ History',
        img: MovieImg4
    },
    {
        title: 'Shrek',
        genre: 'Biography/ History',
        img: MovieImg1
    },
    {
        title: 'Shrek 2',
        genre: 'Biography/ History',
        img: MovieImg2
    },
    {
        title: 'Shrek 3',
        genre: 'Biography/ History',
        img: MovieImg3
    },
    {
        title: 'Shrek Forever After',
        genre: 'Biography/ History',
        img: MovieImg4
    },
    {
        title: 'Shrek',
        genre: 'Biography/ History',
        img: MovieImg1
    },
    {
        title: 'Shrek 2',
        genre: 'Biography/ History',
        img: MovieImg2
    },
    {
        title: 'Shrek 3',
        genre: 'Biography/ History',
        img: MovieImg3
    },
    {
        title: 'Shrek Forever After',
        genre: 'Biography/ History',
        img: MovieImg4
    },
    {
        title: 'Shrek',
        genre: 'Biography/ History',
        img: MovieImg1
    },
    {
        title: 'Shrek 2',
        genre: 'Biography/ History',
        img: MovieImg2
    },
    {
        title: 'Shrek 3',
        genre: 'Biography/ History',
        img: MovieImg3
    },
    {
        title: 'Shrek Forever After',
        genre: 'Biography/ History',
        img: MovieImg4
    },
    {
        title: 'Shrek',
        genre: 'Biography/ History',
        img: MovieImg1
    },
    {
        title: 'Shrek 2',
        genre: 'Biography/ History',
        img: MovieImg2
    },
    {
        title: 'Shrek 3',
        genre: 'Biography/ History',
        img: MovieImg3
    },
    {
        title: 'Shrek Forever After',
        genre: 'Biography/ History',
        img: MovieImg4
    },
]

export default class Content extends React.Component{
    render(){
        return(
            <div style={{backgroundColor:'rgba(0,255,0,0.9)'}}>
                <h1 style={{margin:'20px'}}>UNLIMITED SHREK WORKS</h1>
                <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', overflow:'scroll', height:'80vh'}}>

                {/* { DATA.map(list => {
                    return <Profile name={list.name} status={list.status} rating={list.rating}/>
                    })
                }

                { DATA.map(function(list){
                    return <Profile name={list.name} status={list.status} rating={list.rating}/>
                    })
                } */}
                

                {
                    MOVIEDATA.map( list => {
                        return <Movie title={list.title} genre={list.genre} img={list.img}/>       
                    })
                }
                


                </div>
                
            </div>
        )
    }
}