import React from 'react';
import Delivery from '@mui/icons-material/LocalShippingOutlined';
import Headset from '@mui/icons-material/HeadsetMicOutlined';
import Verifiction from '@mui/icons-material/VerifiedUserOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Dollar from '@mui/icons-material/MonetizationOnOutlined';
import People from '@mui/icons-material/PeopleAltOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';

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
  },
]

export const informationData = [
  {
  icon: <StorefrontIcon className='icon' sx={{fontSize:"2.5em"}}/>,
  feature: "10.5k ",
  describtion:"Sallers active our site"
},
{
  icon: <Dollar className='icon' sx={{fontSize:"2.5em"}}/>,
  feature: "33k",
  describtion:"Mopnthly Produduct Sale"
},
{
  icon: <People className='icon' sx={{fontSize:"2.5em"}}/>,
  feature: "45.5k",
  describtion:"Customer active in our site"
},
{
  icon: <LocalAtmOutlinedIcon className='icon' sx={{fontSize:"2.5em"}}/>,
  feature: "25k",
  describtion:"Anual gross sale in our site"
}
]
