import { Box, Button, Divider, Grid, Typography, styled } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

// Components
import CartItems from './CartItems';
import TotalView from './TotalView';
import EmptyCart from './EmptyCart';

const Container = styled(Grid)(({ theme }) => ({
    padding: '30px 135px',
    display: 'flex',
    background: '#f2f2f2',
    [theme.breakpoints.down('md')]: {
        padding: '15px 0'
    }
}));

const LeftComponent = styled(Grid)(({ theme }) => ({
    paddingRight: 15,
    [theme.breakpoints.down('md')]: {
        marginBottom: 15
    }
}));

const HeaderCart = styled(Grid)`
    padding: 15px 24px;
    background: #fff;
`

const PlaceOrderWrapper = styled(Box)(({ theme }) => ({
    background: '#fff',
    padding: '16px 22px',
    borderTop: '1px solid #f0f0f0',
    boxShadow: '0 -2px 10px 0 rgb(0 0 0 / 10%)'
}));

const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    border-radius: 2px;
    background: #FB641B;
    color: #fff;
    width: 250px;
    height: 50px;
`

const Cart = () => {

    const { cartItems } = useSelector(state => state.cart);

    return (
        <>
            {
                cartItems.length ?
                    <Container container>
                        <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                            <HeaderCart>
                                <Typography>My Cart ({cartItems.length})</Typography>
                            </HeaderCart>
                            <Divider />
                            {
                                cartItems.map(item => (
                                    <CartItems item={item} />
                                ))
                            }                            
                            <PlaceOrderWrapper>
                                <StyledButton variant="contained">Place Order</StyledButton>
                            </PlaceOrderWrapper>
                        </LeftComponent>

                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotalView cartItems={cartItems} />
                        </Grid>
                    </Container>
                :
                <EmptyCart />
            }
        </>
    )
}

export default Cart;