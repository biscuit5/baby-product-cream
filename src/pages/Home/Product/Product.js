import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Product = ({product}) => {
        const {name,description,img} =product
        return (
                <Grid item xs={4} sm={4} md={4} >
                     <Card sx={{ minWidth: 275 }}>
                              <CardMedia
                                component="img"
                                height='194'
                                // style={{ width:'auto',height:'150px', margin:'0 auto'}}

                                image={img}
                                alt="Paella dish"
                              />
                              <CardContent>

                                <Typography variant="h5" component="div">
                                  {name}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                 {description}
                                </Typography>

                              </CardContent>
                              <CardActions>
                                <Button size="small"> buy now </Button>
                              </CardActions>
                        </Card>
                </Grid>
        );
};

export default Product;