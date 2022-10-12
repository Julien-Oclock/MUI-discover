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