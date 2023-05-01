import React from 'react';
import Delivery from '@mui/icons-material/LocalShippingOutlined';
import Headset from '@mui/icons-material/HeadsetMicOutlined';
import Verifiction from '@mui/icons-material/VerifiedUserOutlined';

export const featuresData =[
  {
    icon: <Delivery className='icon' sx={{fontSize:"2.5em"}}/>,
    feature: "FREE AND FAST DELIVERY",
    describtion:"Free delivery for all orders over $140"
  },
  {
    icon: <Headset className='icon' sx={{fontSize:"2.5em"}}/>,
    feature: "24/7 CUSTOMER SERVICE",
    describtion:"Friendly 24/7 customer support"
  },
  {
    icon: <Verifiction className='icon' sx={{fontSize:"2.5em"}}/>,
    feature: "MONEY BACK GUARANTEE",
    describtion:"We reurn money within 30 days"
  }
]