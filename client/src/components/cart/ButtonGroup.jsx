import { Button, ButtonGroup, styled } from '@mui/material';
import React from 'react';

const Component = styled(ButtonGroup)`
    margin-top: 30px;
`

const StyledButton = styled(Button)`
    border-radius: 50%;
    background: #fb641b;
    font-size: 18px;
`;

const ButtonsGroup = () => {
    return (
        <Component>
            <StyledButton variant='contained'>-</StyledButton>
            <Button disabled style={{ fontSize: 18 }}>1</Button>
            <StyledButton variant='contained'>+</StyledButton>
        </Component>
    )
}

export default ButtonsGroup;