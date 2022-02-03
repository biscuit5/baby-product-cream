import { Grid } from '@mui/material';
import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import OrderModal from '../OrdarModal/OrderModal';

const Order = ({order}) => {
        const [openOrder, setOpenOrder] = React.useState(false);
  const handleOpenOrder = () => setOpenOrder(true);
  const handleCloseOrder = () => setOpenOrder(false);
        const {name,price,description,img} = order;
        return (
                <>
                <Grid item xs={12} sm={6} md={4}>

                        <Card sx={{ minWidth: 275 }}>
                        <CardMedia
                          component="img"
                          height="194"
                          image={img}
                          alt="Paella dish"
                        />
                        <CardContent>

                          <Typography variant="h5" component="div">
                            {name}
                          </Typography>
                          <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            price:${price}
                          </Typography>
                          <Typography variant="body2">
                            {description}
                            <br />
                            {'"a benevolent smile"'}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button onClick={handleOpenOrder} size="small">order now</Button>
                        </CardActions>
                        </Card>
                        </Grid>
                        <OrderModal
                        order={order}
                        openOrder={openOrder}
                        handleCloseOrder={handleCloseOrder}


                        ></OrderModal>
                </>
        );
};

export default Order;