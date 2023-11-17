import { Box, Button, styled } from '@mui/material';
import React, { useState } from 'react';
import { ShoppingCart as Cart, FlashOn as Flash} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

// Components
import { addToCart } from "../../redux/actions/cartActions";
import { payWithPaytm } from '../../service/api';
import { post } from '../../utils/paytm';

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')({
    width: '95%',
    padding: '15px'
});

const StyledButton = styled(Button)(({ theme }) => ({
    width: '48%',
    borderRadius: '2px',
    height: '50px',
    color: '#FFF',
    [theme.breakpoints.down('lg')]: {
        width: '46%'
    },
    [theme.breakpoints.down('sm')]: {
        width: '95%'
    }
}))

const ActionItem = ({ product }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = product;

    const [quantity, setQuantity] = useState(1);

    const addItemToCart = () => {
        navigate('/cart');
        dispatch(addToCart(id, quantity))
    }

    const buyNow = async () => {
        let response = await payWithPaytm({ amount: 500, email: 'codeforinterview01@gmail.com'});
        var information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response    
        }

        post(information);
    }

    return (
        <LeftContainer>
            <Box style={{ padding: '15px 20px', border: '1px solid #f0f0f0', marginBottom: 10}}>
                <Image src={product.detailUrl} alt="large_image" />
            </Box>
            <StyledButton  
                variant='contained' 
                style={{
                    marginRight: 10, 
                    background: '#ff9f00'
                    }}
                onClick={() => addItemToCart()}> 
                    <Cart /> 
                    Add to Cart
            </StyledButton>
            <StyledButton  
                variant='contained' 
                style={{background: '#fb641b'}}
                onClick={() => buyNow()}
            > 
                <Flash /> 
                Buy Now
            </StyledButton>
        </LeftContainer>
    )
}

export default ActionItem;