import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Login from './components/Login'
import { Grid } from '@material-ui/core'

ReactDOM.render(
  <React.StrictMode>
    <Grid container spacing={24}>
        <Grid item md={3}>
        <Login />
        </Grid>
       
      </Grid>
    
  </React.StrictMode>,
  document.getElementById('root')
);
