import React, { useState } from 'react'
import styled from "styled-components";

const InputFieldContainer = styled.div`
position: relative;
input{
    width: -webkit-fill-available;
    padding: .3em .5em;
    font-size: max(1.2vw, 1.2rem);
    border: 1px solid #363062;

    &:focus + span,
    &:not(:placeholder-shown) + span{
        top: -10px;
        transform: scale(.8);
        background: #fff;
    }
}
span{
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    font-size: max(1vw, 1rem);
    transition: .5s;
}
`;

const InputField = ({
    inputType,
    inputText
}) => {
    const [inputValue, setInputValue] = useState("");
    const inputChangeHandler = (e) => setInputValue(e.target.value);
  return (
    <InputFieldContainer>
        <input type={inputType} placeholder=" " value={inputValue} onChange={(e) => inputChangeHandler(e)}/>
        <span>{inputText}</span>
    </InputFieldContainer>
  )
}

export default InputField