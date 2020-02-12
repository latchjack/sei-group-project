import React from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const mapboxToken = process.env.MAPBOX_ACCESS_TOKEN

const IdMap = ({ data: { latitude, longitude } }) => {

  const viewport = {
    width: 550,
    height: 500,
    zoom: 16
  }

  return (
    <div className="columns">
      <div className="column  ">
        <ReactMapGL 
          mapboxApiAccessToken={mapboxToken}
          mapStyle="mapbox://styles/mapbox/streets-v9" 
          {...{ ...viewport, latitude, longitude } } 
        >
          {latitude &&
          <Marker 
            longitude={longitude} 
            latitude={latitude} > 
            <div className="pin" /> 
          </Marker>
          }
        </ReactMapGL>
      </div>
    </div>
  )
}

export default IdMap
