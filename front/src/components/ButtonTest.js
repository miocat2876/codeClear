import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
    border: 1px solid #056380;
    border-radius: 10px;
    width: 400px;
    height: 60px;
    font-size: 1.125rem;
    box-shadow: 2px 2px 2px #b1a5a5;
    cursor: pointer;
    &:active{
        box-shadow:none;
    }
`;

const ButtonTest = () => {
    return (
        <>
            <ButtonStyled>로그인</ButtonStyled>
        </>
    );
};

export default ButtonTest;