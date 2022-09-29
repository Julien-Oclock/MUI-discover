import Map, { AttributionControl, GeolocateControl, NavigationControl, FullscreenControl, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useEffect, useState, Component } from "react";
import { Button, Typography } from "@mui/material";
import {makeStyles} from '@material-ui/core'

import './styles.css'

const useStyles = makeStyles({
    content : {
        paddingLeft : '15vw',
        width : '85vw',
        height : '100vh',
        marginTop : '-20px'
    }
})
const mapStyle = 'mapbox://styles/julien-drotek/cl74lev4i003a14nydihpt65z';

function MyMap() {

    const classes = useStyles()
    return (
        <div className={classes.content}>
            <Map
            mapboxAccessToken="pk.eyJ1IjoianVsaWVuLWRyb3RlayIsImEiOiJjbDZjNGlkMW4wMTFkM2JuMmVwb2RoYmw3In0.9BWa5Mz818kQyHwPsBUnVQ"
            initialViewState ={{
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
            </Map>
        </div>
     );
}

export default MyMap;