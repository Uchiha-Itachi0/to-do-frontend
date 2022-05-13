import React from 'react';
import styled from 'styled-components';
import RemainingHours from '../components/RemainingHours';
import Time from '../components/Time';
import Button from "../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { SHOW_MODAL } from '../redux/Slice/modalSlice';
import Modal from '../components/modal';
const HomeContainer = styled.section`
background-color: #363062;
min-height: max-content;
color: #FFFF;
padding: 0 1rem;

nav {
    position: relative;
    z-index: 1;
    padding: 2em;
    .logo{
        font-size: max(2vw, 2rem);
    }
}
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
        color: white;
        transition: 200ms linear;

        &:hover{
            background: white;
            color: black;
        }
    }
}

@media only screen and (max-width: 720px){
    nav{
        padding: 1em .4em;
        .logo{
            font-size: 8vw;
        }
    }
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
    const dispatch = useDispatch();
    const clickHandler = () => {
        dispatch(SHOW_MODAL());
    }
    const modalClickHandler = () => {
        dispatch(SHOW_MODAL());
    }

    return (
        <HomeContainer>
        {showModal ? <Modal modalClickHandler={modalClickHandler}/>: null}
            <nav>
                <h1 className="logo">JAR</h1>
            </nav>
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
                    <Button clickHandler={clickHandler}>Sign up</Button>
                </div>
                <div className="home_container_log_in_button">
                    <Button clickHandler={clickHandler} >Log in</Button>
                </div>
            </div>
        </HomeContainer>
    )
}

export default Home