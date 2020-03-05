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
    const errors = { ...this.state.errors, [name]: '' }
    this.setState({ data, errors })
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      await axios.post('/api/register', this.state.data)
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
                <div className="control has-icons-left">
                  <input 
                    className={`input ${this.state.errors.username ? 'is-danger' : ''}`}
                    placeholder="Username"
                    required
                    name="username"
                    onChange={this.handleChange}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left">
                  <input 
                    className={`input ${this.state.errors.username ? 'is-danger' : ''}`}
                    placeholder="Email"
                    required
                    name="email"
                    onChange={this.handleChange}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control has-icons-left">
                  <input 
                    className={`input ${this.state.errors.username ? 'is-danger' : ''}`}
                    placeholder="Password"
                    required
                    name="password"
                    type="password"
                    onChange={this.handleChange}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Password Confirmation</label>
                <div className="control has-icons-left">
                  <input 
                    className={`input ${this.state.errors.username ? 'is-danger' : ''}`}
                    placeholder="Password Confirmation"
                    required
                    type="password"
                    name="passwordConfirmation"
                    onChange={this.handleChange}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock-open"></i>
                  </span>
                </div>
                {this.state.errors.passwordConfirmation && <small className="help is-danger">{this.state.errors.passwordConfirmation}</small>}
              </div>
              <div className="field">
                <button type="submit" className="button is-fullwidth is-link">Register Me
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