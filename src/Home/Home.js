import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import Cox from '../Image/Cox.png'
import Sreemongol from '../Image/Sreemongol.png'
import sundorbon from '../Image/sundorbon.png'

import { Link } from 'react-router-dom';
import { UserContext } from '../App';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 180,
    },
  });


const Home = () => {
  const [logInData, setlogInData] = useContext(UserContext);

    const classes = useStyles();   
    return (
        <div>
            <h1 style = {{textAlign: 'center', color: '#008000'}}>Travel Guru</h1>
        
        <div style={{display: 'flex', marginLeft : '130px', marginTop: '5px'}}>
            
            <Card style= {{marginRight: '40px'}} className={classes.root}>
      <div>
        <CardMedia
          className={classes.media}
          image= {Cox}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            COX'S BAZAR
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.
          </Typography>
        </CardContent>
        
        </div>
      <CardActions>
      <Link style={{color:'#0000CD', fontWeight: 'bold', fontSize: 18, marginLeft:'8px'}} to="/confirm/cox-bazar">Click here to book</Link>
      
      
          
        
        
      </CardActions>
    </Card>

    <Card style= {{marginRight: '40px'}} className={classes.root}>
      <div>
        <CardMedia
          className={classes.media}
          image= {Sreemongol}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            SREEMANGAL
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Sreemangal is an Upazila of Moulvibazar District in the Sylhet Division of Bangladesh. 
          </Typography>
        </CardContent>
        </div>
      <CardActions>
      
          <Link style={{color:'#0000CD', fontWeight: 'bold', fontSize: 18, marginLeft:'8px'}} to="/confirm/sreemangal">Click here to book</Link>
    
        
      </CardActions>
    </Card>

    <Card className={classes.root}>
      <div>
        <CardMedia
          className={classes.media}
          image= {sundorbon}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            SUNDARBANS
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh.
          </Typography>
        </CardContent>
        </div>
      <CardActions>
      
          <Link style={{color:'#0000CD', fontWeight: 'bold', fontSize: 18, marginLeft:'8px'}} to="/confirm/sundarbans">Click here to book</Link>
        
        
      </CardActions>
    </Card>
            
        </div>
        </div>

    );
};

export default Home;