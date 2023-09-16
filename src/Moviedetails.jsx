import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './Moviedetails.css'
import { useParams } from 'react-router'
import Sidebar from './Sidebar.jsx'
import MR from './MR.jsx'

function Moviedetails(){
    const {id} = useParams()
    const [detail, setDetail] = useState(0)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a4651202d4b29201595aa77a24e46589`)
          .then(async (result) => {
            const dataa = await result.json();
            setDetail(dataa)
            // console.log(detail)
            // console.log(dataa)
               })
        .catch((err) => {
          
              console.error(err);
             })},[])



    return(
        <>
            <div className="MDcon">
                <Sidebar />
                <MR detail={detail}/>
            </div>
        </>
    )
}

export default Moviedetails