import React from 'react'
import axios from 'axios'
import ReactMapGL, { Marker, Popup, NavigationControl } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
// import { Component } from 'react'
import { get } from 'mongoose'

// const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')
const mapboxToken = process.env.MAPBOX_ACCESS_TOKEN
// const pinImage = '/src/assets/pin.png'

class Map extends React.Component {

  state = {
    viewport: {
      width: 800,
      height: 600,
      latitude: 51.520,
      longitude: -0.128,
      zoom: 12
    },
    trailPoints: [],
    clickedLocation: null,
    showPopup: false
  }

  async componentDidMount() {
    console.log('I have mounted')
    try {
      const res = await axios.get('/api/trails')
      console.log(res.data)
      this.setState({ trailPoints: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  handleClick = (e) => {
    this.setState({
      clickedLocation: e.lngLat, showPopup: !this.state.showPopup
    })
    console.log(this.state.clickedLocation)
  }

  render() {
    // console.log(this.state)
    const { showPopup } = this.state
    return (
      <ReactMapGL mapboxApiAccessToken={mapboxToken}
        mapStyle="mapbox://styles/mapbox/streets-v9" 
        {...this.state.viewport} 
        onViewportChange={viewport => this.setState({ viewport })}
        onClick={this.handleClick}
      >
        

        <NavigationControl showCompass />
        
        {this.state.trailPoints.map(trail => (
          <Marker data={this.state.trailPoints} key={trail.id} longitude={trail.longitude} latitude={trail.latitude} {...trail} > 
            <div className="pins" /> 
          </Marker>
        ))}
        {/* {showPopup && <Popup
          latitude={this.state.clickedLocation[0]}
          longitude={this.state.clickedLocation[1]}
          closeButton={true}
          closeOnClick={false}
          onClose={() => this.setState({ showPopup: false })}
          anchor="top" >
          <div>You are here</div>
        </Popup>} */}
      </ReactMapGL>
    )
  }
}

export default Map