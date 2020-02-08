import React from 'react'




const TrailNew = ({ data, handleChange, handleSubmit }) => {

  
  return (
    <div className="columns">
      <form onSubmit={handleSubmit} className="colum is one-half is-offset-one-quarter">
        <h2 className="title">Create a new GeoCache</h2>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input 
              className="input"
              name="name"
              required
              placeholder="Name"
              onChange={handleChange}
              value={data.name}
            />
          </div>
        </div> 
        <div className="field">
          <label className="label">Directions</label>
          <div className="control">
            <input 
              className="input"
              name="directions"
              required
              placeholder="Directions"
              onChange={handleChange}
              value={data.name}
            />
          </div>
        </div> 
        <div className="field">
          <label className="label">Clues</label>
          <div className="control">
            <input 
              className="input"
              name="clues"
              required
              placeholder="Clues"
              onChange={handleChange}
              value={data.name}
            />
          </div>
        </div> 
        <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input 
              className="input"
              name="image"
              required
              placeholder="Image"
              onChange={handleChange}
              value={data.name}
            />
          </div>
        </div> 
        <div className="field">
            <label className="checkbox label">Is weather a factor?
              <input 
                type="checkbox"
                name="weatherFactor"
                onChange={handleChange}
                value={data.name}
                checked={data.weatherFactor}
                
              />
              
            </label>
            
        </div> 
        <button type="submit" className="button is-fullwidth is-warning">Make Geocache</button>
      </form>

    </div>
  )
  

}

export default TrailNew