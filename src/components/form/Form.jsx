import React from 'react'
import styled from "styled-components";
import SignUp from './SignUp';
import { useSelector } from "react-redux";

const FormContainer = styled.div`
position: fixed;
bottom: -100%;
left: 50%;
transform: translate(-50%, 50%);
color: #000;
perspective: 1000px;
transition: 300ms;
&.form_container_active{
    bottom: 50%;
}
.form_container_3d{
    transform-style: preserve-3d;
    transition: 500ms;
    background: #fff;

    &.rotate{
    transform: rotateY(-180deg);
    .form_container_sign_up{
        z-index: -1;
    }
}

}

.form_container_sign_up{
    position: relative;
    background: #fff;
    backface-visibility: hidden;
}
.form_container_log_in{
    position: absolute;
    inset: 0;
    transform: rotateY(180deg);
    background: #fff;
    backface-visibility: hidden;

}
`;

const Form = ({
    showLogin,
    setLogin
}) => {

    const showModal = useSelector(state => state.modal.showModal);

    const totalInputFieldsSignUp = [
        { inputText: "name" },
        { inputText: "email" }
    ]
    const totalPasswordFieldsSignUp = [
        { inputText: "password" },
        { inputText: "confirmPassword" }
    ]

    const totalInputFieldsLogin = [
        { inputText: "email" }
    ]
    const totalPasswordFieldsLogin = [
        { inputText: "password" }
    ]

    const formFlipHandler = () => {
        showLogin ? setLogin(false) : setLogin(true)
    }
    return (
        <FormContainer
            className={showModal ? `form_container form_container_active` : "form_container"}
        >
            <div className={showLogin ? `form_container_3d rotate` : "form_container_3d"}>
                <div className="form_container_sign_up">
                    <SignUp heading="Sign Up"
                        totalInputFields={totalInputFieldsSignUp}
                        totalPasswordFields={totalPasswordFieldsSignUp}
                        buttonText="Sign Up"
                        footerText="Already have an accound? Login"
                        formFlipHandler={formFlipHandler}
                    />
                </div>
                <div className="form_container_log_in">
                    <SignUp heading="Login"
                        totalInputFields={totalInputFieldsLogin}
                        totalPasswordFields={totalPasswordFieldsLogin}
                        buttonText="Login"
                        footerText="Don't have an accound. Please Sign up"
                        formFlipHandler={formFlipHandler}
                    />
                </div>
            </div>
        </FormContainer>
    )
}

export default Form