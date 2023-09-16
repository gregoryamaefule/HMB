import { useState, useEffect } from 'react'
import tv from './assets/tv.png'
import home from './assets/home.png'
import calendar from './assets/calendar.png'
import logout from './assets/logout.png'
import MP from './assets/mp.png'
import TVS from './assets/tvs.png'
import './Sidebar.css'

function Sidebar(){



    return(
        <>
        <div className="sbmain">
            <header>
            <a href="/">
                <div>
                <img src={tv} alt="" /> 
                </div>
                <span className="desktop">MovieBox</span></a>
            </header>
            <ul className="mdlinks">
                <li><a href="">
                     <img src={home} alt="" />
                     <span className='desktop'>Home</span></a>
                </li>
                <li className='active'><a href="" >
                    <img src={MP} alt="" />
                    <span className='desktop'>Movies</span>
                    
                </a></li>
                <li><a href="">
                    <img src={TVS} alt="" />
                    <span className='desktop'>TV Series</span>
                    
                </a></li>
                <li><a href="">
                    <img src={calendar} alt="" />
                    <span className='desktop'>Upcoming</span>
                    
                </a></li>
            </ul>
            <div className="quiz">
                <h4>Play movie quizes and earn free tickets</h4>
                <span>50k people are playing now</span>
                <button>Start Playing</button>


            </div>
            <button>
                <img src={logout} alt="" />
                <span className='desktop'>Logout</span>
                
            </button>
        </div>
        </>
    )
}

export default Sidebar