import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import header from '../../../images/header.jpeg'


const ProductBanner = () => {

        return (
                <Container>
                <Box sx={{ flexGrow: 1,mt:4}}>
                     <Grid container spacing={2}>
                       <Grid style={{ textAlign:'left'}}  xs={6} md={6}>
                              <Typography style={{ color:'indianred'}} variant="h3" gutterBottom component="div">
                                      ALWAYS KEEP SMILE <br/>
                                      YOUR BABY
                             </Typography>
                             <Typography style={{ fontSize:14,fontWeight:300, color:'grey' }} variant='h6'>
                             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, culpa libero eligendi deleniti explicabo architecto.
                             </Typography>
                             <Button variant="contained">LEARN MORE</Button>
                       </Grid>
                       <Grid  xs={6} md={6} >
                       <img style={{width:'450px'}} src={header} alt=""/>
                       </Grid>

                     </Grid>
                   </Box>
       </Container>

        );
};

export default ProductBanner;