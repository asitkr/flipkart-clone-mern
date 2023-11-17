import { Box, Button, Typography, styled } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Component = styled(Box)`
    width: 80%%;
    height: 65vh;
    background: #fff;
    margin: 80px 140px;
`;

const Container = styled(Box)`
    text-align: center;
    padding-top: 70px;
`;

const Image = styled('img')({
    width: '15%'
});

const HomeButton = styled(Button)`
    text-transform: capitalize;
    border-radius: 2px;
    background: #FB641B;
    margin: 20px auto;
    padding: 3px 20px;
    display: flex;
    justify-content: center;
`

const EmptyCart = () => {

    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';

    return (
        <Component>
            <Container>
                <Image src={imgurl} alt="empty" />
                <Typography>Your cart is empty!</Typography>
                <Typography component="span">Add items to it now.</Typography>
            </Container>
            <HomeButton variant="contained">
                <Link to='/' style={{ 
                    textDecoration: 'none', 
                    color: '#fff',
                    padding: '3px 20px',
                    fontSize: '16px',
                    fontWeight: 600
                    }}
                >
                    Home
                </Link>
            </HomeButton>
        </Component>
    )
}

export default EmptyCart;