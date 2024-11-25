import React from 'react'
import { Link } from 'react-router'

export default function Countrycard({name, flag, alt, population,region, capital}) {
  return (
    <Link className="country-card" to={`/country?name=${name}`}>
          <img src={flag} alt={alt}/>
          <div className="card-text">
              <h3 className="card-title">{name}</h3>
              <p><b>Population: </b>{population}</p>
              <p><b>Region: </b>{region}</p>
              <p><b>Capital: </b>{capital}</p>
          </div>
  </Link>
  )
}
