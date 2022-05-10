import  { useState } from 'react'
import { Grid,Paper, TextField, Button } from '@material-ui/core'
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';

import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


import img from './task.jpeg';


const Login=()=>{

    const[Title,setTitle]=useState("");
    const[Desc,setDesc]=useState("");
    const[Level,setLevel]=useState("");
    const[Range,setRange]=useState("");
    const[items,setItems]=useState([]);
    const[status,setStatus]=useState("add");
    const [counter, setCounter] = useState(1);
    const[id,setId]=useState("");
  
    const handleChangeTitle=(event)=>{
      setTitle(event.target.value);
  }
  const handleChangeDesc=(event)=>{
      setDesc(event.target.value);
  }
  const handlechangeLevel=(event)=>{
    setLevel(event.target.value);
  }
 const handleChangeRange=(event)=>{
     setRange(event.target.value);
 }
 
  const handleSubmit=(e)=>{
      e.preventDefault();
      if(status==="add"){
      let data={
          id:counter,
          Title,Desc,Level,Range};
      //console.log(data)
      setCounter(counter+1);
      setItems([...items,data])
      }
      else{
          let update=items.filter(item=>item.id!==id)
      let editedCard={Title,Desc,Level,Range}
       setItems([...update,editedCard]);
      }
          setTitle("")
          setDesc("")
          setLevel("")
          setRange("")
          setStatus("edit");
      }
      
    
    
   const editItem=(id) =>{
       let editData = items.filter(item=>item.id === id)
       console.log(editData)
       setTitle(editData[0].Title)
       setDesc(editData[0].Desc)
       setLevel(editData[0].Level)
       setRange(editData[0].Range)
       setId(editData[0].id);
   }
   const deleteItem=(id) =>{
       let removeCard=items.filter(item=>item.id !== id);
       //console.log(removeCard)
       setItems(removeCard);
        };
   const paperStyle={padding :20,height:'65vh',width:280, margin:" auto" }
    const paperStyle1={padding :20,height:'50vh',width:280, right:"0px",
 backgroundColor: "blue",
        border: "1px solid black"
      }
   // const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
      <div classNAme="Layout">  
        <Grid container spacing={1}>
        <Paper elevation={10} style={paperStyle}>
             <Grid item xs={6} md={8}>
                    <item>
                    
                    <h2>ToDoList</h2>
                    
                        <form>
                        <TextField label='title' 
                        placeholder='Enter title' 
                        type="text"
                        value={Title}
                        onChange={handleChangeTitle}
                        fullWidth required/>

                        <TextField label='description' 
                        placeholder='Enter description' 
                        type="text"
                        value={Desc}
                        onChange={handleChangeDesc}
                        fullWidth required/>

                    <FormControl>
                    <FormLabel id="level">Difficulty</FormLabel>
                    <RadioGroup
                        value={Level}
                        onChange={handlechangeLevel}
                        defaultvalue="easy"
                        name="level"
                    >
                            <FormControlLabel value="easy" control={<Radio />} label="Easy" />
                            <FormControlLabel value="moderate" control={<Radio />} label="Moderate" />
                            <FormControlLabel value="difficult" control={<Radio />} label="Difficult" />
                            </RadioGroup>
                            </FormControl>
                            <FormGroup>
                            <FormLabel id="level">progress level</FormLabel>
                            <Slider
                            value={Range}
                            size="small"
                            defaultValue={70}
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            onChange={handleChangeRange}
                        />
                        </FormGroup>
        
                        <Button type='submit' 
                        color='primary' 
                        variant="contained" 
                        style={btnstyle} 
                        onClick={handleSubmit}
                        
                        fullWidth  >ADD</Button>
                        </form>
                   
                    </item>
                    
                    </Grid>
            
       
     
                <Grid item xs={6} md={4}>
                    <item>
                    {
                    items && items.map(display => {
                        return(
                    <Paper elevation={10} style={paperStyle1}>
                        <Card sx={{ maxWidth: 345 }} >
                            <CardMedia
                            component="img"
                            height="140"
                            image={img}
                            alt="task"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {display.Title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                {display.Desc} 
                                </Typography>
                                <Typography>
                                Difficulty level:{display.Level}
                                </Typography>
                                <Typography>
                                progress level:{display.Range}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small"   onClick={()=>deleteItem(display.id)}>delete</Button>
                                <Button size="small"   onClick={()=>editItem(display.id)}>update</Button>
                             </CardActions>
                        </Card>
                    </Paper> 
                    )
                    })}
                    </item>
                </Grid>
            </Paper>
        </Grid>
        
     
    </div>
      

    )
}

export default Login