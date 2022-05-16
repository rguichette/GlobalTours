import { useState } from 'react'
import TourCard from './components/TourCard'
import Container from '@mui/material/Container';
import Grid  from '@mui/material/Grid';
import SearchAppBar from './components/AppBar';
import cities from './data.json'
import { Typography } from '@mui/material';
import Home from './components/pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import "./app.css"
import Tour from './components/pages/Tour';

function App() {
  const [count, setCount] = useState(0)
  
  return (
  <div className="App">
    <BrowserRouter>
    <SearchAppBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:id" element={<Tour/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
