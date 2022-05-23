import React, { useEffect, useState } from 'react'


const Time = () => {

    const [currentTime, setCurrentTime] =  useState(new Date());
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearTimeout(timer);
}, [currentTime])
return (
    <>{currentTime.toLocaleTimeString()}</>
)
}

export default Time