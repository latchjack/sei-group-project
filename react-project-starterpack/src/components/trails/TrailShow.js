import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Collapsible from 'react-collapsible'

class TrailCard extends React.Component{
state = { trail: null }

async componentDidMount() {
  const trailId = this.props.match.params.id
  try {
    const res = await axios.get(`/api/trails/${trailId}`)
    this.setState({ trail: res.data })
  } catch (err) {
    console.log(err)
  }
}

render() {
  const { trail } = this.state
  if (!trail) return null
  return (
    <section className="section">
      <div className="SHOWPAGE">
        <h2 className="title is-3">🔍 {trail.name} 🔎</h2>
        <h4>{trail.directions}</h4>
        <div className="column-is-half">
        </div>
        <hr/>
        <div className="columns">
          <div className="column is-half">
            <figure className="image">
              <img src={trail.image} alt={trail.name} id="ShowImage"/>
            </figure>
            <br/>
            <Link to={'#'}><button className=" button is-success">Edit Trail</button></Link>
            <Link to={'#'}><button className="button is-danger">Delete Trail</button></Link>
          </div>
          <div className="container">
            <h3 className="title is-3">Trail Clues</h3>
            <hr/>
            <Collapsible trigger = 'ClueOne +'className="dropDown">
              <p>{trail.clueOne}</p>
            </Collapsible>
            <hr/>
            <Collapsible trigger='Clue Two +'className="dropDown">
              <p>2.{trail.clueTwo}</p>
            </Collapsible>
            <hr/>
            <Collapsible trigger='Clue Three +'className="dropDown">
              <p>3.{trail.clueThree}</p>
            </Collapsible>
            <hr/>
            <h4>{trail.weatherFactor}</h4>
            <div className="Mapbox">
              <h4 className="title is-3">Map Locations</h4>
              <br/>
              <img src='https://c7.uihere.com/icons/305/955/619/gps-location-map-mobile-phone-pointer-smartphone-icon-3443604f1c2335175832ded904a4f6b7.png'/>
            </div>
            <hr/>
          </div>
        </div>
      </div>
    </section>
  )
}
}

export default TrailCard