import React from 'react'
import styled from "styled-components";
import Button from './Button';
import { useDispatch } from 'react-redux';
import { CHANGE_THEME } from '../redux/Slice/themeSlice';

const NavContainer = styled.nav`
position: relative;
z-index: 1;
padding: 2em;
display: flex;
justify-content: space-between;
.logo{
    font-size: max(2vw, 2rem);
    color: var(--fontColor);
}
button{
    font-size: max(1.5vw, 1.5em);
}
@media only screen and (max-width: 720px){
    padding: 1em .4em;
        .logo{
            font-size: 8vw;
        }
        button{
            font-size: 4vw;
        }
}
`;
const Nav = () => {
    const dispatch = useDispatch();

    const toggleThemeHandler = () => {
        dispatch(CHANGE_THEME());
    }
    return (
        <NavContainer>
            <h1 className="logo">JAR</h1>
            <Button clickHandler={() => toggleThemeHandler()}>Change Theme</Button>
        </NavContainer>
    )
}

export default Nav