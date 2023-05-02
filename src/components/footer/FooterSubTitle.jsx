import { Typography } from '@mui/material'
import React from 'react'

function FooterSubTitle({title}) {
    return (
        <div>
            <Typography variant='h6' sx={{marginBottom:'0.5em'}}>{title} </Typography>
        </div>
    )
}

export default FooterSubTitle
