import Map, { AttributionControl, GeolocateControl, NavigationControl, FullscreenControl, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useEffect, useState, Component } from "react";
import { makeStyles, Button } from '@material-ui/core'


import Mapbox from "../../components/Map/mapbox";

import './styles.css'


//MUI add CSS properties with MakeStyles object 
const useStyles = makeStyles({
  content: {
    paddingLeft: '15vw',
    width: '85vw',
    height: '100vh',
    marginTop: '-20px'
  },
  buttonContainer : {
    position : 'absolute',
    left : '16vw',
    top : '15px'
  }
})


const mapStyleDark = 'mapbox://styles/julien-drotek/cl6nm1vhw002k14nfpwncije7'
const mapStyleLight = 'mapbox://styles/julien-drotek/cl74lev4i003a14nydihpt65z'
const mapSateliteStyle = 'mapbox://styles/julien-drotek/cl763y4id003614o0inljfcrh'

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
  const [mapStyles, setMapSyles] = useState({})
  const [currentMapStyle, setCurrentMapStyle] = useState('mapbox://styles/julien-drotek/cl7fx6a3d000i14p5fwk3te36')
  const [initialViewState, setInitialViewState] = useState({
    longitude: 1.74540,
    latitude: 43.39382,
    zoom: 15.5
  })



  useEffect(() => {
    ws.onmessage = (e) => {
      const droneStatusData = e.data
      const JsonDroneStatus = JSON.parse(JSON.parse(droneStatusData))
      setDroneStatus([])
      setDroneStatus(JsonDroneStatus)
    }
  }, [droneStatus])


  const classes = useStyles()

  const handleMapStyle = () => {
    if (currentMapStyle == 'mapbox://styles/julien-drotek/cl7fx6a3d000i14p5fwk3te36'){
      setCurrentMapStyle('mapbox://styles/julien-drotek/cl6nm1vhw002k14nfpwncije7')
    } else if (currentMapStyle == 'mapbox://styles/julien-drotek/cl6nm1vhw002k14nfpwncije7'){
      setCurrentMapStyle('mapbox://styles/julien-drotek/cl763y4id003614o0inljfcrh')
    } else {
      setCurrentMapStyle('mapbox://styles/julien-drotek/cl7fx6a3d000i14p5fwk3te36')
    }
  }

  return (
    <div className={classes.content}>
      <Mapbox
        mapStyle ={currentMapStyle}  
        droneStatus = {droneStatus}
          
      >
      </Mapbox>
      <div className={classes.buttonContainer}>
        <Button onClick={() => {
          handleMapStyle()
        }}
        variant = 'contained'
        >Map style</Button>
      </div>
  </div>
  );
}

export default MyMap;