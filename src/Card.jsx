import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import loveIcon from './assets/Love Icon.png'
import imbdIcon from './assets/imbd.png'
import pearIcon from './assets/pearIcon.png'
import viteLogo from '/vite.svg'
import './Card.css'
import axios from 'axios'

function Card({dataa}){

    const [isFav, setIsFav] = useState(false)
    // const [res, setRes] = useState([])
    // setRes(dataa)

    // console.log(dataa.poster_path)
    const id = dataa.id

    

    // useEffect(() => {
    //     async function fedata() {
    //         const dat = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a4651202d4b29201595aa77a24e46589`);
    //         setRes(dat.data)


    //     }
    //     fedata()

    //     fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a4651202d4b29201595aa77a24e46589`)
    //         .then(async (result) => {
    //              const ress = await result.json();
    //              setRes(ress)
    //              console.log(res)
    //         })
    //         .catch((err) => {

    //             console.error(err);
    //         })
        
        
    //     },[])



        

            

    


    return(
        <>
        <div className='container' data-testid="movie-card">
            <div className="top">
                <img src={`https://image.tmdb.org/t/p/w500${dataa.poster_path}`} alt="" data-testid="movie-title"/>
                <button

                onClick={() =>{setIsFav(!isFav)}}

                style={isFav ? {backgroundColor: 'red'} : null}
                
                
                ><img src={loveIcon} alt="" /></button>
            </div>
            <a href={`/movies/${id}`} className='butom'>
                    <div>
                        {/* {dataa.production_countries[0].name} */}
                        <span data-testid="movie-release-date">{`${dataa.release_date.split('-')[0]}`}</span>
                        <h3 data-testid="movie-title">{dataa.original_title}</h3>
                        <div>
                            <span>
                                <img src={imbdIcon} alt="" />
                                <p>86.0 / 100</p>
                            </span>
                            <span>
                                <img src={pearIcon} alt="" />
                                <p>87%</p>
                            </span>
                            
                        </div>
                        <span>Comedy, Drama, Action</span>
                        
                    </div>
            </a>
        </div>

        </>
    )
}

export default Card