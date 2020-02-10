import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
      <div className="container">
        <h2 className="title">🔍 {trail.name} 🔎</h2>
        <h4>{trail.directions}</h4>
        <div className="column-is-half">
          <Link to={'/trails/CompleteForm'}><button>Complete Form</button></Link>
          <Link to={'/trails/TrailForm'}><button>Trail Form</button></Link>
        </div>
        <hr/>
        <div className="columns">
          <div className="column is-half">
            <figure className="image">
              <img src={trail.image} alt={trail.name}/>
            </figure>
          </div>
          <div className="container">
            <h3>Trail Clues</h3>
            <hr/>
            <h4>1.{trail.clueOne}</h4>
            <hr/>
            <h4>2.{trail.clueTwo}</h4>
            <hr/>
            <h4>3.{trail.clueThree}</h4>
            <hr/>
            <h4>{trail.weatherFactor}</h4>
          </div>
        </div>
      </div>
    </section>
  )
}
}

export default TrailCard