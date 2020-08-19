import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ReactTinyLink } from 'react-tiny-link'


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    float: 'left',
    textAlign: 'center',
    margin: '8px'
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  return (
      // <div style={{padding: '8px', float: 'left'}}>
      //     <ReactTinyLink
      //     width='30vw'
      //     cardSize="large"
      //     showGraphic={true}
      //     maxLine={0}
      //     minLine={0}
      //     url={props.project.project_url}
      //     />
      //     <div style={{backgroundColor: 'white'}}>
      //       <small style={{float: 'right'}}>{props.project.name}</small><span>{props.project.name}</span>
      //     </div>
      // </div>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.project.name}
          height="140"
          image="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?s=1024x768"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.project.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Users are able to plan trips out by searching for various things to do around their location, and may also add other users to join in on the trip to plan out more ideas
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions textAlign='center'> */}
          <div style={{textAlign: 'center'}}>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
        </div>
      {/* </CardActions> */}
    </Card>
  );
}


