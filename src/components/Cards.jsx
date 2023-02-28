import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {useTheme} from '@mui/material'
import {tokens} from "../theme"
import Typography from '@mui/material/Typography';
import { PropaneSharp } from '@mui/icons-material';

export default function Cards({title,info}) {
    const theme = useTheme()
    const colors= tokens(theme.palette.mode)
  return (
    <Card  sx={{backgroundColor:colors.primary[400],
        maxWidth: 345  }}  >
      <CardMedia
        component="img"
        alt="dev image"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {info}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
  );
}