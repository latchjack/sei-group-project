import React from 'react'
import axios from 'axios'


class Register extends React.Component {

  state = {
    data: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    },
    errors: {}
    
  }

  
  handleChange = e => {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleSubmit = async e => {
    e.prevent.default()

    try {
      await axios.post('/register', this.state.data)
      this.props.history.push('/login') 
    } catch (err) {
      this.setState({ errors: err.response.data.errors })
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
                    className={`input ${this.state.errors.username ? 'is-danger' : ''}`}
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
                    className={`input ${this.state.errors.username ? 'is-danger' : ''}`}
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
                    className={`input ${this.state.errors.username ? 'is-danger' : ''}`}
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
                    className={`input ${this.state.errors.username ? 'is-danger' : ''}`}
                    placeholder="Password Confirmation"
                    required
                    name="passwordConfirmation"
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.errors.passwordConfirmation && <small className="help is-danger">{this.state.errors.passwordConfirmation}</small>}
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