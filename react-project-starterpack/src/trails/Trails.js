import React from 'react'
import axios from 'axios'

import TrailProfile from './TrailProfile'

class Trails extends React.Component {
  state = { trails: [] }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/trails')
      console.log(res)
      this.setState({ trails: res.data })
      console.log(this.state)
    } catch (err){
      console.log(err)
    }
  }
  render() {
    console.log(this.state)
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {this.state.trails.map( trail =>(
              <TrailProfile key= {trail.name} {...trail}/>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default Trails