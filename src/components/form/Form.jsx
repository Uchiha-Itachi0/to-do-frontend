import React from 'react'
import styled from "styled-components";
import SignUp from './SignUp';

const FormContainer = styled.div`
position: fixed;
bottom: 50%;
left: 50%;
transform: translate(-50%, 50%);
background: #fff;
color: #000;

`;
const Form = () => {
    return (
        <FormContainer>
            <div className="form_container_sign_up">
                <SignUp />
            </div>
        </FormContainer>
    )
}

export default Form