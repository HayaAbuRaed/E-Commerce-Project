import { Typography } from '@mui/material'
import React from 'react'

function Title() {
    return (
        <div>
            <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{ display: { sx: 'block' }, fontWeight:700 }}
            >
                Exclusive
          </Typography>
        </div>
    )
}

export default Title
