import React from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

const OrderModal = ({handleOrderClose,openOrder,order}) => {
        const {name,price} = order;
        const handleOrderSubmit =e =>{
                handleOrderClose()
                e.preventDefault()

        }
        return (
                <Modal
                open={openOrder}
                onClose={handleOrderClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                   {name}
                  </Typography>
                        <form onSubmit={handleOrderSubmit}>
                        <TextField
                          disabled
                          sx={{ width:'90%',margin:1}}
                          id="outlined-size-small"
                          defaultValue={price}
                          size="small"
                        />

                        <TextField

                          sx={{ width:'90%',margin:1}}
                          id="outlined-size-small"
                          defaultValue="your name"
                          size="small"
                        />
                        <br></br>
                        <TextField

                          sx={{ width:'90%',margin:1}}
                          id="outlined-size-small"
                          defaultValue="your email"
                          size="small"
                        />
                        <TextField

                          sx={{ width:'90%',margin:1}}
                          id="outlined-size-small"
                          defaultValue="phone number"
                          size="small"
                        />
                        <TextField

                          sx={{ width:'90%',margin:1}}
                          id="outlined-size-small"
                          defaultValue="your address"
                          size="small"
                        />
                            <Button type="submit" variant="contained">order</Button>
                        </form>
                </Box>
              </Modal>
        );
};

export default OrderModal;