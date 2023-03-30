import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


export default function BasicButtonGroup() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button href='/signup' >Signup</Button>
      <Button href='/login'>Login</Button>
     
    </ButtonGroup>
  );
}