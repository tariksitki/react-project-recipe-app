
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./Button.scss";

export default function Buttons() {
  return (
    <div className='button-div'>
        <Stack spacing={2} direction="row">
          <Button variant="contained" style={{width : "10rem", fontSize : "1rem"}} >LOGIN</Button>
        </Stack>
    </div>
  );
}