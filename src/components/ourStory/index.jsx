import React from 'react'
import './master.css'
import path from '../../media/portrait-two-african-females.png'
import { Box, Typography } from '@mui/material'

function OurStory() {
    return (
        <Box display={'flex'} justifyContent={'space-between'} sx={{flexDirection:{xs:'column', md:'row'}}}>
            <Box maxWidth={{xs:'100%', md:'45%'}} >
                <Typography variant='h1' component='h1' fontSize={'3.375rem'} sx={{marginTop: {xs:'10%', md:'26%'}}}>Our Story</Typography>
                <Typography display={'block'} variant="p" sx={{margin:'2.5em 0 1.5em 0'}}>
                    Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active 
                    presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, 
                    Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
                </Typography>
                <Typography display={'block'} variant="p" sx={{marginBottom:'10%'}} >
                    Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse 
                    assotment in categories ranging  from consumer.
                </Typography>
            </Box>
            <Box maxWidth={{xs:'100%', md:'49%'}}>
               <img src={path} alt="portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1" className='females-image' />
            </Box>
            
        </Box>
    )
}

export default OurStory
