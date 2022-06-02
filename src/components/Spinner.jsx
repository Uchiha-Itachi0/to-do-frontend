import React from 'react';
import styled from 'styled-components';
const SpinnerContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height:80vh;
position: absolute;
z-index: 2000;
left: 50%;

.loading1{
    width: 200px;
    height: 200px;
}
.loading2{
    width: 180px;
    height: 180px;
}
.loading3{
    width: 160px;
    height: 160px;
}
.loading4{
    width: 140px;
    height: 140px;
}
.loading5{
    width: 120px;
    height: 120px;
}
.loading6{
    width: 100px;
    height: 100px;
}
.loading7{
    width: 80px;
    height: 80px;
}
.loading1::before,
.loading1::after{
    width: 200px;
    height: 200px;
}
.loading2::before,
.loading2::after{
    width: 180px;
    height: 180px;
}
.loading3::before,
.loading3::after{
    width: 160px;
    height: 160px;
}
.loading4::before,
.loading4::after{
    width: 140px;
    height: 140px;
}
.loading5::before,
.loading5::after{
    width: 120px;
    height: 120px;
}
.loading6::before,
.loading6::after{
    width: 100px;
    height: 100px;
}
.loading7::before,
.loading7::after{
    width: 80px;
    height: 80px;
}
.loading{
    position: absolute;
    border-radius: 50%;
    border-top: 5px solid red;

    /* For centering element */
    display: flex;
    justify-content: center;
    align-items: center;

    /* For our loading animation */
    animation: animate 1.5s linear infinite;
}

/* For other 2 color */
.loading::before,.loading::after{
    position: absolute;
    content: '';
    border-radius: 50%;
}
.loading::before{
    border-top: 5px solid orange;
    transform: rotate(120deg);
}
.loading::after{
    border-top: 5px solid steelblue;
    transform: rotate(240deg);
}


/* We declare it in loading class */
@keyframes animate {
    100%{
        transform: rotate(360deg);
    }
    
}
`;
const Spinner = () => {
    return (
        <SpinnerContainer>
            <div className=" loading loading1"> </div>
            <div className="loading loading2"></div>
            <div className="loading loading3"></div>
            <div className="loading loading4"></div>
            <div className="loading loading5"></div>
            <div className="loading loading6"></div>
            <div className="loading loading7"></div>
        </SpinnerContainer>
    )
}

export default Spinner