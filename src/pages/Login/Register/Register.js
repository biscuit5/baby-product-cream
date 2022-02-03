import React, { useState }  from 'react';
import {  Alert, CircularProgress, Container, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import login from '../../../images/login.jpeg'
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Register = () => {

        const [loginData,setLoginData] = useState({});
        const {user,newUser,isLoading,authError} = useAuth();
        const handleOnchage = e =>{
                const field = e.target.name;
                const value = e.target.value;
                const newloginData = { ...loginData};
                newloginData[field]= value ;
                console.log(newloginData)
                setLoginData(newloginData)
        }


        const handleRegisterSubmit = e=>{

                if(loginData.password !== loginData.password2){
                        alert('your password did not match')
                        return;
                }
                newUser(loginData.email,loginData.password)
                e.preventDefault();
        }
        return (
                <Container >
                <Grid  container spacing={2}>
                <Grid sx={{mt:8}} item xs={12} md={6} >
                <Typography variant="body1" gutterBottom>
                      register
                 {!isLoading &&<form  onSubmit={handleRegisterSubmit}>
                      <TextField
                      sx={{width:'75%',margin:1}}
                      id="standard-basic"
                      label="email"
                      type="email"
                      name="email"
                      onChange={handleOnchage}
                      variant="standard"
                      />
                      <TextField
                      sx={{width:'75%',margin:1}}
                      id="standard-basic"
                      label="password"

                      type="password"
                      name="password"
                      onChange={handleOnchage}
                      variant="standard"
                      />
                      <TextField
                      sx={{width:'75%',margin:1}}
                      id="standard-basic"
                      label="retype password"
                      type="password"
                      name="password2"
                      onChange={handleOnchage}
                      variant="standard"
                      />
                      <NavLink to="/login"><Button variant="text">already user please login</Button></NavLink>
                      <Button type="submit" sx={{width:'75%',margin:1}} variant="contained">Register</Button>

                      </form>}
                      {isLoading && <CircularProgress/>}
                      {user?.email && <Alert severity="success">create is a success alert — check it out</Alert>}
                      {authError && <Alert severity="error">{authError}</Alert>}

                      </Typography>

                </Grid>
                <Grid item xs={12} md={6}>
                 <img style={{width:'100%'}} src={login} alt=""/>
                </Grid>

              </Grid>
             </Container>

        );
};

export default Register;