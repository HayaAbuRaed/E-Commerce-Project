import React from 'react'
import { Typography } from '@mui/material'
import styles from './master.module.css';

function CircularContainer({icon,feature,desc,variant,itemOrder=0}) {
    return (
        <div className= {styles.circularContainer} > 
            <div className={styles.bigCircle} style={{backgroundColor: itemOrder === 1 ? 'rgba(255, 255, 255, 0.3)' : '', color: itemOrder === 1 ? '#000' : ''}}>
                <div 
                className={styles.smallCircle} 
                style={{backgroundColor: itemOrder === 1 ? 'rgba(255, 255, 255, 1)' : ''}}>
                    {icon}
                </div>
            </div>
            <Typography variant={variant} sx={{color: itemOrder === 1 ? '#fffff' : '#000000'}}>{feature}</Typography>
            <Typography variant='p' sx={{color: itemOrder === 1 ? '#fffff' : '#000000'}}>{desc}</Typography>
        </div>
    )
}

export default CircularContainer
