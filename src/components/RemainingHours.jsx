import React, { useEffect, useState } from 'react';

const RemainingHours = () => {

    const getTime = new Date();
    const [getHour, setHour] = useState(24 - getTime.getHours());

    useEffect(() => {
        const timer = setTimeout(() => setHour(24 - getTime.getHours()), 1000);
        return () => clearTimeout(timer);
    })
  return (
    <div>{getHour}</div>
  )
}

export default RemainingHours