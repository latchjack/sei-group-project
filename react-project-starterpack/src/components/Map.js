import React, { PureComponent } from 'react'
// import MapGL, { Marker } from 'react-map-gl'
// import axios from 'axios'
import ReactMapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Component } from 'react'

// const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')
const mapboxToken = process.env.MAPBOX_ACCESS_TOKEN
// const pinImage = '/src/assets/pin.png'


// ? THROWAWAY DATABASE WHICH WILL BE REPLACED BY ASTARA'S SEEDFILE
state = {
  TRAILS: [
    { name: 'a', longitude: 51.521, latitude: -0.129 },
    { name: 'b', longitude: 51.522, latitude: -0.130 },
    { name: 'c', longitude: 51.523, latitude: -0.131 }
  ]
}

class Markers extends PureComponent {
  render() {
    return (
      this.state.trails.map(trail => <Marker key={trail.name} longitude={trail.longitude} latitude={trail.latitude}> <div className="pins" /> </Marker>
      ))
  }
}

class Map extends Component {

  state = {
    viewport: {
      width: 600,
      height: 600,
      latitude: 51.520,
      longitude: -0.128,
      zoom: 12
    }
  };

  render() {
    return (
      <ReactMapGL mapboxApiAccessToken={mapboxToken}
        mapStyle="mapbox://styles/mapbox/streets-v9" 
        {...this.state.viewport} 
        onViewportChange={viewport => this.setState({ viewport })}>
        <Markers data={TRAILS} />
      </ReactMapGL>
    )
  }
  // render() {
  //   return (
  //     <ReactMapGL
  //       mapboxApiAccessToken={mapboxToken}
  //       mapStyle="mapbox://styles/mapbox/streets-v9"
  //       {...this.state.viewport}
  //       onViewportChange={(viewport) => this.setState({ viewport })}
  //     />
      
  //   )
  // }
}

export default Map