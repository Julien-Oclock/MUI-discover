import Map, { AttributionControl, GeolocateControl, NavigationControl, FullscreenControl, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useEffect, useState, Component } from "react";
import { makeStyles } from '@material-ui/core'


//import components
import MarkerCustom from '../../components/Marker/Marker';
import MarkerPopup from "../../components/MarkerPopup/MarkerPopup";

import './styles.css'


//MUI add CSS properties with MakeStyles object 
const useStyles = makeStyles({
  content: {
    paddingLeft: '15vw',
    width: '85vw',
    height: '100vh',
    marginTop: '-20px'
  }
})

// load mapstyle from mapbox personnal account
const mapStyle = 'mapbox://styles/julien-drotek/cl74lev4i003a14nydihpt65z';

// Connect to the python websocket server
const socketUrl = 'ws://localhost:8000/ws-drone'
const ws = new WebSocket(socketUrl)
ws.onopen = () => {
  console.log('connected')
}


const MyMap = () => {

  // set State for the map
  const [droneStatus, setDroneStatus] = useState([])
  const [CurrentDrone, setCurrentDrone] = useState([])

  useEffect(() => {
    ws.onmessage = (e) => {
      const droneStatusData = e.data
      const JsonDroneStatus = JSON.parse(JSON.parse(droneStatusData))
      setDroneStatus([])
      setDroneStatus(JsonDroneStatus)
    }
  }, [droneStatus])

  const handlePopup = (uuid) => {
    console.log('coucou depuis map')
    console.log(uuid)
    if(uuid){
      setCurrentDrone([])
      let foundedDrone= droneStatus.filter((drone) => drone.uuid === uuid)
      setCurrentDrone(foundedDrone)
    }

  }

  const classes = useStyles()

  return (
    <div className={classes.content}>
      <Map
        mapboxAccessToken="pk.eyJ1IjoianVsaWVuLWRyb3RlayIsImEiOiJjbDZjNGlkMW4wMTFkM2JuMmVwb2RoYmw3In0.9BWa5Mz818kQyHwPsBUnVQ"
        initialViewState={{
          longitude: 1.74540,
          latitude: 43.39382,
          zoom: 15.5
        }}
        mapStyle={mapStyle}
        keyboard={true}
        trackResize={true}
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          showUserHeading={true}
        />
        <NavigationControl
          showCompass={true}
          showZoom={true}
          visualizePitch={true}
        >
        </NavigationControl>
        <FullscreenControl />
        {droneStatus.map((drone) => {
          return (
            <MarkerCustom
              key={drone.uuid}
              latitude={(drone.lat / 10000000).toString()}
              longitude={(drone.lon / 10000000).toString()}
              handlePopup = {handlePopup}
              uuid = {drone.uuid}
            >
            </MarkerCustom>
          )
        })}
      </Map>
      { CurrentDrone.length > 0 &&
            <MarkerPopup
              drone = {CurrentDrone[0]}
            ></MarkerPopup>
          
      }
    </div>
  );
}

export default MyMap;