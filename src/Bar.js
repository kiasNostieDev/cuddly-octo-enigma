import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

class Bar extends React.Component{
    render() {
      return (
        <AppBar position="static" style={{backgroundColor: '#1f1f1f'}}>
          <Toolbar>
            <Typography style={{fontFamily: 'Comfortaa'}} variant="h5" component="div" sx={{ flexGrow: 1 }}>
              USERMANAGER
            </Typography>
            <Link to='/register' style={{textDecoration:'none', color:'white'}}><Button color="inherit">Register</Button></Link>
          </Toolbar>
        </AppBar>
      )
    }
}
  
export default Bar;