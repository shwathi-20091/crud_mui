
import { Grid,Paper} from '@material-ui/core'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from './task.jpeg';

const ToDoItems=(props) =>{
    const paperStyle={padding :20,height:'60vh',width:280, margin:"20px auto"}
    return(
        <div>
            <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt="task"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.text}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.text1} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        difficulty level:{props.text2} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        progress level:{props.text3} 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"  onClick={() => props.deleteItem(props.id)}>delete</Button>
       
      </CardActions>
    </Card>

                </Grid>
                
                </Paper>
        </Grid>
        </div>
    )
}
export default ToDoItems;