import React, { useState } from 'react'
import styled from "styled-components";
import InputField from './InputField';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const PasswordFieldContainer = styled.div`
position: relative;
.password_container_icon{
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
}
`;
const PasswordField = ({
    inputText,
    inputValue,
    inputChangeHandler

}) => {
    const [inputType, setInputType] = useState('password');
    const eyeClickHandler = () => {
        if (inputType === 'text') {
            setInputType('password');
        }
        else {
            setInputType('text');
        }
    }
    return (
        <PasswordFieldContainer>
            <InputField inputType={inputType} inputText={inputText}
                inputValue={inputValue} inputChangeHandler={inputChangeHandler} />
            <span className="password_container_icon"
                onClick={eyeClickHandler}>{
                    inputType === 'password' ? <VisibilityIcon /> : <VisibilityOffIcon />
                }</span>
        </PasswordFieldContainer>
    )
}

export default PasswordField