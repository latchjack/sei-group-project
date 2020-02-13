import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Collapsible from 'react-collapsible'
import auth from '../../lib/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartBroken, faCloudSunRain, faBuilding } from '@fortawesome/free-solid-svg-icons'
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

  handleLikeDelete = async () => {
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

  handleChange = e => {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleSubmit = async e => {
    //e.preventDefault()
    const trailId = this.props.match.params.id
    console.log(this.state.data, 'submit')
    try {
      await axios.post(`/api/trails/${trailId}/complete`, this.state.data,
        {
          headers: { Authorization: `Bearer ${auth.getToken()}` }
        })
      this.setState({ image: null, text: '' })
    } catch (err) {
      this.setState({ errors: err.response.data.errors })
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
    if (!this.state.trail) return null
    console.log(this.state.trail.completion.map(c => c.text))
    const { trail } = this.state
    if (!trail) return null
    const labelClass = this.props.labelClassName ? this.props.labelClassName : 'default_class'
    const { image } = this.state
    return (
      <section className="section">
        <div className="SHOWPAGE">
          <h2 className="title is-3">{trail.name} 🔎</h2>
          {trail.weatherFactor &&
            <div><span className="icon is-small">
              <FontAwesomeIcon icon={faCloudSunRain} /> </span>
            <p>You&apos;ll need good weather for this trail!</p>
            </div>
          }
          <br />
          {!trail.weatherFactor &&
            <div><span className="icon is-small">
              <FontAwesomeIcon icon={faBuilding} /> </span> 
            <p>You can do this trail in any weather!</p>
            </div>
          }
          <button onClick={this.handleSave} className="button is-danger">
            <span className="icon is-small">
              <FontAwesomeIcon icon={faHeart} />
            </span>
            <span>Save</span>
          </button>
          <button onClick={this.handleLikeDelete} className="button">
            <span className="icon is-small">
              <FontAwesomeIcon icon={faHeartBroken} />
            </span>
            <span>Remove</span>
          </button>
          <div className="column-is-half">
          </div>
          <hr />
          <div className="columns">
            <div className="column is-half">
           
              <div className="Mapbox">
                <br />
              
                <IdMap
                  data={{
                    latitude: trail.latitude,
                    longitude: trail.longitude
                  }}
                />
              </div>
              <br />
              <div>Comments</div>
              {this.state.trail.completion.map(complete => {
                return <div key={complete._id}>
                  <h2>{complete.text}</h2>
                  <img src={complete.image}/>
                </div>
              })  
              }
              <br />
            </div>
            <div className="container">
              <h3 className="title is-3">Trail Clues</h3>
              <hr />
              <Collapsible trigger='ClueOne +' className="dropDown">
                <p className="showClue">{trail.clueOne}</p>
              </Collapsible>
              <hr />
              <Collapsible trigger='Clue Two +' className="dropDown">
                <p className="showClue">{trail.clueTwo}</p>
              </Collapsible>
              <hr />
              <Collapsible trigger='Clue Three +' className="dropDown">
                <p className="showClue">{trail.clueThree}</p>
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