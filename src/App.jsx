import Home from './Home.jsx'
import {BrowserRouter, Route, Routes, Navigate, Link} from 'react-router-dom' 
import Moviedetails from './Moviedetails.jsx'


function App(){
    return(
        <BrowserRouter >
            <Routes >
                <Route path='/HMB' element={<Home />}></Route>
                <Route path='/movies/:id' element={<Moviedetails />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App