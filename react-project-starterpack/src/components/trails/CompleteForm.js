import React from 'react'
import axios from 'axios'
//does this need auth key?

class CompleteForm extends React.Component {
  state = {
    data: {
      text: '',
      image: null
    },
    
    errors: {}

  }
 


  handleChange = e => {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    console.log(data)
    this.setState({ data })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const trailId = this.props.match.params.id
    console.log('i am submitting')
    try {
      await axios.post(`/api/trails/${trailId}/complete`, this.state.data)//needs an id to post this onto the specific trail
      console.log(this.state.data)
      this.props.history.push('/trails') //trails page
    } catch (err) {
      this.setState({ errors: err.response.data.errors })
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

      <section className="section">
        <div className="columns">
          <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter">
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
            
            <button type="submit" className="button is-fullwidth is-warning">Submit</button>
          </form>
        </div>
      </section>
    )
  }
}

export default CompleteForm



