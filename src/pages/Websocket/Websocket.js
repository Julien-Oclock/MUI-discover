import React, { useEffect, useState } from 'react';

//import { socket } from '../../services/websocket-connect';

import './websocket.css';

// const socketUrl = 'ws://localhost:8000/ws-drone'
// const ws = new WebSocket(socketUrl)
// ws.onopen = () => {
//     console.log('connected')
// }

const Websocket = () => {



    // const [droneStatus, setDroneStatus] = useState([])



    // useEffect(() => {
    //     ws.onmessage = (e) => {
    //         console.log(e.data)
    //         const droneStatusData = e.data
    //         const toto = JSON.parse(JSON.parse(droneStatusData))
    //         setDroneStatus([])
    //         console.log({ 'before setDrone': droneStatus });
    //         setDroneStatus(toto)
    //         console.log({ 'after setDrone': droneStatus });


    //     }
    // }, [droneStatus])


    return (
        <div className="websocket">
            <h2>
                WebSocket Example
            </h2>
            {/* {
                droneStatus.map((drone) => {
                    return (
                        <div>
                            <p>{drone.uuid}</p>
                            <ul>
                                <li>alt : {drone.alt}</li>
                                <li>arming state : {drone.arming_state}</li>
                                <li>version : {drone.fw_major}.{drone.fw_minor}.{drone.fw_patch}</li>
                                <li>alt : {drone.alt}</li>
                                <li> lat : {drone.lat}</li>
                                <li> longitude : {drone.lon}</li>
                                <li>battery : {Math.round(drone.battery_status * 100)}%</li>
                                <li>mag : {drone.mag_norm}%</li>
                                <li>time : {drone.time_usec}</li>
                            </ul>
                        </div>

                    )

                }) */}

        </div>
    )
}

export default Websocket