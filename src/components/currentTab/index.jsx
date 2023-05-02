import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import './master.css';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CurrentTab() {
  return (
    <div role="presentation" onClick={handleClick} className='breadcrumbs-container'>
      <Breadcrumbs aria-label="breadcrumb" sx={{color:'rgba(0, 0, 0, 0.5)'}}>
        <Link underline="hover" color="rgba(0, 0, 0, 0.5)" href="#">
          MUI
        </Link>
        
        <Link
          underline="hover"
          color="text.primary"
          href="/material-ui/react-breadcrumbs/"
          aria-current="page"
        >
          Breadcrumbs
        </Link>
      </Breadcrumbs>
    </div>
  );
}
