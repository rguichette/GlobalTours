import React from 'react'
import TourCard from '../TourCard'
import Container from '@mui/material/Container';
import Grid  from '@mui/material/Grid';
import SearchAppBar from '../AppBar';
import cities from '../../data.json'
import { Typography } from '@mui/material';


export default function Home() {
  return (
    <div className="Home">
      {/* <SearchAppBar/> */}
      <Container sx={{marginTop: 5, marginBottom: 5}}>
        {cities.map((city, i) =>{

          return <div key={i} >
          
           <Typography variant='h4' component="h4" marginTop={5} marginBottom={3}>Top {city.name} </Typography>
                  <Grid container spacing={3} >

            {city.tours.map((tour, index) =><TourCard tour={tour} key={index} /> )}
        </Grid>
          
          </div>
        })}

      </Container>
    </div>
  )
}
