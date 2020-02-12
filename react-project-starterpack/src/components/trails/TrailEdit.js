import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import TrailForm from '../../components/trails/TrailForm'

class TrailEdit extends React.Component{

  state = {
    data: {
      name: '',
      directions: '',
      longitude: '',
      latitude: '',
      clueOne: '',
      clueTwo: '',
      clueThree: '',  
      image: null,
      clickedLocation: [],
      weatherFactor: false
    }     
  }

  async componentDidMount() {
    const trailId = this.props.match.params.id
    try {
      const res = await axios.get(`/api/trails/${trailId}`)
      this.setState({ data: res.data })
    } catch (err) {
      console.log(err)
    }
  }
  handleChange = ({ target: { name, value } }) => {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const trailId = this.props.match.params.id
    try {
      const { data } = await axios.put(`/api/trails/${trailId}`, this.state.data, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.props.history.push(`/trails/${data._id}`)
    } catch (err) {
      console.log(err.response.data.errors)
    }
  }
  render() {
    return (
      <section className="section">
        <div className="container">
          <TrailForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </section>
    )
  }
}

export default TrailEdit 