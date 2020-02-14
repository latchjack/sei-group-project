import React from 'react'
import Geotext from './../../assets/geo_textonly.svg'


const Home = () => (

  <section className="hero is-fullheight-with-navbar is-primary">
    <div className="hero-body">
      <div className="container">
        <p className="title is-1 has-text-centered" id="Hero_txt"><span className="geo-text"><img src={Geotext} /></span></p>
        <p className=" title is-2 has-text-centered " id="Hero_sub">The largest treasure Hunt Community in London!</p>
      </div>
    </div>
  </section>
)
  

export default Home