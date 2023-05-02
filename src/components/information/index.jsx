import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import CircularContainer from '../circularContainer';
import {informationData} from '../../data'
import styles from './master.module.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing("2.1875em"),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width:'25%',
}));

export default function Information() {
  return (
    <div>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        alignItems={'center'}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        sx={{
            "& > *": {
              border: "1px solid #ccc",
            },
          }}
          className={styles.infoContainer}
      >
        {
            informationData.map((e,index) =>
                <Item color='primary' className={styles.stackItem}>
                    <CircularContainer icon = {e.icon} feature={e.feature} desc={e.describtion} variant={'h4'} itemOrder={index}/>
                </Item>
            )
        }
      </Stack>
    </div>
  );
}
