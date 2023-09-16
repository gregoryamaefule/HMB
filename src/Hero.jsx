import { useState, useEffect } from 'react'
import tv from './assets/tv.png'
import menu from './assets/menu.png'
import imbdIcon from './assets/imbd.png'
import pearIcon from './assets/pearIcon.png'
import Button from './assets/button.png'
import './Hero.css'
import Search from './Search.jsx'


function Hero(){
    return(
        <>
        <div className="main"

        style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/w500/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg")`
            
        }}
        
        >
        <div className='herodiv'>
            <div className="header">
                <a href="/"><img src={tv} alt="" /> Movie Box</a>
                <Search />
                <div>
                    <span>
                        <a href="">Sign in</a>
                        <img src={menu} alt="" />
                    </span>
                </div>

            </div>
            <div className="carrd">
                <h2>John Wick: Chapter 3 - Parabellum</h2>
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
            <p>
            Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn.
            </p>
            <img src={Button} alt="" />

            </div>
        </div>

        </div>
        </>
    )
}

export default Hero