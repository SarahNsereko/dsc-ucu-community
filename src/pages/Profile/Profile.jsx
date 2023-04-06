import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(user) {
  return (
    <Card sx={{ maxWidth: 345}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image='C:/Users/Admin/Desktop/YEAR2SEM2/WebProgramming/DSC_UCU/dsc-ucu-community/src/img/welcome2.jpg'
          alt="profile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div>
          <h2>Welcome, {user.name}!</h2>
        <p>Your email is: {user.email}</p>
        <p>Your ID is: {user.id}</p>
        </div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
