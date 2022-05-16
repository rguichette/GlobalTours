import { Box, Typography } from '@mui/material'
import  Container  from '@mui/material/Container'
import React from 'react'
import CustomAccordion from '../Accordion'
import ImageCollage from '../ImageCollage'
import Paper from "@mui/material/Paper"
import BottomNavigation from "@mui/material/BottomNavigation"
import TransitionsModal from '../Modal'

export default function Tour() {
  return (
    <Container sx={{width: 900}}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the world in Vegas
      </Typography>

<Box marginTop={3} sx={{display: 'flex'}}>
<img height={325} src="https://media.istockphoto.com/photos/panoramic-view-of-las-vegas-strip-at-night-in-nevada-picture-id1166193649?k=20&m=1166193649&s=612x612&w=0&h=4i4jr8mB4HhjGej5sc6xcXE9GO_jks7IO04XymKdLdU=" alt=""/>
<ImageCollage/>
</Box>
<Box marginBottom={10}>
  
<Typography variant="h6" component="h4" marginTop={3}>
        About this ticket
      </Typography>
<Typography variant="paragraph" component="p" marginTop={3}>
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore qui unde nihil provident quae architecto id modi, facere fuga dolorum ea. Consectetur eligendi doloremque excepturi nam unde dolorem sunt maiores fugit enim magni. Corrupti aliquid nam doloribus fugit quaerat earum?
      </Typography>

</Box>
<Box>
  
<Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
       Frequently Asked Questions
      </Typography>
      <CustomAccordion/>
</Box>

<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
     >
      <TransitionsModal/>
        </BottomNavigation>
      </Paper>
    </Container>
  )
}
