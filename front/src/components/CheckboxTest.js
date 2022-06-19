import React, { useState } from 'react';
import styled from 'styled-components';

const CheckboxStyled = styled.input.attrs(props => ({
    type: props.type
}))`
    cursor: pointer;
`;

const CheckboxTest = ({categoryList,value,name,onChange}) => {
    const [checkedList, setCheckedLists] = useState([]);


    return (
        <>
            <CheckboxStyled input type="checkbox" />
        </>
    );
};

export default CheckboxTest;