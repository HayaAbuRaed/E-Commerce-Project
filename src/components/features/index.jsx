import React from 'react'
import { featuresData } from '../../data';
import CircularContainer from '../circularContainer';
import './master.css'

function Features() {
  return (
    <div className='features-section'>
      {
        featuresData.map((e) =>
          <CircularContainer icon = {e.icon} feature={e.feature} desc={e.describtion} variant={'h6'}/>
        )
      }
    </div>

    // using mui:
    // <div>
    //   <Stack
    //     direction={{ xs: 'column', md: 'row' }}
    //     alignItems={'center'}
    //     spacing={{ xs: 1, sm: 2, md: 4 }}
    //     className='features-section'
    //   >
    //     {
    //        featuresData.map((e) =>
    //             <Item color='primary' sx={{width:'33.33%', boxShadow: 'none'}} >
    //                 <CircularContainer icon = {e.icon} feature={e.feature} desc={e.describtion} variant={'h6'}/>
    //             </Item>
    //         )
    //     }
        
    //   </Stack>
    // </div>
  )
}

export default Features