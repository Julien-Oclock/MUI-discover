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
            const toto = JSON.parse(JSON.parse(droneStatusData))
            console.log(toto[1])
            setDroneStatus(toto)
        }
    })

    return (
        <div className="websocket">
            <h2>
                WebSocket Example
            </h2>
            {
                console.log(droneStatus[1])
            }
        </div>
    )
}

export default Websocket