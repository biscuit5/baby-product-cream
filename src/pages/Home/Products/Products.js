import React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';

import babycream1 from '../../../images/babycream1.jpeg'
import babycream2 from '../../../images/babybanner2.jpeg'
import babycream3 from '../../../images/babycream3.jpeg'
import babycream4 from '../../../images/babycream4.jpeg'
import babycream5 from '../../../images/babycream5.jpeg'
import Product from '../Product/Product';

const products =[
        {
          name:'baby losution1' ,
          description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, culpa libero eligendi deleniti explicabo architecto.',
          img:babycream1
        },
        {
          name:'baby losution2' ,
          description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, culpa libero eligendi deleniti explicabo architecto.',
          img:babycream2
        },
        {
          name:'baby losution3' ,
          description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, culpa libero eligendi deleniti explicabo architecto.',
          img:babycream3
        },
        {
          name:'baby losution4' ,
          description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, culpa libero eligendi deleniti explicabo architecto.',
          img:babycream4
        },
        {
          name:'baby losution5' ,
          description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, culpa libero eligendi deleniti explicabo architecto.',
          img:babycream5
        },
        {
          name:'baby losution5' ,
          description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, culpa libero eligendi deleniti explicabo architecto.',
          img:babycream5
        }
];

const Products = () => {
        return (
                <Box sx={{ flexGrow: 1 }} mt={4}>
                <Typography style={{color:'greenyellow'}} variant="h4" gutterBottom component="div">
                    OUR PRODUCT
                   </Typography>
             <Container>
             <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
             {
               products.map(product => <Product
                     key={product.name}
                     product ={product}
               >

               </Product>)
             }
             </Grid>
             </Container>
           </Box>
        );
};

export default Products;