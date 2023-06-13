import React, { useEffect } from 'react'
import { API_KEY ,imageUrl} from '../../constents/constents'
import './Banner.css'
import axios from '../../axios'
import { useState } from 'react'


function Banner() {
  const [movie,setMovie]=useState()
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data);
      const movies=response.data.results
      const random = Math.floor(Math.random()*movies.length)
      const randomMovies=movies[random]
            setMovie(randomMovies)
        })

    },[]) 
  return (
    
    <div
    style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.original_title ||movie.name  :" "} </h1>
            <div className='bannerButtons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='discription'> {movie ? movie.overview : " "}</h1>
        </div>
      <div className="fadeBotton">

      </div>
    </div>
  )
}

export default Banner
