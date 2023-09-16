import { useState, useEffect } from 'react'
import './MR.css'

function MR({detail}) {

  console.log(detail)


        
            
        
 

  return (
    <>
    <div className="containermr">

      <div className="backdropimg">
        <img src={`https://image.tmdb.org/t/p/w500${detail.backdrop_path}`} alt="" />
      </div>

      <ul>
        <li className='head'><h2 data-testid="movie-title">{detail.original_title}</h2></li>
        <li>• <span data-testid="movie-release-date">{detail.release_date}</span></li>
        <li>•  <span data-testid="movie-runtime">{detail.runtime}</span> Minutes</li>
        {/* <li>{detail.genres.map((i) => {
          return <span className='genres'>{i.name}</span>
        })}</li> */}
      </ul>

      <p data-testid="movie-overview">{detail.overview}</p>

    </div>
    </>
  )
}

export default MR
