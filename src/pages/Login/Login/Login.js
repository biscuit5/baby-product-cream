
import React, { useState } from 'react';
import {  Alert, CircularProgress, Container, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

import login from '../../../images/login.jpeg'
import Button from '@mui/material/Button';
import { NavLink, useLocation, useNavigate, } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
        const [loginData,setLoginData] = useState({});
        const {user,signUser,isLoading,authError} = useAuth();

        const location = useLocation();
        const navigate = useNavigate();

        const handleOnchage = e =>{
                const field = e.target.name;
                const value = e.target.value;
                const newloginData = { ...loginData};
                newloginData[field]= value ;
                console.log(newloginData)
                setLoginData(newloginData);


        };
        const handleLoginSubmit = e =>{


                signUser(loginData.email,loginData.password,location,navigate);
                e.preventDefault();
        };
        return (
               <Container >
                <Grid  container spacing={2}>
                  <Grid sx={{mt:8}} item xs={12} md={6} >
                  <Typography variant="body1" gutterBottom>
                        Login

                  {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                        sx={{width:'75%',margin:1}}
                        id="standard-basic"
                        name='email'
                        label="email"
                        type="email"
                        onChange={handleOnchage}
                        variant="standard"
                        />
                        <TextField
                        sx={{width:'75%',margin:1}}
                        id="standard-basic"
                        name='password'
                        label="password"
                        type="password"
                        onChange ={handleOnchage}
                        variant="standard"
                        />
                        <Button  sx={{width:'75%',margin:1}} type="submit" variant="contained">login</Button>
                        <NavLink to="/register"><Button variant="text">new user please register</Button></NavLink>


                       </form>}
                       {isLoading && <CircularProgress/>}
                      {user?.email && <Alert severity="success">login user successfully</Alert>}
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

export default Login;