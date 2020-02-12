import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Collapsible from 'react-collapsible'
import auth from '../../lib/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import CompleteForm from '../trails/CompleteForm'
import IdMap from '../common/IdMap'

class TrailShow extends React.Component {
  state = {
    trail: null,
    save: false
  }

  async componentDidMount() {
    const trailId = this.props.match.params.id
    try {
      const res = await axios.get(`/api/trails/${trailId}`)
      this.setState({ trail: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  isOwner = () => {
    return auth.getPayLoad().sub === this.state.trail.user._id
  }

  handleSave = async () => {
    const trailId = this.props.match.params.id
    try {
      await axios.get(`/api/trails/${trailId}/like`, {
        headers: { Authorization: `Bearer ${auth.getToken()}` }
      })
    } catch (err) {
      console.log(err.response)   
    }
  }

  handleDelete = async () => {
    const trailId = this.props.match.params.id
    try {
      await axios.delete(`/api/trails/${trailId}/like`, {
        headers: { Authorization: `Bearer ${auth.getToken()}` }
      })
    } catch (err) {
      console.log(err.response) 
    }
  }

  render() {
    const { trail } = this.state
    if (!trail) return null
    console.log(trail.likes)
    return (
      <section className="section">
        <div className="SHOWPAGE">
          <h2 className="title is-3">🔍 {trail.name} 🔎</h2>
          <h4>{trail.directions}</h4>
          <div className="column-is-half">
            <button onClick={this.handleSave} className="button is-danger">
              <span className="icon is-small">
                <FontAwesomeIcon icon={faHeart} />
              </span>
              <span>Save</span>
            </button>
            <Link to={`/trails/${trail._id}/complete`}><button className="button is-warning">I have completed this trail</button></Link>
          </div>
          <hr />
          <div className="columns">
            <div className="column is-half">
              <figure className="image">
                <img src={trail.image} alt={trail.name} id="ShowImage" />
              </figure>
              <br />
            </div>
            <div className="container">
              <h3 className="title is-3">Trail Clues</h3>
              <hr />
              <Collapsible trigger='ClueOne +' className="dropDown">
                <p>1. {trail.clueOne}</p>
              </Collapsible>
              <hr />
              <Collapsible trigger='Clue Two +' className="dropDown">
                <p>2. {trail.clueTwo}</p>
              </Collapsible>
              <hr />
              <Collapsible trigger='Clue Three +' className="dropDown">
                <p>3. {trail.clueThree}</p>
              </Collapsible>
              <hr />
              <h4>{trail.weatherFactor}</h4>
              <div className="Mapbox">
                <h4 className="title is-3">Map Locations</h4>
                <br />
                <img src='https://c7.uihere.com/icons/305/955/619/gps-location-map-mobile-phone-pointer-smartphone-icon-3443604f1c2335175832ded904a4f6b7.png' />
                <IdMap 
                  data={{
                    latitude: trail.latitude,
                    longitude: trail.longitude
                  }}
                />
              </div>
              <hr />
              <br />
              {this.isOwner() &&
                <>
                  <Link to={`/trails/${trail._id}/edit`} className="button is-warning">Edit Trail</Link>
                  <hr />
                  <button onClick={this.handleDelete} className="button is-danger">Delete Trail</button>
                </>
              }
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default TrailShow