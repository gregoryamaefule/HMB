import fb from './assets/fb.png'
import x from './assets/x.png'
import yt from './assets/yt.png'
import ig from './assets/ig.png'
import Button from './assets/Button.png'
import './Footer.css'
import Search from './Search.jsx'

function Footer(){
    return(
        <>
        <div className='footermain'>
            <ul className="socials">
                <li><a href=""><img src={fb} alt="" /></a></li>
                <li><a href=""><img src={ig} alt="" /></a></li>
                <li><a href=""><img src={x} alt="" /></a></li>
                <li><a href=""><img src={yt} alt="" /></a></li>
            </ul>
            <ul className="cobc">
                <li>Conditions of Use</li>
                <li>Privacy & Policy</li>
                <li>Press Room</li>
            </ul>
            <p>(cc) 2023 Movie Box By Gregory Amaefule</p>
        </div>
        </>
    )
}

export default Footer