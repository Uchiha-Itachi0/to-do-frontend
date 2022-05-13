import React from 'react'
import styled from "styled-components";
import Button from '../Button';
import InputField from './InputField';
import PasswordField from './passwordField';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

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
        background: #363062;
    }

    span{
        position: relative;
        z-index: 1;
        background: #fff;
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
        background: #363062;
        color: #fff;
        transition: 200ms;
        border: 2px solid #363062;

        &:hover{
            background: transparent;
            color: #000;
        }
    }
}
.sign_up_container_footer{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: .5em;
    padding: 1em;
    border-top: 2px solid #363062;

    .sign_up_container_footer_login{
        display: flex;
        align-items: center;
        justify-content: center;
        color: #363062;
        cursor: pointer;
        font-weight: 600;
        span{
            svg{
                font-size: 2em;
            }
        }
    }


}
`;
const SignUp = () => {
    return (
        <SignUpContainer>
            <h1 className="sign_up_container_logo">JAR</h1>
            <div className="sign_up_container_heading">
                <span>Sign Up</span>
            </div>
            <div className="sign_up_container_input">
                <InputField inputType="text" inputText="userName" />
                <InputField inputType="text" inputText="email" />
                <PasswordField inputText="Password" />
                <PasswordField inputText="Confirm password" />
            </div>
            <div className="sign_up_container_button">
                <Button>Sign Up</Button>
            </div>
            <div className="sign_up_container_footer">
                <p className="sign_up_container_footer_login"> Already have an account? Login<span><ArrowRightAltIcon classname="sign_up_container_footer_arrow" /></span></p>
            </div>



        </SignUpContainer>
    )
}

export default SignUp