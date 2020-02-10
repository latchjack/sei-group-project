import React from 'react'
import axios from 'axios'
//import Auth from '../lib/Auth'
import TrailForm from './TrailForm'

class TrailNew extends React.Component {

    state = {
      data: {
        name: '',
        directions: '',
        clueOne: '',
        clueTwo: '',
        clueThree: '',  
        image: '',
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
          headers: { Authorization: `Bearer ${Auth.getToken()}` }//need to set this up
        })
        this.props.history.push(`/trails/${res.data._id}`)
      } catch (err) {
        console.log(err)
      }
    }


    render() {

      return (
        <section className="section">
          <div className="container">
            <TrailForm data={this.state.data}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}


            />

          </div>
        </section>
      )
    }



}

export default TrailNew