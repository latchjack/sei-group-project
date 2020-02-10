import React from 'react'
import axios from 'axios'

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
        <hr/>
        <div className="columns">
          <div className="column is-half">
            <figure className="image">
              <img src={trail.image} alt={trail.name}/>
            </figure>
          </div>
          <h4>{trail.clues}</h4>
          <hr/>
          <h4>{trail.weatherFactor}</h4>
        </div>
      </div>
    </section>
  )
}
}

export default TrailCard