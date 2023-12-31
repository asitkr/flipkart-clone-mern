import React from 'react';
import { Grid, styled } from '@mui/material';

// component
import { imageURL } from '../../constants/data';

const Wrapper = styled(Grid)`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
`

const Image = styled('img')(({ theme }) => ({ 
    marginTop: 10,
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',
        height: 120
    }
}));

const MidSection = () => {

    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

    return (
        <>
            <Wrapper item lg={12} md={12} sm={12} xs={12} container>
                {
                    imageURL.map((image, id)=> 
                        <Grid item lg={4} md={4} sm={12} xs={12} key={id+1}>
                            <img src={image} alt='mid banner' style={{ width: '100%' }} />
                        </Grid>
                    )
                }
            </Wrapper>
            <Image src={url} alt="covid" />
        </>
    )
}

export default MidSection;