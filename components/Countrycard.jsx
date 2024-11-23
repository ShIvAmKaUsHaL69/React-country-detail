import React from 'react'

export default function Countrycard({name, flag, alt, population,region, capital}) {
  return (
    <a className="country-card" href={`/country.html?name=${name}`}>
          <img src={flag} alt={alt}/>
          <div className="card-text">
              <h3 className="card-title">{name}</h3>
              <p><b>Population: </b>{population}</p>
              <p><b>Region: </b>{region}</p>
              <p><b>Capital: </b>{capital}</p>
          </div>
  </a>
  )
}
