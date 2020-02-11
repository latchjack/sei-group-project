import React from 'react'
import axios from 'axios'
import Auth from './../../lib/Auth'


class TrailNew extends React.Component {

    state = {
      data: {
        name: '',
        directions: '',
        clueOne: '',
        clueTwo: '',
        clueThree: '',  
        image: null,
        weatherFactor: false//"is weather a factor? true or false - this is a tick box
      }     
    }

    

    handleChange = ({ target: { name, value, checked, type } }) => {
      console.log(this.state.data) //value of type is if someone checked the check box
      const newValue = type === 'checkbox' ? checked : value //update state with calculated new value, if the type is check box then use checked value, if not then use it's own value
      const data = ({ ...this.state.data, [name]: newValue })
      this.setState({ data })
    }

    handleSubmit = async e => {
      e.preventDefault() 
      try {
        const res = await axios.post('/api/trails', this.state.data, {
          headers: { Authorization: `Bearer ${Auth.getToken()}` }
        })
        this.props.history.push(`/trails/${res.data._id}`)
      } catch (err) {
        console.log(err)
      }
    }

    handleUpload = async ({ target: { files } }) => {
      const data = new FormData
      data.append('file', files[0])
      data.append('upload_preset', 'rksde5wr')
      const res = await axios.post(' https://api.cloudinary.com/v1_1/dbpx50jcj/image/upload', data)
      this.setState({ image: res.data.url })
    }
  


    render() {
      const labelClass = this.props.labelClassName ? this.props.labelClassName : 'default_class'
      const { image } = this.state
      return (
        <div className="columns">
          <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter">
            <h2 className="title">Create a new GeoCache</h2>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input 
                  className="input"
                  name="name"
                  required
                  placeholder="Name"
                  onChange={this.handleChange}
                  value={this.state.data.name}
                />
              </div>
            </div> 
            <div className="field">
              <label className="label">Directions</label>
              <div className="control">
                <input 
                  className="input"
                  name="directions"
                  required
                  placeholder="Directions"
                  onChange={this.handleChange}
                  value={this.state.data.directions}
                />
              </div>
            </div> 
            <div className="field">
              <label className="label">Clues</label>
              <div className="control">
                <input 
                  className="input"
                  name="clueOne"
                  required
                  placeholder="Clue One"
                  onChange={this.handleChange}
                  value={this.state.data.clueOne}
                />           
                <input 
                  className="input"
                  name="clueTwo"
                  required
                  placeholder="Clue Two"
                  onChange={this.handleChange}
                  value={this.state.data.clueTwo}
                />
                  
                <input 
                  className="input"
                  name="clueThree"
                  required
                  placeholder="Clue Three"
                  onChange={this.handleChange}
                  value={this.state.data.clueThree}
                />
              </div>
            </div> 
            {image ? 
              <div>
                <img src={image} />
              </div>
              :
          <>
            <h4>Please upload a photo</h4>
            <label className={labelClass}>{this.props.labelText}</label>
            <input
              className={this.props.inputClassName}
              type="file"
              onChange={this.handleUpload}
            />
          </>
            }
            <div className="field">
              <label className="checkbox label">Please check if weather is a factor</label>
              <input 
                type="checkbox"
                name="weatherFactor"
                onChange={this.handleChange}
                checked={this.state.data.weatherFactor}
                      
              />
                  
            </div> 
            <button type="submit" className="button is-fullwidth is-warning">Make Geocache</button>
          </form>
      
        </div>
      )
      
    }



}

export default TrailNew