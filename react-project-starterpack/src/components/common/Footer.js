import React from 'react'
import axios from 'axios'

// import WeatherCard from '../trails/WeatherCard'


class Footer extends React.Component {
  state = {  weather: null }

  componentDidMount() {
    this.getWeather()
    console.log('componenet did mount')
    this.interval = setInterval(this.getWeather , 5000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
    console.log('unmounted')
  }

  getWeather = async () => {
    try {
      const res = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=b016717eb9738703b54db88c36140010')
      this.setState({ weather: res.data })
    } catch (err){
      console.log(err)
    }
  }
 
  render() {
    if (!this.state.weather) return null
    return ( 
      <footer className="footer">
        <div className=" column is-one-half-desktop">
          <div className="column Weather">
            <h1>Weather Report</h1>
            <p>{this.state.weather.weather[0].main}</p>
            <h2>Description</h2>
            <p>{this.state.weather.weather[0].description}</p>
            <figure className="image-card">
              <img src={`http://openweathermap.org/img/wn/${this.state.weather.weather[0].icon}.png`} alt={this.state.weather.weather[0].main} />
            </figure>
          </div>
          <div className="column socialMedia">
            <img src="https://image.flaticon.com/icons/svg/174/174848.svg" />
            <img src="https://image.flaticon.com/icons/svg/174/174855.svg" />
            <img src="https://image.flaticon.com/icons/svg/733/733579.svg" />
            <img src="https://image.flaticon.com/icons/svg/174/174883.svg" />
          </div>
        </div>
      </footer>
    )
  }

}
export default Footer