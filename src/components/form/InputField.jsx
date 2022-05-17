import React from 'react'
import styled from "styled-components";

const InputFieldContainer = styled.div`
position: relative;
input{
    width: -webkit-fill-available;
    padding: .3em .5em;
    font-size: max(1.2vw, 1.2rem);
    background: var(--background);
    border: none;
    box-shadow: 0 0 2px var(--fontColor);
    color: var(--fontColor);
    border-radius: 6px;

    &:focus {
        outline: 2px solid var(--linkColor);
        background: transparent;
    }
    &:focus + span,
    &:not(:placeholder-shown) + span{
        top: -10px;
        transform: scale(.8);
        background: var(--background);
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
    inputText,
    inputValue,
    inputChangeHandler,
    formName
}) => {
    return (
        <InputFieldContainer>
            <input type={inputType} placeholder=" " name={inputText + ` ${formName}`} value={inputValue[formName][inputText]} onChange={(e) => inputChangeHandler(e)} />
            <span>{inputText}</span>
        </InputFieldContainer>
    )
}

export default InputField