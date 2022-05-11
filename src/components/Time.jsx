import React, { useEffect, useState } from 'react'


const Time = () => {

    let getTime = new Date();
    const [currentTime, setCurrentTime] =  useState(getTime.toLocaleDateString());
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentTime(getTime.toLocaleTimeString());
        }, 1000);

        return () => clearTimeout(timer);
})
return (
    <>{currentTime}</>
)
}

export default Time