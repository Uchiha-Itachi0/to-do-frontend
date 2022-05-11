import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.section`
background-color: #001D6E;
min-height: max-content;
color: #FFFF;

nav {
    position: relative;
    z-index: 1;
    padding: 2em;
    .logo{
        font-size: max(2vw, 2rem);
    }
}
.home_container{
    height: max(100vh, 800px);
    display: flex;
    flex-direction: column;
    align-items: center;
}

`;
const Home = () => {
    return (
        <HomeContainer>
            <nav>
                <h1 className="logo">JAR</h1>
            </nav>

            <div className="home_container">
                <div className="home_container_heading">
                    <h1>Time to put things inside the <span>JAR</span></h1>
                </div>
                <div className="home_container_sign_up_button">
                    <button>Sign up</button>
                </div>
                <div className="home_container_log_in_button">
                    <button>Log in</button>
                </div>
            </div>
        </HomeContainer>
    )
}

export default Home