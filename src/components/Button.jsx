import React from 'react'
import styled from "styled-components";

const ButtonStyle = styled.button`
    font-size: max(1.6vw, 2rem);
    border-radius: 32px;
    padding: .5rem 2rem;
    cursor: pointer;
    border-radius: 32px;
    border: 2px solid var(--buttonColor);
    background: var(--buttonColor);
    color: var(--fontColor);
`;
const Button = ({
    children,
    clickHandler,
    buttonDisable
}) => {
    return (
        <ButtonStyle onClick={(e) => clickHandler(e)} disabled={buttonDisable}>{children}</ButtonStyle>
    )
}

export default Button