import React, { useEffect } from 'react'


const Time = () => {

    let getTime = new Date();
    const [currentTime, setCurrentTime] =  React.useState(getTime.toLocaleDateString());
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentTime(getTime.toLocaleTimeString());
        }, 1000);

        return () => clearTimeout(timer);
})
return (
    <div>{currentTime}</div>
)
}

export default Time