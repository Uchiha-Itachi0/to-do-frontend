import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import Button from '../Button';
import InputField from './InputField';
import PasswordField from './passwordField';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CancelIcon from '@mui/icons-material/Cancel';
import validation from "../../utils/validation";
import axios from "../../utils/axios";
// import Message from './../Message';
import { useDispatch } from 'react-redux';
import { SHOW_MODAL } from '../../redux/Slice/modalSlice';

const SignUpContainer = styled.div`
padding: 1em;
width: max(30vw, 300px);
.sign_up_container_nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .sign_up_container_logo{
        font-size: max(2vw, 2rem);
    }
    svg{
        font-size: max(2vw, 2rem);
        cursor: pointer;
    }
}


.sign_up_container_message{
    text-align: center;
    margin-top: 2em;
    font-size: max(1vw, 1rem);
    font-weight: 900;
    &.error{
        color: var(--deleteButtonColor);
    }
    &.pass{
        color: var(--buttonColor);
    }
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
        background: var(--fontColor);
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

    .sign_up_container_footer_instructions{
        .sign_up_container_footer_instructions_heading{
            margin-bottom: 1em;
            font-size: max(1.2vw, 1.2rem);
        }
        ul{
            list-style: decimal-leading-zero;
            font-size: max(1vw, 1rem);
            padding-left: 1.5em
        }
    }

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
@media only screen and (max-width: 325px){
    .sign_up_container_footer{
        .sign_up_container_footer_instructions{
            .sign_up_container_footer_instructions_heading{
                font-size: 6vw;
            }
            ul{
                font-size: 5vw;
            }
        }
        .sign_up_container_footer_login{
            font-size: 6vw;
            span{
                svg{
                    font-size: 9vw;
                }
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
    const [messageBox, setMessage] = useState({
        showMessage: false,
        messageText: "",
        messageStatusCode: "",
        messageType: ""
    });
    const dispatch = useDispatch();
    const closeFormHandler = () => dispatch(SHOW_MODAL());
    const inputChangeHandler = (e) => {
        const value = e.target.value;
        const formName = e.target.name.split(" ")[1];
        const name = e.target.name.split(" ")[0];
        if (formName === "signUp") {
            setInputValue({
                ...inputValue,
                signUp: {
                    ...inputValue.signUp,
                    [name]: value
                }
            });
        }
        else if (formName === "logIn") {
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
        else if (validation.EMAIL(inputValue.logIn.email) && validation.PASSWORD_LENGTH(inputValue.logIn.password)) {
            setButtonDisable(false);
        }
        else {
            setButtonDisable(true);
        }
    }, [inputValue]);

    const submitClickHandler = async (e) => {
        const graphqlQuery = `
            mutation{
                SignUp(userData:{
                    name: "${inputValue.signUp.name}",
                    email: "${inputValue.signUp.email}",
                    password: "${inputValue.signUp.password}",
                    confirmPassword: "${inputValue.signUp.confirmPassword}"
                }){_id, name, email, catogaries, message}
            }
            `
        if (e.target.innerText === "Sign Up") {
            try {
                const response = await axios.post("/graphql", { query: graphqlQuery })
                const baseObj = response.data.data.SignUp;
                const name = baseObj.name;
                setMessage({
                    ...messageBox,
                    showMessage: true,
                    messageText: `Hello ${name}, you have successfully signed up. Please login to continue`,
                    messageStatusCode: 200,
                    messageType: "pass"
                })
                setInputValue({
                    ...inputValue,
                    signUp: {
                        ...inputValue.signUp,
                        name: "",
                        email: "",
                        password: "",
                        confirmPassword: ""
                    }
                })
            }
            catch (error) {
                const message = error.response.data.errors[0].message;
                const statusCode = error.response.data.errors[0].status;
                setMessage({
                    ...messageBox,
                    showMessage: true,
                    messageText: message,
                    messageStatusCode: statusCode,
                    messageType: "error"
                })
            }

        }

        else if (e.target.innerText === "Login") {
            console.log("Welcome back");
        }
    }
    return (
        <SignUpContainer>
            <div className="sign_up_container_nav">
                <h1 className="sign_up_container_logo">JAR</h1>
                <CancelIcon onClick={() => closeFormHandler()}/>
            </div>

            {messageBox.showMessage ?
                <h1 className={`sign_up_container_message ${messageBox.messageType}`}>{messageBox.messageText}</h1>
                : null}
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
                <Button buttonDisable={buttonDisable} clickHandler={(e) => submitClickHandler(e)}>{buttonText}</Button>
            </div>
            <div className="sign_up_container_footer">
                <div className="sign_up_container_footer_instructions">
                    {buttonText !== "Login" ?
                        <>
                            <h1 className="sign_up_container_footer_instructions_heading">How to unlock sign up button</h1>
                            <ul>
                                <li>Name must be of atleat 1 character</li>
                                <li>Email should be valid</li>
                                <li>Password must be of atleat 8 character long</li>
                                <li>Confirm password must match</li>
                            </ul>
                        </>
                        :
                        <>
                            <h1 className="sign_up_container_footer_instructions_heading">How to unlock login button</h1>
                            <ul>
                                <li>Email should be valid</li>
                                <li>Password must be of atleat 8 character long</li>
                            </ul>
                        </>
                    }

                </div>

                <p className="sign_up_container_footer_login"
                    onClick={() => formFlipHandler()}
                >{footerText}<span><ArrowRightAltIcon className="sign_up_container_footer_arrow" /></span></p>
            </div>



        </SignUpContainer>
    )
}

export default SignUp