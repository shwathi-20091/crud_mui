import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from '@mui/material/FormControl';
import OutlinedInput from "@mui/material/OutlinedInput";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import { red } from '@mui/material/colors';
import CardActions from '@mui/material/CardActions';
import img from './download.jpeg';



function App() {
//initially creating usestate
  const [Title,setTitle]=useState("");
  const [Author,setAuthor]=useState("");
  const [Publisher,setPublisher]=useState("");
  const [Description,setDescription]=useState("");
  const [Price,setPrice]=useState("");
  const [items,setItems]=useState("");
  const [status,setStatus]=useState("add");
 
  const[id,setId]=useState("");

//when an change is occured in the field,the value is set
  const onChangeTitle=(event)=>{
    setTitle(event.target.value);
  }
  const onChangeAuthor=(event)=>{
    setAuthor(event.target.value);
  }
  const onChangePublisher=(event)=>{
    setPublisher(event.target.value);
  }
  const onChangeDescription=(event)=>{
    setDescription(event.target.value);
  }
  const onChangePrice=(event)=>{
    setPrice(event.target.value);
  }
//when add button is clicked
  const handleSubmit=()=>{
    
    if(Title,Author,Publisher,Description,Price){
      if(status==="add"){//if the status is add,the a new card is created
        let data={
          id:uuidv4(),
        Title,Author,Publisher,Description,Price};
   
    setItems([...items,data]);
  }
  else if (status==="edit"){//if the status is edit,the previous value is edited and saved back to the same card
    let update=items.filter(item=>item.id!==id)
    let editedCard={Title,Author,Publisher,Description,Price}
    setItems([...update,editedCard]);
  }
    setTitle("")
    setAuthor("")
    setDescription("")
    setPublisher("")
    setPrice("")
    setStatus("add")
  }
  else{//if any value is missing,alert  is shown
    alert("Enter all values")
  }
  }
  //if edit icon is clicked,updates all the fiekd and set the status as edit
  const editItem=(id)=>{
    let editData=items.filter(item=>item.id===id)
    setTitle(editData[0].Title)
    setAuthor(editData[0].Author)
    setDescription(editData[0].Description)
    setPublisher(editData[0].Publisher)
    setPrice(editData[0].Price)
    setId(editData[0].id)
    setStatus("edit")
  }
  //when delete icon is clicked,the card is deleted
  const deleteItem=(id)=>{
    let removeCard=items.filter(item=>item.id !==id)
    setItems(removeCard);
  };
  return (
    <div className="App">

      <Box >
        <AppBar  position="static" >
          
            <Typography variant="h6" component="div" style={{textAlign:'center', padding:'30px'}} >
            CRUD OPERATIONS            
             </Typography>
          
        </AppBar>
      </Box> <br></br> <br></br>
      <Box style={{display: "flex", justifyContent:"center" , marginTop:"120px"}}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 500,
            height: 500,
          
          borderColor: 'secondary.main'
        }
          ,
          }}>
        
        <Paper elevation={1} style={{display:"flex" , flexDirection:"column", alignItems:"center", padding:"60px 0 60px 0", margin:"-20px 200px 0 50px", border_color:"black"}}>
          <div>
          <TextField
                  required
                  id="title"
                  label="Title"
                  color="secondary"
                  value={Title }
                  onChange={onChangeTitle}
                />
          </div><br></br>
          
          <div>
          <TextField
                  required
                  id="author"
                  label="Author"
                  color="secondary"
                  value={Author }
                  onChange={onChangeAuthor}
                />
          </div><br></br>
          <div>
          <TextField
                  required
                  id="publisher"
                  label="Publisher"
                  color="secondary"
                  value={Publisher }
                  onChange={onChangePublisher}
                />
          </div><br></br>
            
          <div>
          <TextField
                  id="description"
                  label="Description"
                  multiline
                  rows={4}
                  color="secondary"
                  value={Description}
                  onChange={onChangeDescription}
                /></div><br></br>
          <div>
                <FormControl>
                  <InputLabel color="secondary">Price</InputLabel>
                  <OutlinedInput
                    id="price"
                    type="number"
                    startAdornment={
                      <InputAdornment position="start">₹</InputAdornment>
                    }
                    label="Amount"
                    color="secondary"
                    value={Price}
                    onChange={onChangePrice}
                  />
                </FormControl>
              </div><br></br>
          <div>
            
              <Button onClick={handleSubmit} variant="contained">
              SUBMIT
            </Button>
          </div>

        </Paper>
           {
items && items.map(display => {                return (
                  <Card sx={{maxWidth: 350}}>
                    <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="book">
            B
          </Avatar>
        }
        
        title={display.Title}
        
      />
                    <CardMedia
        component="img"
        height="194"
        image={img}
        alt="Paella dish"
      />

                      <CardContent>
                
                
                        <div>
                        <Typography variant="body2" color="text.secondary">
          {display.Description}
          <Typography variant="subtitle1">
          Price:{display.Price}
          </Typography>
          <Typography>
          Author:{display.Author}
          
          </Typography>
          <Typography>
          Publisher:{display.Publisher}
          </Typography>
        </Typography>
        </div>
        </CardContent>
                     <CardActions disableSpacing>
        <IconButton aria-label="delete">
          <DeleteIcon onClick={()=>deleteItem(display.id)}/>
        </IconButton>
        <IconButton aria-label="edit">
          <EditIcon onClick={()=>editItem(display.id)}/>
        </IconButton>
        </CardActions>
                    
                  </Card>
                ) 
                })
            }
          
      </Box>
      


      
    </div>
  );
}

export default App;
