import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {useTheme} from '@mui/material'
import {tokens} from "../theme"
import Typography from '@mui/material/Typography';
import { PropaneSharp } from '@mui/icons-material';



export default function Cards({title,info,imgUrl}) {
    const theme = useTheme()
    const colors= tokens(theme.palette.mode)
  return (
    <Card  sx={{backgroundColor:colors.primary[400],
        maxWidth: 345  }}  >
      <CardMedia
        component="img"
        alt="dev imag"
        height="140"
        image= {imgUrl}/>
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{color:colors.greenAccent[400],
        maxWidth: 345  }}>
         {info}
        </Typography>
      </CardContent>
      
     
    </Card>
    
  );
}