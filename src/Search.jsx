import { useState } from 'react'
import iconoir_search from './assets/Search.png'
import './Search.css'

export default function Search ({value, onSearchWordChange, onSubmit}){
    return(
      <form >
        <input 
          type="text" 
          name="q"
          value={value} 
          onChange={(e) => onSearchWordChange(e.target.value)}
          placeholder="What movie do you want to see?"/>
        <button
        onClick={(e) => onSubmit(e)}
        >
          <img src={iconoir_search} />
        </button>
  
      </form>
    )
  }