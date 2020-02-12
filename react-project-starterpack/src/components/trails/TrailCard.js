import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare, faBinoculars } from '@fortawesome/free-solid-svg-icons'

//make this a classical component with axios post request for likes
//onclick: make post request
//import all fontawesome icons: 
//like button (functioning)
//share on twitter and facebook (not functioning)
//onclick: make like button a filled in color

const TrailCard = ({ name, image, directions, _id }) => (
  <div key={_id} className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <Link to={`/trails/${_id}`}>
      <div className="card">
        <div className="card-header">
          <h4 className="card-header-title">{name}</h4>
          <h5 className="card-header-subtitle"><strong>{directions}</strong></h5>
        </div>
        <div className="cardImage">
          <figure className="image-card">
            <img src={image} alt={name} />
          </figure>
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            <span>
              <button className="button">
                <span className="icon is-small">
                  <FontAwesomeIcon icon={faBinoculars} />
                </span>
                <span>View</span>
              </button>
            </span>
          </p>
          <p className="card-footer-item">
            <span>
              <button className="button">
                <span className="icon is-small">
                  <FontAwesomeIcon icon={faShare} />
                </span>
                <span>Share</span>
              </button>
            </span>
          </p>
        </footer>
      </div>
    </Link>
  </div>
)

export default TrailCard