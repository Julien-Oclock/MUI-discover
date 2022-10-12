import Map, { AttributionControl, GeolocateControl, NavigationControl, FullscreenControl, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import {makeStyles} from '@material-ui/core';
import React, { useEffect, useState, Component } from "react";



import MarkerCustom from "../Marker/Marker";
import MarkerPopup from "../MarkerPopup/MarkerPopup";
import './styles.css'


const useStyles = makeStyles({
    content: {
      width: '100%',
      height: '100%',
    }
  })


const mapStyle = 'mapbox://styles/julien-drotek/cl74lev4i003a14nydihpt65z';

const Mapbox = ({initialViewState, mapStyle='mapbox://styles/julien-drotek/cl74lev4i003a14nydihpt65z', droneStatus}) => {


    const [CurrentDrone, setCurrentDrone] = useState([])

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
                initialViewState ={
                    {longitude: 1.74540,
                    latitude: 43.39382,
                    zoom: 15.5}
                }
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
                    console.log(drone)
                    return (
                        <MarkerCustom
                            key={drone.uuid}
                            latitude={(drone.lat / 10000000).toString()}
                            longitude={(drone.lon / 10000000).toString()}
                            handlePopup = {handlePopup}
                            uuid = {drone.uuid}
                            >
                        </MarkerCustom>
                    )})}
            </Map>
            { CurrentDrone.length > 0 &&
                <MarkerPopup
                    drone = {CurrentDrone[0]}
                ></MarkerPopup>
            }
        </div>
     );
}

export default Mapbox;