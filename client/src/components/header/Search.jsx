import React, { useEffect, useState } from 'react';
import { InputBase, Box, List, ListItem, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';

// Components
import { getProducts as listProducts  } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';

const SearchContainer = styled(Box)`
    background: #fff;
    margin-left: 10px;
    border-radius: 2px;
    width: 38%;
    display: flex;
`;

const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-size: unset;
`

const SearchIconWrapper = styled(Box)`
    margin-left: auto;
    padding: 5px;
    display: flex;
    color: #2874f0;
`;

const ListWrapper = styled(List)`
    position: absolute;
    color: #000;
    background: #FFFFFF;
    margin-top: 36px;
`;

const Search = () => {

    const [ text, setText ] = useState();
    const [ open, setOpen ] = useState(true);

    const getText = (text) => {
        setText(text);
        setOpen(false);
    }

    const getProducts = useSelector(state => state.getProducts);
    const { products } = getProducts;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch])

    return (
        <SearchContainer>
            <InputSearchBase 
                placeholder='Search for product, brands and more'
                value={text}
                onChange={(e) => getText(e.target.value)} 
            />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            {
                text &&
                    <ListWrapper>
                        {
                            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                                <ListItem>
                                    <Link
                                        to={`/product/${product.id}`} 
                                        style={{ textDecoration:'none', color:'inherit'}}
                                        onClick={() => {setOpen(false); setText('')}}  
                                    >
                                        {product.title.longTitle}
                                    </Link>
                                </ListItem>
                            ))
                        }
                    </ListWrapper>
            }
        </SearchContainer>
    )
}

export default Search;