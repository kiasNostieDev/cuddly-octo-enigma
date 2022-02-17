import './App.css';
import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Bar from './Bar';
import { Alert } from '@mui/material';
import {useSelector} from 'react-redux'

class Login extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      mail: 0,
      pwd: 0,
      mailValue: '',
      pwdValue: ''
    }
    // this.loggedin = useSelector(state=>state.log)
  }

  handleValChange(e,type) {
    if (type === "mail") {
        this.setState({
            mailValue: e.target.value
        })
    }
    if (type === "pwd") {
        this.setState({
            pwdValue: e.target.value
        })
    }
  }

  render() {
    return (
      <div className='Login'>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '40ch' },
          }}
          noValidate
          autoComplete="off">
            <div className='Inputs'>
              {
                  this.state.mail === 0 && this.state.pwd === 0
                  ?<div style={{ paddingTop: '70px' }} />
                  :<Alert style={{ marginTop: '20px', marginBottom: '20px' }} severity="error">This is an error alert — check it out!</Alert>
              }
              <TextField id="outlined-basic" label="Email" variant="outlined" value={this.state.mailValue} onChange={(e)=>{this.handleValChange(e,"mail")}}/>
              <div/>
              <TextField id="outlined-basic" label="Password" variant="outlined" value={this.state.pwdValue} onChange={(e)=>{this.handleValChange(e,"pwd")}}/>
              <div style={{marginTop:'30px'}}/>
              <Button style={{backgroundColor: 'black'}} variant="contained">Login To the DashBoard</Button>
              <div style={{marginTop:'20px'}}/>
              <Link to='/register' style={{textDecoration:'none'}}><Button style={{backgroundColor: 'red'}} variant="contained">Register new user</Button></Link>
            </div>
        </Box>
      </div>
    )
  }
}


class App extends React.Component {
  render() {
    return (
      <div>
        <Bar />
        <Login/>
      </div>
    )
  }
}

export default App;
