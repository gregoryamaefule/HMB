import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Card.jsx'
import Featured from './Featured.jsx'
import Search from './Search.jsx'
import Hero from './Hero.jsx'
import Footer from './Footer.jsx'

function Home() {
  const [dataa, setDataa] = useState(0)


        
            
        
    useEffect(() => {
      fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=a4651202d4b29201595aa77a24e46589")
        .then(async (result) => {
          const dataa = await result.json();
          setDataa(dataa)
          // console.log(res)
             })
      .catch((err) => {
        
            console.error(err);
           })},[])
    

  return (
    
    <>
      <Hero />
      <Featured />
      <Footer />
    </>
  )
}

export default Home
