import React, { PureComponent } from 'react'
import axios from 'axios'
import ReactMapGL, { Marker, Popup, NavigationControl } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Component } from 'react'
import { get } from 'mongoose'

// const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')
const mapboxToken = process.env.MAPBOX_ACCESS_TOKEN
// const pinImage = '/src/assets/pin.png'

class Map extends React.Component {

  state = {
    viewport: {
      width: 600,
      height: 600,
      latitude: 51.520,
      longitude: -0.128,
      zoom: 12
    },
    trailPoints: []
  }

  function onHover(params) {
    
  }

  async componentDidMount() {
    console.log('I have mounted')
    try {
      const res = await axios.get('localhost:4000')
      console.log(res.data)
      this.setState({ trailPoints: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <ReactMapGL mapboxApiAccessToken={mapboxToken}
        mapStyle="mapbox://styles/mapbox/streets-v9" 
        {...this.state.viewport} 
        onViewportChange={viewport => this.setState({ viewport })}>
        {/* <Markers data={TRAILS} /> */}
        <NavigationControl showCompass />
        {this.state.trailPoints.map(trail => (
          <TrailMarkers key={trail.name} {...trail} > <div className="pins" /> </TrailMarkers>
        ))}
      </ReactMapGL>
    )
  }
  // render() {
  //   console.log(this.state.trailPoints)
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