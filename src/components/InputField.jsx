import React from 'react'
import styled from 'styled-components';

const Input = styled.input`
font-size: max(1.2vw, 1.2rem);
padding: .2em .3em;
border: none;
box-shadow: 0 0 2px var(--fontColor);
color: var(--fontColor);
background: var(--background);
&:focus{
    outline: 2px solid var(--buttonColor);
}
`;
const InputField = ({
  inputValue,
  inputChangeHandler,
  inputPlaceholder,
  name
}) => {
  return (
    <Input type="text" placeholder={inputPlaceholder} value={inputValue} name={name} onChange={(e) => inputChangeHandler(e)}/>
  )
}

export default InputField