import React from 'react'
import axios from 'axios'

import TrailCard from './TrailCard'

class TrailIndex extends React.Component {
  state = { trails: [] }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/trails')
      this.setState({ trails: res.data })
    } catch (err){
      console.log(err)
    }
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {this.state.trails.map(trail => (
              <TrailCard key= {trail.name} {...trail}/>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default TrailIndex