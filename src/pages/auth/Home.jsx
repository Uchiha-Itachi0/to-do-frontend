import React, { useState } from 'react'
import styled from 'styled-components';
import Nav from '../../components/Nav';
import InputField from './../../components/InputField';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { SHOW_MODAL } from '../../redux/Slice/modalSlice';
import Modal from '../../components/modal';
import Time from './../../components/Time';
import RemainingHours from './../../components/RemainingHours';

const HomeContainer = styled.section`
display: flex;
.home_container_side_bar{
    position: relative;
    height: 100vh;
    width: max-content;
    background: var(--background);
    color: var(--fontColor);
    box-shadow: 0px 0px 2px var(--fontColor);
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar{
        width: 10px;
    }
    /* Track */
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey; 
      border-radius: 10px;
    }
    
    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: var(--fontColor); 
      border-radius: 10px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: var(--linkColor); 
    }
    .home_container_side_bar_arrow {
        position: absolute;
        right: 0;
        display: none;
        svg{
            font-size: max(2.5vw, 2.5rem);
        }
    }
    .home_container_side_bar_username{
        font-size: max(1.8vw, 1.8rem);
        text-align: center;
        margin-top: 2em;
    }

    .home_container_side_bar_project_section{
        padding: 2em;
        .home_container_side_bar_project_section_input_container{
            display: flex;
            gap: 1em;
            align-items: center;
            svg{
                color: var(--buttonColor);
                font-size: max(2.5vw, 2.5rem);
                cursor: pointer;
            }
        }

        .home_container_side_bar_project_section_title{
            display: flex;
            flex-direction: column;
            gap: 2em;
            margin-top: 2em;

            .home_container_side_bar_project_section_title_content{
                display: flex;
                gap: .5em;
                font-size: max(1.5vw, 1.5em);
                align-items: center;
                color: var(--fontColor);
                cursor: pointer;
            }
        }
    }
}
.home_container_task_screen{
    position: relative;
    width: 75vw;
    background: var(--background);
    color: var(--fontColor);
    box-shadow: 0px 0px 2px var(--fontColor);
    padding: 0 1em;

    .home_container_task_screen_arrow {
        position: absolute;
        left: 0;
        transition: 300ms;
        display: none;
        svg{
            font-size: max(2.5vw, 2.5rem);
        }
    }

    .home_container_task_screen_time_container{
        padding: .5em;
        font-size: max(3.5vw, 3.5rem);
        text-align: center;
        p{
            font-size: max(1.5vw, 1.5rem); 
            span{
                font-size: max(2.5vw, 2.5rem);
            }
        }
    }
    .home_container_task_screen_input_container{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1em;
        input{
            font-size: max(2.5vw, 2.5rem);
        }
        svg{
            font-size: max(3.5vw, 3.5rem);
            color: var(--buttonColor);
            cursor: pointer;
        }
    }
    .home_container_task_screen_task_container{
        margin-top: 4em;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        gap: 2em;
        .home_container_task_screen_task_container_task{
            box-shadow: 0 0 2px var(--fontColor);
            padding: 2em;
            width: 80%;
            cursor: pointer;
            transition: 200ms;
            h1{
                font-size: max(2vw, 2rem);
            }

            .home_container_task_screen_task_container_task_buttons{
                display: flex;
                gap: 1em;
                align-items: center;
                justify-content: space-between;
                margin-top: 2em;
                height: 0;
                overflow: hidden;
                transition: 200ms;
                svg{
                    font-size: max(2.5vw, 2.5rem);

                }
                .home_container_task_screen_task_container_task_button_1{
                    color: var(--buttonColor);
                }
                .home_container_task_screen_task_container_task_button_2{
                    color: var(--deleteButtonColor);
                }
                .home_container_task_screen_task_container_task_button_3{
                    color: var(--editButtonColor);
                }
            }
            &:hover{
                .home_container_task_screen_task_container_task_buttons{
                    transition: 200ms;
                    height: max(2.5vw, 2.5rem);
                }
            }
        }
    }
}

@media only screen and (max-width: 380px){
    .home_container_side_bar{
        left: -200%;
        .home_container_side_bar_username{
            font-size: 6vw;
        }
        .home_container_side_bar_project_section{
            padding: 1em;
            .home_container_side_bar_project_section_input_container{
                input{
                    font-size: 5vw;
                }
                svg{
                    font-size: 8vw;
                }
            }
            .home_container_side_bar_project_section_title{
                gap: 1.5em;
                .home_container_side_bar_project_section_title_content{
                    font-size: 6vw;
                }
            }
        }
    }   
}

@media only screen and (max-width: 660px){
    .home_container_task_screen{
        .home_container_task_screen_time_container{
            margin-bottom: 1em;
            font-size: 8vw;
            p{
                font-size: 6vw;
                span{
                    font-size: 7vw;
                }
            }
        }
        .home_container_task_screen_input_container{
            input{
                font-size: 6vw;
            }
            svg{
                font-size: 10vw;
            }
        }
        .home_container_task_screen_task_container{
            .home_container_task_screen_task_container_task{
                h1{
                    font-size: 6vw;
                }

                .home_container_task_screen_task_container_task_buttons{
                    svg{
                        font-size: 8vw;
                    }
                }
            }
        }
    }
}
@media only screen and (max-width: 1090px){
    position: relative;
    .home_container_side_bar{
        position: absolute;
        z-index: 1001;
        left: -100%;
        transition: 300ms;

        &.active{
            left: 0;
        }

        .home_container_side_bar_arrow{
            display: block;
        }
    }
    .home_container_task_screen{
        width: 100vw;

        .home_container_task_screen_arrow{
            display: block;
        }
    }
}


`;

