import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.input.attrs(props => ({
    type: props.type
}))`
    border: 1px solid #056380;
    border-radius: 10px;
    margin-bottom: 16px;
    padding-left: calc(3% + 32px);
    width: 400px;
    height: 60px;
    font-size: 1.125rem;
    box-shadow: 5px 5px 5px rgb(0 0 0 / 10%);
    cursor: pointer;
`;

const InputTest = ({value,name,onChange}) => {
    
    return (
        <>  
            <InputStyled input type="text" value={value} name={name} onChange={onChange} />
            <br />
            <InputStyled input type="password" />
            <br />
            <InputStyled input type="checkbox" />
            <br />
            <InputStyled input type="radio" />            
            <br />
            {/*checkBox, selectBox, radioBox, password, file*/}
        </>
    );
};

export default InputTest;