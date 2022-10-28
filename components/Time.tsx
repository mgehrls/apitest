"use client"

import { useState } from "react"

const Time = () => {

    const [currentTime, setCurrentTime] = useState(new Date())

    const updateTime = () => {
        setCurrentTime(new Date())
    }

    setInterval(updateTime, 1000)

    return(
        <div>
            <h1 style={{fontSize:"80px", textAlign:"center", margin:"0", textShadow:"var(--dark-ts)", cursor:'default'}}>{currentTime.toLocaleTimeString("en-us", {timeStyle:'short'})}</h1>
            <h3 style={{textAlign:"center", textShadow:"var(--dark-ts)", cursor:'default'}}>{currentTime.toLocaleDateString()}</h3>
        </div>
    )
}

export default Time