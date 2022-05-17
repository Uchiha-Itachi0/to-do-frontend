import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import Button from '../Button';
import InputField from './InputField';
import PasswordField from './passwordField';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import validation from "../../utils/validation";

const SignUpContainer = styled.div`
padding: 1em;
width: max(30vw, 300px);
.sign_up_container_logo{
    font-size: max(2vw, 2rem);
}
.sign_up_container_heading{
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &::before{
        content: "";
        position: absolute;
        height: .2vw;
        width: 100%;
        background: var(--background);
    }

    span{
        position: relative;
        z-index: 1;
        background: var(--background);
        font-size: max(1.5vw, 1.5rem);

    }
}
.sign_up_container_input{
    display: flex;
    flex-direction: column;
    gap: 1em;
}
.sign_up_container_button{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;

    button{
        font-size: max(1.5vw, 1.5rem);
        background: var(--buttonColor);
        color: var(--fontColor);
        transition: 200ms;
        border: 2px solid var(--buttonColor);

        &:hover{
            background: transparent;
            color: var(--fontColor);
        }
        &:disabled{
            background: var(--disabledBackground);
            color: var(--disabledColor);
            cursor: not-allowed;
        }
    }
}
.sign_up_container_footer{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: max(.5vw, 1em);
    padding: 1em;
    border-top: 2px solid var(--fontColor);
    .sign_up_container_footer_login{
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--linkColor);
        cursor: pointer;
        font-weight: 600;
        font-size: max(1.5vw, 1.5rem);
        text-align: center;
        position: relative;
        z-index: 3;
        span{
            svg{
                font-size: max(1.5vw, 2rem);
            }
        }
    }
}
@media only screen and (max-width: 390px){
    width: 80vw;
    .sign_up_container_button{
        button{
            font-size: 6vw;
        }
    }
}
`;
const SignUp = ({
    heading,
    totalInputFields,
    totalPasswordFields,
    buttonText,
    footerText,
    formFlipHandler
}) => {
    const [inputValue, setInputValue] = useState({
        signUp: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        logIn: {
            email: "",
            password: ""
        }

    });
    const [buttonDisable, setButtonDisable] = useState(true);
    const inputChangeHandler = (e) => {
        const value = e.target.value;
        const formName = e.target.name.split(" ")[1];
        const name = e.target.name.split(" ")[0];
        if(formName === "signUp"){
            setInputValue({
                ...inputValue,
                signUp: {
                    ...inputValue.signUp,
                    [name]: value
                }
            });
        }
        else if(formName === "logIn"){
            setInputValue({
                ...inputValue,
                logIn: {
                    ...inputValue.logIn,
                    [name]: value
                }
            });
        }
    };
    useEffect(() => {
        if (validation.EMAIL(inputValue.signUp.email) && validation.MIN_LENGTH(inputValue.signUp.name)
            && validation.PASSWORD_LENGTH(inputValue.signUp.password) &&
            validation.PASSWORD_MATCH(inputValue.signUp.password, inputValue.signUp.confirmPassword)) {
            setButtonDisable(false);
        }
        else if(validation.EMAIL(inputValue.logIn.email) && validation.PASSWORD_LENGTH(inputValue.logIn.password)) {
            setButtonDisable(false);
        }
        else{
            setButtonDisable(true);
        }
    }, [inputValue]);

    const submitClickHandler = (e) => {
        if(e.target.innerText === "Sign Up"){
            console.log("Thanks for signing up");
        }
        else if(e.target.innerText === "Login"){
            console.log("Welcome back");
        }
    }
    return (
        <SignUpContainer>
            <h1 className="sign_up_container_logo">JAR</h1>
            <div className="sign_up_container_heading">
                <span>{heading}</span>
            </div>
            <div className="sign_up_container_input">
                {
                    totalInputFields.map((value, index) => {
                        return <InputField
                            key={index + value.inputText}
                            inputType="text"
                            inputText={value.inputText}
                            inputValue={inputValue}
                            inputChangeHandler={inputChangeHandler}
                            formName={value.formName}
                        />
                    })
                }
                {
                    totalPasswordFields.map((value, index) => {
                        return <PasswordField
                            key={index + value.inputText}
                            inputText={value.inputText}
                            inputValue={inputValue}
                            inputChangeHandler={inputChangeHandler}
                            formName={value.formName}
                        />
                    })
                }
            </div>
            <div className="sign_up_container_button">
                <Button buttonDisable={buttonDisable}  clickHandler={(e) => submitClickHandler(e)}>{buttonText}</Button>
            </div>
            <div className="sign_up_container_footer">
                <p className="sign_up_container_footer_login"
                    onClick={() => formFlipHandler()}
                >{footerText}<span><ArrowRightAltIcon className="sign_up_container_footer_arrow" /></span></p>
            </div>



        </SignUpContainer>
    )
}

export default SignUp