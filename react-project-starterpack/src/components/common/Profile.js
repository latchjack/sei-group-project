import React from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'
import TrailCard from '../trails/TrailCard'

class Profile extends React.Component {

  state = {
    profile: {}
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/profile', {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.setState({ profile: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { profile } = this.state
    console.log(this.state.profile)
    return (
      <section className="section">
        <h1>Username and User Image</h1>
        <div className="container">
          <h2>Trails that user has made:</h2>
          <div className="columns is-mobile is-multiline">
            {profile.createdTrails && profile.createdTrails.length === 0 && 
            <p>You have not created any trails yet!</p>}
            {profile.createdTrails && profile.createdTrails.map(trail => (
              <TrailCard key={trail._id} {...trail} />
            ))}
          </div>
        </div>
        <div className="container">
          <h2>Trails that user has liked:</h2>
          <div className="columns is-mobile is-multiline">
            {profile.likedTrails && profile.likedTrails.length === 0 && 
            <p>You have not saved any trails yet!</p>}
            {profile.likedTrails && profile.likedTrails.map(trail => (
              <TrailCard key={trail._id} {...trail} />
            ))}
          </div>
        </div>
      </section>
    )
  }

}

export default Profile