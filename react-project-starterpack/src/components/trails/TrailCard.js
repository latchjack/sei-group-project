import React from 'react'
import { Link } from 'react-router-dom'

const TrailProfile = ({ name, image, directions, _id }) => (
  <>
  <div key= {_id} className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <Link to={`/trails/${_id}`}> 
      <div className="card">
        <div className="card-header">
          <h4 className="card-header-title">{name}</h4>
          <h5 className="card-header-subtitle">{directions}</h5>
        </div>
        <div className="cardImage">
          <figure className="image-card">
            <img src={image} alt={name} />
          </figure>
        </div>
      </div>
    </Link>
  </div>
  </>
)

export default TrailProfile