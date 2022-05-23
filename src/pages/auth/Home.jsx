import React, { useState, useEffect } from 'react';
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
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { USER_INFO } from '../../redux/Slice/user';
import axios from '../../utils/axios';
import Message from './../../components/Message';

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

    .home_container_side_bar_logout_button{
        text-align: center;
        margin-top: 1em;
        button{
            font-size: max(1.5vw, 1.5rem);
        }
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
            .home_container_side_bar_project_section_title_completed{
                display: flex;
                align-items: center;
                gap: .5em;
                font-size: max(1.5vw, 1.5em);
                cursor: pointer;

                &.active{
                    color: var(--linkColor);
                }
            }

            .home_container_side_bar_project_section_title_content_container{
                display: flex;
                justify-content: space-between;
                .home_container_side_bar_project_section_title_content{
                    display: flex;
                    gap: .5em;
                    font-size: max(1.5vw, 1.5em);
                    align-items: center;
                    color: var(--fontColor);
                    cursor: pointer;
                    &.active{
                        color: var(--linkColor);
                    }
                }
                .home_container_side_bar_project_section_title_content_button{

                    svg{
                        font-size: max(1.5vw, 1.5rem);
                        cursor: pointer;
                        color: var(--deleteButtonColor);
                    }
                }
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
    padding-bottom: 3em;

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

    .home_container_task_screen_heading{
        text-align: center;
        font-size: max(2.5vw, 2.5rem);
        margin-bottom: 1em;
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
                .home_container_side_bar_project_section_title_content_container{
                    .home_container_side_bar_project_section_title_content{
                        font-size: 6vw;
                    }
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

const Home = () => {
    const [projectInputValue, setProjectInputValue] = useState("");
    const [taskInputValue, setTaskInputValue] = useState("");
    const [taskContent, setTaskContent] = useState(["Good Luck"])
    const [oldActiveValue, setOldActiveValue] = useState("");
    const [heading, setHeading] = useState("WORK");
    const [showMessage, setShowMessage] = useState({
        messageState: false,
        messageText: ""
    })
    const showModal = useSelector(state => state.modal.showModal);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const Header = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }

    useEffect(() => {
        const fetchAllTask = async () => {
            const graphQlQuery = `
            mutation{
                getTask(getTaskInfo:{
                    userId: "${user.id}",
                    catogary: "${heading}"
                }){task, id}
            }
            `;
            try {
                const response = await axios.post("/graphql", { query: graphQlQuery }, Header);
                const baseObj = response.data.data.getTask;
                if (baseObj.length > 0) {
                    setTaskContent(baseObj)
                }
                else {
                    setTaskContent([{id: "initialId008", task: "Good Luck"}])
                }
            }
            catch (error) {
                setShowMessage({
                    ...showMessage,
                    messageState: true,
                    messageText: error.response.data.errors[0].message
                })
            }

        }
        fetchAllTask();
    }, [heading, taskContent])

    const inputChangeHandler = (e) => {
        e.target.name === "project" ? setProjectInputValue(e.target.value) : setTaskInputValue(e.target.value);
    }
    const plusProjectButtonClicked = async () => {
        const upperCaseInputValue = projectInputValue.toUpperCase();
        const graphQlQuery = `
        mutation{
            addCatogary(addCatogaryInfo:{
                userId: "${user.id}",
                catogary: "${upperCaseInputValue}"
            }){_id, catogaries}
        }
        `
        try {
            await axios.post("/graphql", { query: graphQlQuery }, Header)
            dispatch(USER_INFO({
                ...user,
                catogaries: [...user.catogaries, upperCaseInputValue]
            }))
            setProjectInputValue("");
        }
        catch (error) {
            setShowMessage({
                ...showMessage,
                messageState: true,
                messageText: error.response.data.errors[0].message
            })
        }
    }
    const plusTaskButtonClicked = async () => {
        const graphQlQuery = `
        mutation{
            createTask(taskInfo:{
                task: "${taskInputValue}",
                catagory: "${heading}"
            }){_id, userId}
        }
        `
        try {
            const response = await axios.post("/graphql", { query: graphQlQuery }, Header);
            const baseObj = response.data.data.getTask;
            setTaskInputValue("");
            if (taskContent[0] !== "Good Luck") {
                setTaskContent([...taskContent, baseObj.task])
            }
            else {
                setTaskContent(baseObj.task);
            }


        }
        catch (error) {
            setShowMessage({
                ...showMessage,
                messageState: true,
                messageText: error.response.data.errors[0].message
            })
        }
    }

    const menuToggleHandler = () => {
        dispatch(SHOW_MODAL());
    }
    const modalClickHandler = () => {
        dispatch(SHOW_MODAL());
    }
    const projectClickHandler = (e) => {
        if (oldActiveValue && oldActiveValue !== e.target.parentElement) {
            oldActiveValue.classList.remove("active");
        }
        e.target.parentElement.classList.add("active");
        setHeading(e.target.innerText);
        setOldActiveValue(e.target.parentElement);
    }
    const projectDeleteHandler = async (value) => {
        const graphQlQuery = `
        mutation{
            deleteCatogary(deleteCatogaryInfo:{
                projectId: "${user.id}",
                projectName: "${value}"
            }){catogaries, message}
        }
        `;
        try {
            const response = await axios.post("/graphql", { query: graphQlQuery }, Header)
            const baseObj = response.data.data.deleteCatogary;
            const userInfo = {
                ...user,
                catogaries: baseObj.catogaries
            }
            dispatch(USER_INFO(userInfo));
            setHeading(user.catogaries[0]);
            setShowMessage({
                ...showMessage,
                messageState: true,
                messageText: baseObj.message
            })

        }
        catch (error) {
            setShowMessage({
                ...showMessage,
                messageState: true,
                messageText: error.response.data.errors[0].message
            })
        }
    }
    const handleTaskDelete = async (taskId) => {
        const graphQlQuery = `
        mutation{
            deleteTask(deleteTaskInfo:{
                taskId: "${taskId}"
            })
        }
        `;
        try{
            const response = await axios.post("/graphql", { query: graphQlQuery }, Header)
            setShowMessage({
                ...showMessage,
                messageState: true,
                messageText: response.data.data.deleteTask
            })
        }
        catch(error){
            setShowMessage({
                ...showMessage,
                messageState: true,
                messageText: error.response.data.errors[0].message
            })
        }
    }
    const logoutClickHandler = () => {
        localStorage.removeItem("token");
        dispatch(USER_INFO({
            name: "",
            email: "",
            id: "",
            token: "",
            catogaries: ""
        }))
        navigate("/")
    };
    return (
        <>
            <Nav />
            {showMessage.messageState ? <Message messageText={showMessage.messageText} showMessage={showMessage} setShowMessage={setShowMessage} /> : null}
            <HomeContainer>
                {showModal ? <Modal modalClickHandler={modalClickHandler} /> : null}

                <div className={showModal ? `home_container_side_bar active` : 'home_container_side_bar'}>
                    <div className="home_container_side_bar_arrow">
                        <ArrowCircleLeftIcon onClick={() => menuToggleHandler()} />
                    </div>
                    <h1 className="home_container_side_bar_username">{user.name}</h1>
                    <div className="home_container_side_bar_logout_button">
                        <Button buttonDisable={false} clickHandler={() => logoutClickHandler()}>Log out</Button>
                    </div>
                    <div className="home_container_side_bar_project_section">
                        <div className="home_container_side_bar_project_section_input_container">
                            <InputField name={"project"} inputPlaceholder={"Add Project"} inputValue={projectInputValue} inputChangeHandler={(e) => inputChangeHandler(e)} />
                            <AddBoxIcon onClick={() => plusProjectButtonClicked()} />
                        </div>
                        <div className="home_container_side_bar_project_section_title">
                            <div className="home_container_side_bar_project_section_title_completed"
                                onClick={(e) => { projectClickHandler(e) }}>
                                <PlayArrowIcon />
                                <h1>All Completed Work</h1>
                            </div>
                            {user.catogaries.map((value, index) => {
                                return (
                                    <div key={value + index} className="home_container_side_bar_project_section_title_content_container">
                                        <div className="home_container_side_bar_project_section_title_content"
                                            onClick={(e) => projectClickHandler(e)}>
                                            <PlayArrowIcon />
                                            <p>{value}</p>
                                        </div>
                                        <div className="home_container_side_bar_project_section_title_content_button"
                                            onClick={() => projectDeleteHandler(value)}>
                                            <DeleteIcon />
                                        </div>
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
                    <div className="home_container_task_screen_heading">
                        <h1>{heading}</h1>
                    </div>
                    <div className="home_container_task_screen_input_container">
                        <InputField inputPlaceholder={"Add Task"} inputValue={taskInputValue} name="task"
                            inputChangeHandler={(e) => inputChangeHandler(e)}
                        />
                        <AddBoxIcon onClick={() => plusTaskButtonClicked()} />
                    </div>
                    <div className="home_container_task_screen_task_container">
                        {taskContent.map((value, index) => {
                            return (
                                <div key={value.id + index} className="home_container_task_screen_task_container_task">
                                    <h1>{value.task}</h1>
                                    <div className="home_container_task_screen_task_container_task_buttons">
                                        <CheckBoxIcon className="home_container_task_screen_task_container_task_button_1" />
                                        <DeleteIcon className="home_container_task_screen_task_container_task_button_2" 
                                            onClick={() => handleTaskDelete(value.id)}
                                        />
                                        <EditIcon className="home_container_task_screen_task_container_task_button_3" />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </HomeContainer>
        </>

    )
}

export default Home