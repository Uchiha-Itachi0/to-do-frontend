import React, { useState } from 'react';
import styled from 'styled-components';
import RemainingHours from '../components/RemainingHours';
import Time from '../components/Time';
import Button from "../components/Button";
import Nav from "../components/Nav";
import { useSelector, useDispatch } from "react-redux";
import { SHOW_MODAL } from '../redux/Slice/modalSlice';
import Modal from '../components/modal';
import Form from '../components/form/Form';
import VARIABLES from '../utils/Variables';

const HomeContainer = styled.section`
background-color: var(--background);
min-height: max-content;
color: var(--fontColor);
padding: 0 1rem;

.home_container_time_block{
    text-align: center;
    padding: 1em;
    font-size: max(5vw, 3rem);

    .home_container_time_block_remaining_hour{
        font-size: max(1.5vw, 1.5rem);
        span{
            font-size: max(2vw, 2rem);
        }
    }
}
.home_container{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2em;
    .home_container_heading{
        margin-bottom: 2rem;
        text-align: center;
        h1{
            font-size: max(3vw, 3rem);
            font-style: italic;
            span{
                display: block;
                margin-top: 1rem;
                font-size: max(4vw, 4rem)
        }
        }

    }
}

.home_container_sign_up_button{
    button{
        background: transparent;
        color: var(--fontColor);
        transition: 200ms linear;

        &:hover{
            background: var(--buttonColor);
            color: var(--fontColor);
        }
    }
}


@media only screen and (max-width: 720px){
    .home_container_time_block{
        font-size: 8vw;
        margin: 4rem 0;
        .home_container_time_block_remaining_hour{
            font-size: 5vw;
            span{
                font-size: 6vw;
            }
        }
    }
    .home_container{
        justify-content: center;
        .home_container_heading{
            h1{
                font-size: 7vw;
                span{
                    font-size: 10vw;
                }

            }
        }
    }

    button{
        font-size: 5vw;
    }
}

`;
const Home = () => {

    const showModal = useSelector(state => state.modal.showModal);
    const theme = useSelector(state => state.theme.theme);

    const dispatch = useDispatch();
    const [showLogin, setLogin] = useState(false);


    const clickHandler = (whichForm) => {
        dispatch(SHOW_MODAL());
        if (whichForm === "login") {
            setLogin(true);
        }
        else {
            setLogin(false);
        }
    }
    const modalClickHandler = () => {
        dispatch(SHOW_MODAL());
    }

    return (
        <HomeContainer VARIABLES={VARIABLES} theme={theme}>
            {showModal ? <Modal modalClickHandler={modalClickHandler} /> : null}
            <Form showLogin={showLogin} setLogin={setLogin} />
            <Nav />
            <div className="home_container_time_block">
                <Time />
                <div className="home_container_time_block_remaining_hour">
                    <p>Remaing hours: <span><RemainingHours /></span> Hrs</p>
                </div>
            </div>
            <div className="home_container">
                <div className="home_container_heading">
                    <h1>"Free up your mental space by putting all your task inside the
                        <span> JAR"</span></h1>
                </div>
                <div className="home_container_sign_up_button">
                    <Button buttonDisable={false} clickHandler={() => clickHandler("signUp")}>Sign up</Button>
                </div>
                <div className="home_container_log_in_button">
                    <Button buttonDisable={false} clickHandler={() => clickHandler("login")} >Log in</Button>
                </div>
            </div>
        </HomeContainer>
    )
}

export default Home