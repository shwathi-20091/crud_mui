import React from 'react';
import './App.css';
import ToDoItems from './components/ToDoItems';
import  { useState } from 'react'


import Login from './components/login';
//import { Title } from '@material-ui/icons';
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
    const[items,setItems]=useState([]);
    const addItems=(data)=>{
        setItems((prevItems)=>{
            return[...prevItems,data]
        })
    }
   
   const deleteItem=(id) =>{
       setItems((prevItems)=>{
           return prevItems.filter((items,index)=>{
               return index !==id;
           });
        });
        };
      
  return (
    <div className="App">
      <Login addItems={addItems} /> 
      <div>
          <ul>
              {items.map((items, index) => {
                  return<ToDoItems key={index} text={items.Title} text1={items.Desc}  text2={items.Level}  text3={items.Range} deleteItem={deleteItem} id={index}/>;
              })}
          </ul>
      </div>
    </div>
    
  );
}

export default App;
