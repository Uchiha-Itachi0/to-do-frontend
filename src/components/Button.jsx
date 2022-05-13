import React from 'react'
import styled from "styled-components";

const ButtonStyle = styled.button`
    font-size: max(1.6vw, 2rem);
    border-radius: 32px;
    padding: .5rem 2rem;
    cursor: pointer;
    border-radius: 32px;
    border: 2px solid #fff;
`;
const Button = ({
    children,
    clickHandler
}) => {
    return (
        <ButtonStyle onClick={clickHandler}>{children}</ButtonStyle>
    )
}

export default Button