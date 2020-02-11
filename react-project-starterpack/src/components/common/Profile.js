import React from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'
import TrailCard from '../trails/TrailCard'

/*
GET user with axios so that I can access:
  -createdTrails
  -likes

console.log user object so I know everything that comes in with it

display username, createdTrails and Likes in a "newsfeed"

_________________
Filter out trails not created by this user
Map remaining trails onto the page (using the card rory created)
_________________

on navbar:
<Link className="navbar-item" to="/profile">Profile</Link>

on app.js:
import Profile from './components/common/Profile'
<Route path="/profile" component={Profile} />

*/

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
    return (
      <section className="section">
        <h1>Username and User Image</h1>
        <h2>Trails that user has made:</h2>
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {profile.createdTrails && profile.createdTrails.map(trail => (
              <TrailCard key={trail._id} {...trail} />
            ))}
          </div>
        </div>
      </section>
    )
  }

}

export default Profile