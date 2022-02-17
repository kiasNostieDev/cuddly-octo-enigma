import React from 'react'
import Bar from './Bar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import './Reg.css'
import { Alert } from '@mui/material';

class Register extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            mail: 0,
            pwd: 0,
            name: 0,
            phone: 0,
            mailValue: '',
            pwdValue: '',
            nameValue: '',
            phoneValue: ''
        }
        this.handleMailChange = this.handleMailChange.bind(this)
    }

    handleMailChange(e, type) {
        if (type === "mail") {
            this.setState({
                mailValue: e.target.value
            })
        }
        if (type === "name") {
            this.setState({
                nameValue: e.target.value
            })
        }
        if (type === "phone") {
            this.setState({
                phoneValue: e.target.value
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
        <div className='Register'>
          <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '40ch' },}} noValidate autoComplete="off">
                <div className='Inputs'>
                    {
                        this.state.mail === 0 && this.state.name === 0 && this.state.phone === 0 && this.state.pwd === 0
                        ?<div style={{ paddingTop: '70px' }} />
                        :<Alert style={{ marginTop: '20px', marginBottom: '20px' }} severity="error">This is an error alert — check it out!</Alert>
                    }
                    <TextField id="outlined-basic" label="Name" variant="outlined" value={this.state.nameValue} onChange={(e)=>{this.handleMailChange(e,"name")}}/>
                    <div/>
                    <TextField id="outlined-basic" label="Email" variant="outlined" value={this.state.mailValue} onChange={(e)=>{this.handleMailChange(e,"mail")}}/>
                    <div/>
                    <TextField id="outlined-basic" label="Phone Number" variant="outlined" value={this.state.phoneValue} onChange={(e)=>{this.handleMailChange(e,"phone")}}/>
                    <div/>
                    <TextField id="outlined-basic" label="Password" variant="outlined" value={this.state.pwdValue} onChange={(e)=>{this.handleMailChange(e,"pwd")}}/>
                    <div style={{marginTop:'30px'}}/>
                    <Button style={{ backgroundColor: 'black' }} variant="contained" onClick={()=>{console.log(this.state.mailValue,this.state.nameValue,this.state.phoneValue,this.state.pwdValue)}}>Register</Button>
                    <div style={{marginTop:'20px'}}/>
                    <Link to='/' style={{textDecoration:'none'}}><Button style={{backgroundColor: 'red'}} variant="contained">Login existing user</Button></Link>
                </div>
          </Box>
        </div>
      )
    }
  }


class Reg extends React.Component {
    render() {
      return (
        <div>
            <Bar />
            <Register/>
        </div>
      )
    }
}


export default Reg;