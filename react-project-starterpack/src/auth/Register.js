import React from 'react'
import axios from 'axios'


class Register extends React.Component {

  state = {
    data: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
    
  }

  
  handleChange = e => {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    console.log(this.state.data)
    this.setState({ data }) 
  }

  handleSubmit = async e => {
    e.prevent.default()

    try {
      await axios.post('/register', this.state.data)
      this.props.history.push('/login') 
    } catch (err) {
      console.log(err)
    }
  }


  render() {

    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter">
              <h2 className="title">Register</h2>
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input 
                    className="input"
                    placeholder="Username"
                    required
                    name="username"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input 
                    className="input"
                    placeholder="Email"
                    required
                    name="email"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input 
                    className="input"
                    placeholder="Password"
                    required
                    name="password"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password Confirmation</label>
                <div className="control">
                  <input 
                    className="input"
                    placeholder="Password Confirmation"
                    required
                    name="passwordConfirmation"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <button type="submit" className="button is-fullwidth is-warning">Register Me
                </button>

              </div>
            </form>
          </div>
        </div>
      </section>
    )

  }

}

export default Register