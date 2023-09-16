import { useState, useEffect } from 'react'
import arrowIcon from './assets/arrowicon.png'
import Card from './Card.jsx'
import './Featured.css'
import axios from 'axios'



function Featured(){

    const [feature, setFeature] = useState([])

    useEffect(() => {
        async function fedata() {
            const dat = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=a4651202d4b29201595aa77a24e46589`);
            setFeature(dat.data.results)


        }
        fedata()
        
        },[])

        // console.log(feature)


    // let features = []
    // for (let i = 0; i < 12; i++){
    //     // console.log(feature[i])
    //     features.push(<Card dataa={feature[i]}/>)
    // }

    return(
        <>
        <div className='ft'>
            <h1>Featured Movies</h1>
            <a href="">See More <img src={arrowIcon} alt="" /></a>
        </div>
        <div className="gridd">
            {feature.map((item, index) => {

                return (
                     <Card key={index} dataa={item}/>
                   
                )
            })}
        </div>
        
        </>
    )
}

export default Featured