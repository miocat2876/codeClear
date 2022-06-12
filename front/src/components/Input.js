import React from 'react';
import styled, {css} from 'styled-components';

const Test = styled.button`
  width: 200px;

  ${props => {
    console.log(props);
    return css`
      background: black;
    `;
  }}
`;

const Input = () => {
  return (
    <>
      <Test>aaa</Test>
    </>
  );
};

export default Input;
