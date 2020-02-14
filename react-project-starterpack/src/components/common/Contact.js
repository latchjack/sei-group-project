import React from 'react'
import IdMap from './IdMap'
import Teamgeocache from '../../assets/Teamgeocache.png'


class Contact extends React.Component {

  render() {
    return (
      <>
     
        <div className="box" id="contactBox">
          <br/>
        
          <div className="columns is-multiline is-mobile">
            <div className="column is-half">
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
            <div className="column is half">
            
              <h3 className="is-size-3">The Team</h3>
              <div>&nbsp;</div> 
              <img src={Teamgeocache} id="theGang" />
                    
              <hr/>
              <h3 className="is-size-3">Email</h3>
              <a href="mailto:contact@geocachr.com"><p className="FAQtxt"> contact@geocachr.com</p></a>
              <hr/>
          
             
            
              <hr/>
            </div>
          </div>
        </div> 
      
      </>
    )
  }

}

export default Contact