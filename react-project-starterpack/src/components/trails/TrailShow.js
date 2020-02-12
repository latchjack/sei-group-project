import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Collapsible from 'react-collapsible'
import auth from '../../lib/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import CompleteForm from '../trails/CompleteForm'
import IdMap from '../common/IdMap'

class TrailShow extends React.Component {
  state = {
    trail: null,
    save: false,
    text: '',
    image: null
  }

  async componentDidMount() {
    const trailId = this.props.match.params.id
    try {
      const res = await axios.get(`/api/trails/${trailId}`)
      this.setState({ trail: res.data })
    } catch (err) {
      console.log(err)
    }
  }

<<<<<<< HEAD
=======
  handleDelete = async () => {
    const trailId = this.props.match.params.id
    try {
      await axios.delete(`/api/trails/${trailId}`, {
        headers: {
          Authorization: `Bearer ${auth.getToken()}`
        }
      })
      this.props.history.push('/trails')
    } catch (err) {
      this.props.history.push('/notfound')
    }
  }

>>>>>>> d382e752c98902ee1dc0e7d32f73424a7018fbb1
  isOwner = () => {
    return auth.getPayLoad().sub === this.state.trail.user._id
  }

  handleSave = async () => {
    const trailId = this.props.match.params.id
    try {
      await axios.get(`/api/trails/${trailId}/like`, {
        headers: { Authorization: `Bearer ${auth.getToken()}` }
      })
    } catch (err) {
      console.log(err.response)   
    }
  }

<<<<<<< HEAD
  handleDelete = async () => {
    const trailId = this.props.match.params.id
    try {
      await axios.delete(`/api/trails/${trailId}/like`, {
        headers: { Authorization: `Bearer ${auth.getToken()}` }
      })
    } catch (err) {
      console.log(err.response) 
=======

  handleChange = e => {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const trailId = this.props.match.params.id
    console.log(this.state.data, 'submit')
    try {
      await axios.post(`/api/trails/${trailId}/complete`, this.state.data,
        {
          headers: { Authorization: `Bearer ${auth.getToken()}` }
        })
      this.props.history.push(`/trails/${trailId}`) 
    } catch (err) {
      this.setState({ errors: err.response.data.errors })
>>>>>>> d382e752c98902ee1dc0e7d32f73424a7018fbb1
    }
  }




  handleUpload = async ({ target: { files } }) => {
    const data = new FormData
    data.append('file', files[0])
    data.append('upload_preset', 'rksde5wr')
    const res = await axios.post(' https://api.cloudinary.com/v1_1/dbpx50jcj/image/upload', data)
    this.setState({ image: res.data.url }, () => {
      this.handleChange({ target: { name: 'image', value: res.data.url } })
    })
  }





  render() {
    const { trail } = this.state
    if (!trail) return null
<<<<<<< HEAD
    console.log(trail.likes)
=======
    const labelClass = this.props.labelClassName ? this.props.labelClassName : 'default_class'
    const { image } = this.state
>>>>>>> d382e752c98902ee1dc0e7d32f73424a7018fbb1
    return (
      <section className="section">
        <div className="SHOWPAGE">
          <h2 className="title is-3">{trail.name} 🔎</h2>
          <h4>{trail.directions}</h4>
          <div className="column-is-half">
<<<<<<< HEAD
            <button onClick={this.handleSave} className="button is-danger">
              <span className="icon is-small">
                <FontAwesomeIcon icon={faHeart} />
              </span>
              <span>Save</span>
            </button>
            <Link to={`/trails/${trail._id}/complete`}><button className="button is-warning">I have completed this trail</button></Link>
=======
>>>>>>> d382e752c98902ee1dc0e7d32f73424a7018fbb1
          </div>
          <hr />
          <div className="columns">
            <div className="column is-half">
<<<<<<< HEAD
              <figure className="image">
                <img src={trail.image} alt={trail.name} id="ShowImage" />
              </figure>
=======
              <button onClick={this.handleClick} className="button is-danger">
                <span className="icon is-small">
                  <FontAwesomeIcon icon={faHeart} />
                </span>
                <span>Save</span>
              </button>
              <div className="Mapbox">
                <br />
                
                <IdMap 
                  data={{
                    latitude: trail.latitude,
                    longitude: trail.longitude
                  }}
                />
              </div>
>>>>>>> d382e752c98902ee1dc0e7d32f73424a7018fbb1
              <br />
            </div>
            <div className="container">
              <h3 className="title is-3">Trail Clues</h3>
              <hr />
              <Collapsible trigger='ClueOne +' className="dropDown">
                <p className="showClue">1. {trail.clueOne}</p>
              </Collapsible>
              <hr />
              <Collapsible trigger='Clue Two +' className="dropDown">
                <p className="showClue">2. {trail.clueTwo}</p>
              </Collapsible>
              <hr />
              <Collapsible trigger='Clue Three +' className="dropDown">
                <p className="showClue"> 3. {trail.clueThree}</p>
              </Collapsible>
              <hr />
              <h4>{trail.weatherFactor}</h4>
              <Collapsible trigger='Have You Completed This GeoCache?' className="dropDown">
                <section className="section">
                  <div className="columns">
                    <form onSubmit={this.handleSubmit} className="column is-half">
                      <h2 className="title">Geocache Completion Form</h2>
                      <div className="field">
                        <label className="label">How was your experience?</label>
                        <div className="control">
                          <input
                            className="input"
                            name="text"
                            required
                            placeholder="Text"
                            onChange={this.handleChange}               
                          />
                        </div>
                      </div>
                      <hr />
                      {image ? 
                        <div>
                          <img src={image} />
                        </div>
                        :
          <>
            <h4>Please upload a photo</h4>
            <br />
            <label className={labelClass}>{this.props.labelText}</label>
            <input
              className={this.props.inputClassName}
              type="file"
              onChange={this.handleUpload}
            />
          </>
                      }
                      <hr />
                      <button type="submit" className="button is-fullwidth is-warning">Submit</button>
                    </form>
                  </div>
                </section>
                  
              </Collapsible>
          
              <hr />
              <h4>Is Weather a Factor? {trail.weatherFactor}</h4>
              <br />
             

              {this.isOwner() &&
                <>
                  <Link to={`/trails/${trail._id}/edit`} className="button is-warning">Edit Trail</Link>
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

export default TrailShow