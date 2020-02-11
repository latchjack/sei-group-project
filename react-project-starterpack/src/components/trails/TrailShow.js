import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from './../../lib/Auth'

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


handleDelete = async () => {
  const trailId = this.props.match.params.id
  try {
    await axios.delete(`/api/trails/${trailId}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}
    ` }
    })
    this.props.history.push('/trails')
  } catch (err) {
    console.log(err.response)
  }
} 

isOwner = () => {
  console.log('make trail', Auth.getPayLoad().sub)
  console.log('current user', this.state.trail.user._id)
  return Auth.getPayLoad().sub === this.state.trail.user._id
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
          <Link to={'/trails/:id/complete'}><button>Complete Form</button></Link>
          <Link to={'/trails/new'}><button>Make a new trail!</button></Link>
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

export default TrailCard