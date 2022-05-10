import  { useState } from 'react'
import { Grid,Paper, TextField, Button } from '@material-ui/core'
import * as React from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Radio from '@mui/material/Radio';
import Slider from '@mui/material/Slider';

const Login=(props)=>{
    
    const[Title,setTitle]=useState("");
    const[Desc,setDesc]=useState("");
    const[Level,setLevel]=useState("");
    const[Range,setRange]=useState("");
    
    
   
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
      let data={Title,Desc,Level,Range};
      props.addItems(data)
     
          setTitle("")
          setDesc("")
          setLevel("")
          setRange("")
      }
  
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
   // const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
      <div>  
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    
                    <h2>ToDoList</h2>
                </Grid>
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
                

               
            </Paper>
        </Grid>
        </div>
    )
}

export default Login