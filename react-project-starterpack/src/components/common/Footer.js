import React from 'react'
import axios from 'axios'

// import WeatherCard from '../trails/WeatherCard'


class Footer extends React.Component {
  state = {  weather: null }

  componentDidMount() {
    this.getWeather()
    console.log('componenet did mount')
    this.interval = setInterval(this.getWeather , 300000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  getWeather = async () => {
    console.log('here')
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
        <div className="columns">
          <div className="column is-half-mobile is-one-half-desktop" id="Weather">
            <h1>Weather Report: {this.state.weather.weather[0].main}</h1>
            <h1>Temprature: {this.state.weather.wind.speed}km</h1>
            <h1>{this.state.weather.weather[0].description}</h1>
            <figure className="image-card">
              <img src={`http://openweathermap.org/img/wn/${this.state.weather.weather[0].icon}.png`} alt={this.state.weather.weather[0].main} />
            </figure>
          </div>
          <div className="container-social">
            <div className="column is-half-mobile is-one-half-desktop" id="socialMedia">
              <a href="#"><img src="https://image.flaticon.com/icons/svg/174/174848.svg" id="img" /></a>
              <a href="#"><img src="https://image.flaticon.com/icons/svg/174/174855.svg" id="img"/></a>
              <a href="#"><img src="https://image.flaticon.com/icons/svg/733/733579.svg" id="img"/></a>
              <a href="#"><img src="https://image.flaticon.com/icons/svg/174/174883.svg" id="img"/></a>
              <a href="#"><img src="https://image.flaticon.com/icons/svg/355/355980.svg" id="img"/></a>
            </div>
          </div>
        </div>
      </footer>
    )
  }

}
export default Footer