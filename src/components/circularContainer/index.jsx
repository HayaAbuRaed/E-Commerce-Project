import React from 'react'
import { Typography } from '@mui/material'
import styles from './master.module.css';

function CircularContainer({icon,feature,desc}) {
    return (
        <div className= {styles.circularContainer}> 
            <div className={styles.bigCircle}>
                <div className={styles.smallCircle}>
                {icon}
                </div>
            </div>
            <Typography variant='h3'>{feature}</Typography>
            <p>{desc}</p>
        </div>
    )
}

export default CircularContainer
