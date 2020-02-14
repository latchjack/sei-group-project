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
      <div className="box" id="profileBox">
        <div className="column is-mobile is-multiline">
          <section className="section" id="profileSection">
            <div>
              <i className="fas fa-map-marked-alt"></i>
              {profile.username}&apos;s profile
            </div>
            
                  
            <div className="container">
              <div className="box">
                <h2 className="is-size-4">Trails {profile.username} has made</h2>
                <div>&nbsp;</div> 
                <div className="columns is-mobile is-multiline">
                  {profile.createdTrails && profile.createdTrails.length === 0 && 
            <p className="subtitle is-5">You haven&apos;t created any trails yet!</p>}
                  {profile.createdTrails && profile.createdTrails.map(trail => (
                    <TrailCard key={trail._id} {...trail} />
                  ))}
                </div>
              </div>
            </div>
            <hr />
            <div className="container">
              <div className="box">
                <h2 className="is-size-4">Saved Trails</h2>
                <div>&nbsp;</div> 
                <div className="columns is-mobile is-multiline">
                  {profile.likedTrails && profile.likedTrails.length === 0 && 
            <p className="subtitle is-5">&nbsp;&nbsp;You have not saved any trails yet!</p>}
                  {profile.likedTrails && profile.likedTrails.map(trail => (
                    <TrailCard key={trail._id} {...trail} />
                  ))}
                </div>
              </div>
            </div>
            <hr />
            <div className="container">
              <div className="box">
                <h2 className="is-size-4">Completed Trails</h2>
                <div>&nbsp;</div> 
                <div className="columns is-mobile is-multiline">
                  {profile.completedTrails && profile.completedTrails.length === 0 && 
            <p className="subtitle is-5">&nbsp;&nbsp;You have not completed any trails yet!</p>}
                  {profile.completedTrails && profile.completedTrails.map(trail => (
                    <TrailCard key={trail._id} {...trail} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }

}

export default Profile