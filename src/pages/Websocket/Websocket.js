import React, { useEffect, useState } from 'react';

//import { socket } from '../../services/websocket-connect';

import './websocket.css';

const Websocket = () => {



    const [droneStatus, setDroneStatus] = useState([])



    useEffect(() => {
        const socketUrl = 'ws://localhost:8000/ws-drone'
        const ws = new WebSocket(socketUrl)
        ws.onopen = () => {
            console.log('connected')
        }
        ws.onmessage = (e) => {
            console.log(e)
            const droneStatusData = e.data
            console.log(JSON.parse(droneStatusData))
            setDroneStatus(droneStatusData)
        }
    })

    return (
        <div className="websocket">
            <h2>
                WebSocket Example
            </h2>
            {/* {
                drone.map((drone, index) => {
                    return (
                        <div key={index}>
                            <p>{drone}</p>
                        </div>
                    )
                }
                )} */}
        </div>
    )
}

export default Websocket