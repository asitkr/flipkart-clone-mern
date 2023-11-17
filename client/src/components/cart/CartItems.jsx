import { Box, Button, Typography, styled } from '@mui/material';
import React from 'react';

// Components
import { addEllipse } from "../../utils/commonUtils";
import ButtonGroup from './ButtonGroup';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartActions';

const Component = styled(Box)(({ theme }) => ({
    borderTop: '1px solid #f0f0f0',
    borderRadius: '0px',
    display: 'flex',
    background: '#fff',
    [theme.breakpoints.down('md')]: {
        display: 'flex',
        flexDirection: 'column'
    }
}));

const LeftComponent = styled(Box)(({ theme }) => ({
    margin: '20px',
    [theme.breakpoints.down('md')]: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        margin: '20px auto'
    }
}));

const ProductImage = styled('img')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        textAlign: 'center'
    }
}))

const SmallText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;
`;

const RemoveButton = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
    color: #000;
    font-Weight: 600;
`

const CartItems = ({ item }) => {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

    const dispatch = useDispatch();

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    }

    return (
        <Component>
            <LeftComponent>
                <ProductImage src={item.url} style={{ height: 110, width: 110}} alt="product" />
                <ButtonGroup />
            </LeftComponent>

            <Box style={{ margin: 20 }}>
                <Typography>{addEllipse(item.title.longTitle)}</Typography>
                <SmallText>Seller:RetailNet
                    <Box component='span'>
                        <img src={fassured} style={{ width: 50, marginLeft: 10 }} alt="flipkart" />
                    </Box>
                </SmallText>
                <Typography style={{margin: '20px 0'}}>
                    <Box component="span" style={{ fontWeight: 600, fontSize: 18 }}>₹{item.price.cost}</Box> &nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: '#878787' }}><strike>₹{item.price.mrp}</strike></Box> &nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: '#388E3C' }}>{item.price.discount} off</Box>
                </Typography>
                <RemoveButton onClick={() => removeItemFromCart(item.id)}>Remove</RemoveButton>
            </Box>
        </Component>
    )
}

export default CartItems;