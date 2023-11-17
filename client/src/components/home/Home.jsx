import React, { useEffect } from 'react';
import { Box, styled } from "@mui/material"
import { useDispatch, useSelector } from 'react-redux';

// components
import Navbar from './Navbar';
import Banner from './Banner';
import { getProducts as listProducts } from '../../redux/actions/productActions';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';

const Component = styled(Box)`
    padding: 10px;
    background: #f2f2f2;
`

const Home = () => {

    const getProducts = useSelector(state => state.getProducts);
    const dispatch = useDispatch();

    const { products } = getProducts;

    // console.log(products);

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch])

    return (
        <>
            <Navbar />
            <Component>
                <Banner />
                <MidSlide products={products} title="Deal of the Day" timer={true} />
                <MidSection />
                <Slide products={products} title='Discounts for You' timer={false} />
                <Slide products={products} title='Suggested Items' timer={false} />
                <Slide products={products} title='Top Selection' timer={false} />
                <Slide products={products} title='Trending Offers' timer={false} />
                <Slide products={products} title='Top Deals on Accessories' timer={false} />
                <Slide products={products} title='Recommended Items' timer={false} />
            </Component>
        </>
    )
}

export default Home