import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

type props = {
  newsList: any
}

export default function ActionAreaCard({ newsList }: props) {
  return (
    <>
      {newsList.map((item:any, index:any) => {
        return (
          <Card sx={{ maxWidth: 345 }} key={index}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={item.src}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        )
      })}
    </>
  );
}
