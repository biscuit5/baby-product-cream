import React from 'react';


import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';

import babycream1 from '../../../images/babycream1.jpeg'
import babycream2 from '../../../images/babycream2.jpeg'
import babycream3 from '../../../images/babycream3.jpeg'
import babycream4 from '../../../images/babycream4.jpeg'
import babycream5 from '../../../images/babycream5.jpeg'
import babycream6 from '../../../images/babycream6.jpeg'
import babycream7 from '../../../images/babycream7.jpeg'
import babycream8 from '../../../images/babycream8.jpeg'
import babycream9 from '../../../images/babycream9.jpeg'
import babycream10 from '../../../images/babycream10.jpeg'
import Order from '../Order/Order';


const orders =[
        {
                id:1,
          name:'baby losution1' ,
          price : 26,
          description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, culpa libero eligendi deleniti explicabo architecto.',
          img:babycream1

        },
        {
                id:2,
          name:'baby losution2' ,
          price : 26,
          description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, culpa libero eligendi deleniti explicabo architecto.',
          img:babycream2
        },
        {
                id:3,
          name:'baby losution3' ,
          price : 26,
          description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, culpa libero eligendi deleniti explicabo architecto.',
          img:babycream3
        },
        {
                id:4,
          name:'baby losution4' ,
          price : 26,
          description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, culpa libero eligendi deleniti explicabo architecto.',
          img:babycream4
        },
        {
                id:5,
          name:'baby losution5' ,
          price : 26,
          description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, culpa libero eligendi deleniti explicabo architecto.',
          img:babycream5
        },
        {
                id:6,
          name:'baby losution5' ,
          price : 26,
          description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, culpa libero eligendi deleniti explicabo architecto.',
          img:babycream6
        },
        {
                id:7,
          name:'baby losution5' ,
          price : 23,
          description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, culpa libero eligendi deleniti explicabo architecto.',
          img:babycream7
        },
        {
                id:8,
          name:'baby losution5' ,
          price : 23,
          description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, culpa libero eligendi deleniti explicabo architecto.',
          img:babycream8
        },
        {
                id:9,
          name:'baby losution5' ,
          price : 23,
          description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, culpa libero eligendi deleniti explicabo architecto.',
          img:babycream9
        },
        {
                id:10,
          name:'baby losution5' ,
          price : 23,
          description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, culpa libero eligendi deleniti explicabo architecto.',
          img:babycream10
        }
];

const AvailableProduct = () => {
        return (


             <Container>
                   <Typography style={{color:'greenyellow'}} variant="h4" gutterBottom component="div">
                    OUR PRODUCT
                   </Typography>
             <Grid container spacing={2}>

                    {
                        orders.map(order =><Order
                       key={order.id}
                        order={order}
                        >

                        </Order>)
                    }

                </Grid>
             </Container>

        );
};

export default AvailableProduct;