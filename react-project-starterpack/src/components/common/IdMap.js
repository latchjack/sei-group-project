import React from 'react'
import axios from 'axios'

import ReactMapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const mapboxToken = process.env.MAPBOX_ACCESS_TOKEN

class IdMap extends React.Component {

  state = {
    viewport: {
      width: 550,
      height: 500,
      latitude: 51.515313 || `${this.state.params.id.latitude}`,
      longitude: -0.071626 || `${this.state.params.id.longitude}`,
      zoom: 15
    },
    clickedLocation: null,
    showPopup: false
  }

  async componentDidMount () {
    console.log('I have mounted')
    try {
      const res = await axios.get('/api/trails/:id')
      console.log(res.data)
      this.setState({ clickedLocation: res.data })
    } catch (err) {
      console.log(err)
    }

  }

  render() {
    console.log(this.props)
    return (
      <div className="columns">
        <div className="column  ">
          <ReactMapGL mapboxApiAccessToken={mapboxToken}
            mapStyle="mapbox://styles/mapbox/streets-v9" 
            {...this.state.viewport} 
            onViewportChange={viewport => this.setState({ viewport })}
          >
            {this.props.data.latitude &&
              <Marker 
                longitude={this.props.data.longitude} 
                latitude={this.props.data.latitude} > 
                <div className="pin" /> 
              </Marker>
            }
          </ReactMapGL>
        </div>
      </div>
    )
  }
}

export default IdMap