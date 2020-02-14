import React from 'react'
import IdMap from './IdMap'


class Contact extends React.Component {

  render() {
    return (
      <>
      <section className="section">
        
        <br/>
        <div className="colums is-vcentered">
          <div className="column is-6">
            <h1 className=" title is-3">CONTACT US</h1>
            <h3 className="is-size-3">Address</h3>
            <ul className="FAQtxt">
              <li>45 Made Up Street</li>
              <li>London</li>
              <li>EC2N 6UP</li>
            </ul>
            <div className="mapSpace">
              <IdMap
                data={{
                  latitude: 51.5074,
                  longitude: 0.1278
                }}
              />
            </div>
            
          </div>
        
         
          <div className="column">
              
            <hr/>
            <h3 className="is-size-3">Email</h3>
            <p className="FAQtxt" href="mailto:contact@geocachr.com">contact@geocachr.com</p>
            <hr/>
          
            <h3 className="is-size-3">Social Media</h3>
            <p className="FAQtxt">Too modern for emails? You can also find us on popular social media platforms</p>
            <div className="contactContent">
              <img src="https://image.flaticon.com/icons/svg/174/174848.svg" />
              <img src="https://image.flaticon.com/icons/svg/174/174855.svg" />
              <img src="https://image.flaticon.com/icons/svg/733/733579.svg" />
              <img src="https://image.flaticon.com/icons/svg/174/174883.svg" />
            </div>
            
            <hr/>
          </div>
        </div>
       
      </section>
      </>
    )
  }

}

export default Contact