const project_content = ["Work🚩", "Home", "College", "Other", "Work", "Work", 'Work', 'Work', 'Work', 'Work', 'Work'];

const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const showModal = useSelector(state => state.modal.showModal);
    const dispatch = useDispatch();

    const inputChangeHandler = (e) => {
        setInputValue(e.target.value);
    }
    const plusProjectButtonClicked = () => {
        console.log(inputValue);
    }
    const plusTaskButtonClicked = () => { }

    const menuToggleHandler = () => {
        dispatch(SHOW_MODAL());
    }
    const modalClickHandler = () => {
        dispatch(SHOW_MODAL());
    }
    return (
        <>
            <Nav />
            <HomeContainer>
                {showModal ? <Modal modalClickHandler={modalClickHandler} /> : null}

                <div className={showModal ? `home_container_side_bar active` : 'home_container_side_bar'}>
                    <div className="home_container_side_bar_arrow">
                        <ArrowCircleLeftIcon onClick={() => menuToggleHandler()} />
                    </div>
                    <h1 className="home_container_side_bar_username">Anubhav Shukla</h1>
                    <div className="home_container_side_bar_project_section">
                        <div className="home_container_side_bar_project_section_input_container">
                            <InputField inputPlaceholder={"Add Project"} inputValue={inputValue} inputChangeHandler={(e) => inputChangeHandler(e)} />
                            <AddBoxIcon onClick={() => plusProjectButtonClicked()} />
                        </div>
                        <div className="home_container_side_bar_project_section_title">
                            {project_content.map((value, index) => {
                                return (
                                    <div key={value + index} className="home_container_side_bar_project_section_title_content">
                                        <PlayArrowIcon />
                                        <p>{value}</p>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
                <div className="home_container_task_screen">
                    <div className="home_container_task_screen_arrow">
                        <ArrowCircleRightIcon onClick={() => menuToggleHandler()} />
                    </div>
                    <div className="home_container_task_screen_time_container">
                        <Time />
                        <p>Total time remaining: <span>{<RemainingHours />}</span> Hrs</p>
                    </div>
                    <div className="home_container_task_screen_input_container">
                        <InputField inputPlaceholder={"Add Task"} />
                        <AddBoxIcon onClick={() => plusTaskButtonClicked()} />
                    </div>
                    <div className="home_container_task_screen_task_container">
                        <div className="home_container_task_screen_task_container_task">
                            <h1>Some small task to see how it looks Some small task to see how it looks Some small task to see how it looks
                                Some small task to see how it looks
                                Some small task to see how it looks
                                Some small task to see how it looks Some small task to see how it looks</h1>
                            <div className="home_container_task_screen_task_container_task_buttons">
                                <CheckBoxIcon className="home_container_task_screen_task_container_task_button_1" />
                                <DeleteIcon className="home_container_task_screen_task_container_task_button_2" />
                                <EditIcon className="home_container_task_screen_task_container_task_button_3" />
                            </div>
                        </div>
                        <div className="home_container_task_screen_task_container_task">
                            <h1>Some small task to see how it looks</h1>
                            <div className="home_container_task_screen_task_container_task_buttons">
                                <CheckBoxIcon className="home_container_task_screen_task_container_task_button_1" />
                                <DeleteIcon className="home_container_task_screen_task_container_task_button_2" />
                                <EditIcon className="home_container_task_screen_task_container_task_button_3" />
                            </div>
                        </div>
                        <div className="home_container_task_screen_task_container_task">
                            <h1>Some small task to see how it looks</h1>
                            <div className="home_container_task_screen_task_container_task_buttons">
                                <CheckBoxIcon className="home_container_task_screen_task_container_task_button_1" />
                                <DeleteIcon className="home_container_task_screen_task_container_task_button_2" />
                                <EditIcon className="home_container_task_screen_task_container_task_button_3" />
                            </div>
                        </div>
                        <div className="home_container_task_screen_task_container_task">
                            <h1>Some small task to see how it looks</h1>
                            <div className="home_container_task_screen_task_container_task_buttons">
                                <CheckBoxIcon className="home_container_task_screen_task_container_task_button_1" />
                                <DeleteIcon className="home_container_task_screen_task_container_task_button_2" />
                                <EditIcon className="home_container_task_screen_task_container_task_button_3" />
                            </div>
                        </div>
                        <div className="home_container_task_screen_task_container_task">
                            <h1>Some small task to see how it looks</h1>
                            <div className="home_container_task_screen_task_container_task_buttons">
                                <CheckBoxIcon className="home_container_task_screen_task_container_task_button_1" />
                                <DeleteIcon className="home_container_task_screen_task_container_task_button_2" />
                                <EditIcon className="home_container_task_screen_task_container_task_button_3" />
                            </div>
                        </div>
                        <div className="home_container_task_screen_task_container_task">
                            <h1>Some small task to see how it looks</h1>
                            <div className="home_container_task_screen_task_container_task_buttons">
                                <CheckBoxIcon className="home_container_task_screen_task_container_task_button_1" />
                                <DeleteIcon className="home_container_task_screen_task_container_task_button_2" />
                                <EditIcon className="home_container_task_screen_task_container_task_button_3" />
                            </div>
                        </div>
                        <div className="home_container_task_screen_task_container_task">
                            <h1>Some small task to see how it looks</h1>
                            <div className="home_container_task_screen_task_container_task_buttons">
                                <CheckBoxIcon className="home_container_task_screen_task_container_task_button_1" />
                                <DeleteIcon className="home_container_task_screen_task_container_task_button_2" />
                                <EditIcon className="home_container_task_screen_task_container_task_button_3" />
                            </div>
                        </div>
                        <div className="home_container_task_screen_task_container_task">
                            <h1>Some small task to see how it looks</h1>
                            <div className="home_container_task_screen_task_container_task_buttons">
                                <CheckBoxIcon className="home_container_task_screen_task_container_task_button_1" />
                                <DeleteIcon className="home_container_task_screen_task_container_task_button_2" />
                                <EditIcon className="home_container_task_screen_task_container_task_button_3" />
                            </div>
                        </div>
                        <div className="home_container_task_screen_task_container_task">
                            <h1>Some small task to see how it looks</h1>
                            <div className="home_container_task_screen_task_container_task_buttons">
                                <CheckBoxIcon className="home_container_task_screen_task_container_task_button_1" />
                                <DeleteIcon className="home_container_task_screen_task_container_task_button_2" />
                                <EditIcon className="home_container_task_screen_task_container_task_button_3" />
                            </div>
                        </div>
                        <div className="home_container_task_screen_task_container_task">
                            <h1>Some small task to see how it looks</h1>
                            <div className="home_container_task_screen_task_container_task_buttons">
                                <CheckBoxIcon className="home_container_task_screen_task_container_task_button_1" />
                                <DeleteIcon className="home_container_task_screen_task_container_task_button_2" />
                                <EditIcon className="home_container_task_screen_task_container_task_button_3" />
                            </div>
                        </div>
                    </div>
                </div>
            </HomeContainer>
        </>

    )
}

export default Home