import React from 'react'
import axios from 'axios'

import auth from '../../lib/auth'
import TrailCard from '../trails/TrailCard'

class Profile extends React.Component {

  state = {
    profile: {}
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/profile', {
        headers: { Authorization: `Bearer ${auth.getToken()}` }
      })
      this.setState({ profile: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { profile } = this.state
    return (
      <section className="section">
        <h1 className="title">{profile.username}&apos;s profile</h1>
        <div className="container">
          <h2 className="title is-4">Trails that {profile.username} has made:</h2>
          <div className="columns is-mobile is-multiline">
            {profile.createdTrails && profile.createdTrails.length === 0 && 
            <p className="subtitle">You haven&apos;t created any trails yet!</p>}
            {profile.createdTrails && profile.createdTrails.map(trail => (
              <TrailCard key={trail._id} {...trail} />
            ))}
          </div>
        </div>
        <hr />
        <div className="container">
          <h2 className="title is-4">Saved Trails:</h2>
          <div className="columns is-mobile is-multiline">
            {profile.likedTrails && profile.likedTrails.length === 0 && 
            <p className="subtitle">You have not saved any trails yet!</p>}
            {profile.likedTrails && profile.likedTrails.map(trail => (
              <TrailCard key={trail._id} {...trail} />
            ))}
          </div>
        </div>
        <hr />
        <div className="container">
          <h2 className="title is-4">Completed Trails:</h2>
          <div className="columns is-mobile is-multiline">
            {profile.completedTrails && profile.completedTrails.length === 0 && 
            <p className="subtitle">You have not completed any trails yet!</p>}
            {profile.completedTrails && profile.completedTrails.map(trail => (
              <TrailCard key={trail._id} {...trail} />
            ))}
          </div>
        </div>
      </section>
    )
  }

}

export default Profile