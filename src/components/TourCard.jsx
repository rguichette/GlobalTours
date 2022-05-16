import React from 'react'
import Paper from '@mui/material/Paper';
import  Grid  from '@mui/material/Grid';
import Typography  from '@mui/material/Typography';
import { Box } from '@mui/material';
import {AccessTime} from "@mui/icons-material"
import Rating from '@mui/material/Rating';
import {createTheme, ThemeProvider} from "@mui/material"


const theme = createTheme({
  components:{
    MuiTypography:{
      variants: [{
        props:{
          variant:"body2"
        },
        style: {
          fontSize:11
        }
      },
      {
        props:{
          variant:"body3"
        },
        style: {
          fontSize:9
        }
      }
    
    ]
    }
  }
})

export default function TourCard({tour}) {
  console.log("tour", tour);
  return (
   
<Grid item xs={3}>
  <ThemeProvider theme={theme}>

    <Paper elivation="4" square>

      <img className='img' varient='subtitle1' src={tour.image} alt=''/>
      <Box paddingX={1}>  <Typography>{tour.name}</Typography>
      
      
      <Box sx ={{
        display:'flex',
        alignItems:'center',
        
      }}>
          <AccessTime sx={{fontSize: "12px"}}/>
          <Typography marginLeft={0.5} variant='body2' component="p"> {tour.duration} hours</Typography>
        </Box>
        <Box marginTop={3} sx ={{
          display:'flex',
          alignItems:'center',
          
          
        }}>
          <Rating name='read-only' value={tour.rating} precision={0.1} size="small" readOnly/>
          <Typography marginLeft={0.5} variant='body2' component="p">{tour.rating}</Typography>
          <Typography marginLeft={0.5} variant='body2' component="p">({tour.numberOfReviews})</Typography>

        </Box>
        <Box>

          <Typography marginTop={0} variant='h6' component="h3">From ${tour.price}</Typography>
        </Box>
      </Box>
    </Paper>
          </ThemeProvider>
</Grid>
  )
}
