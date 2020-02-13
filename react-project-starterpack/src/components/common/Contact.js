import React from 'react'
import IdMap from './IdMap'


class Contact extends React.Component {

  render() {
    return (
      <>
      <section className="ContactPage">
        <div className="container">
          <br/>
          <h1 className=" title is-3">CONTACT US</h1>
          <hr/>
          <hr/>
          <h2 className=" title is-5">Address</h2>
          <ul>
            <li>1 Geo Street</li>
            <li>LONDON</li>
            <li>EC2N 6UP</li>
            <li>England</li>
          </ul>
          <div className="mapSpace">
            <IdMap
              data={{
                latitude: 51.5074,
                longitude: 0.1278
              }}
            />
          </div>
          <hr/>
          <h2 className=" title is-5">Email</h2>
          <p className="FAQtxt" href="mailto:contact@geocachr.com">contact@geocachr.com</p>
          <hr/>
          
          <h2 className=" title is-5">Social Media</h2>
          <p>Too modern for emails? You can also find us on popular social media platforms</p>
          <div className="contactContent">
            <img src="https://image.flaticon.com/icons/svg/174/174848.svg" />
            <img src="https://image.flaticon.com/icons/svg/174/174855.svg" />
            <img src="https://image.flaticon.com/icons/svg/733/733579.svg" />
            <img src="https://image.flaticon.com/icons/svg/174/174883.svg" />
          </div>
            
          <hr/>
        </div>
      </section>
      </>
    )
  }

}

export default Contact