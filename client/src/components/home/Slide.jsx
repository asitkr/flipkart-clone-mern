import { Box, Button, Divider, Typography, styled } from '@mui/material';
import React from 'react';
import Countdown from 'react-countdown';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Component =  styled(Box)`
    margin-top: 10px;
    background-color: #ffffff;
`

const Deal = styled(Box)`
    padding: 15px 20px;
    display: flex;
    align-items: center;
`

const DealText = styled(Typography)`
    font-size: 22px;
    font-weight: 600;
    line-height: 32px;
    margin-right: 25px;
`

const Timer = styled(Box)`
    display: flex;
    align-items: center;
    margin-left: 10px;
    color: #7f7f7f;
`

const ViewAllButton = styled(Button)`
    margin-left: auto;
    background-color: #2874f0;
    border-radius: 2px;
    font-size: 13px;
    font-weight: 600;
`

const Image = styled('img')({
    width: 'auto',
    height: 150
})

const Text = styled(Typography)`
    font-size: 14px;
    margin-top: 5px;
`

const Slide = ({ products, title, timer }) => {

    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({ hours, minutes, seconds }) => {
        return <Box variant="span">{ hours } : { minutes } : { seconds } Left</Box>
    };

    return (
        <Component>
            <Deal>
                <DealText>{title}</DealText>
                {
                    timer && <Timer>
                                <img src={timerURL} alt="timer" style={{ width: 24 }} />
                                <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                            </Timer>
                }
                <ViewAllButton variant="contained" color="primary">View All</ViewAllButton>
            </Deal>

            <Divider />

            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                centerMode={true}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >
                {
                    products.map(item => (
                        <Link to={`product/${item.id}`} style={{ textDecoration: 'none' }} key={item.id}>
                            <Box textAlign={'center'} style={{ padding: '25px 15px' }}>
                                <Image src={item.url} alt='product' />
                                <Text style={{ fontWeight: 600, color: '#212121' }}>{item.title.shortTitle}</Text>
                                <Text style={{ color: 'green' }}>{item.discount}</Text>
                                <Text style={{ color: '#212121', opacity: 0.6}}>{item.tagline}</Text>
                            </Box>
                        </Link>
                    ))
                }
            </Carousel>
        </Component>
    )
}

export default Slide;