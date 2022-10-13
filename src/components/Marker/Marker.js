import { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React from "react";
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  marker : {
    '&:hover' : {
      filter: 'invert(27%) sepia(51%) saturate(2878%) brightness(104%) contrast(97%)'
  }
  }

})

const MarkerCustom = ({ uuid, latitude, longitude, isDark, rotationValue, handlePopup }) => {

  const classes = useStyles()

  return (
    <Marker
      className="marker"
      longitude={longitude}
      latitude={latitude}
      rotation={rotationValue}
    >
    <svg 
      className={classes.marker}
      onClick={() => {
        handlePopup(uuid)
      }} 
      width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 12H6V10H0V0.845999C1.48755e-05 0.759114 0.0226703 0.673732 0.0657334 0.598269C0.108797 0.522806 0.170781 0.459867 0.245577 0.415656C0.320372 0.371445 0.405398 0.347487 0.492273 0.346144C0.579148 0.344802 0.664873 0.36612 0.741 0.407999L19.203 10.562C19.2814 10.6052 19.3468 10.6686 19.3923 10.7456C19.4378 10.8227 19.4618 10.9105 19.4618 11C19.4618 11.0895 19.4378 11.1773 19.3923 11.2544C19.3468 11.3314 19.2814 11.3948 19.203 11.438L0.741 21.592C0.664873 21.6339 0.579148 21.6552 0.492273 21.6539C0.405398 21.6525 0.320372 21.6286 0.245577 21.5843C0.170781 21.5401 0.108797 21.4772 0.0657334 21.4017C0.0226703 21.3263 1.48755e-05 21.2409 0 21.154V12Z" fill="#0FA958" />
      </svg>
    </Marker>
  )
}


export default MarkerCustom;