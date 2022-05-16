import { useState } from 'react'
import "./app.css"
import TourCard from './components/TourCard'
import Container from '@mui/material/Container';
import Grid  from '@mui/material/Grid';
import SearchAppBar from './components/AppBar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SearchAppBar/>
      <Container sx={{marginTop: 5, marginBottom: 5}}>
        <Grid container spacing={3} >

<TourCard/>
<TourCard/>
<TourCard/>
<TourCard/>
        </Grid>
      </Container>
    </div>
  )
}

export default App
