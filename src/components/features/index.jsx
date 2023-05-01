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
  )
}

export default Features