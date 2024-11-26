// import data from '../data'
import Countrieslistshimmer from './Countrieslistshimmer'
import Countrycard from './Countrycard'
import React, { useEffect, useState } from 'react'

export default function Countriescontainer({query, filter}) {
  const [data, setdata] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => {
      setdata(data)
    })
  }, [])
  return (
    <>
    {!data.length ? <Countrieslistshimmer /> : <div className="countries-container">
      {data.filter((country) => country.region.toLowerCase().includes(filter))
        .filter((country) =>
          country.name.common.toLowerCase().includes(query)
        )
        .map((country) => {
          return (
            <Countrycard
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population}
              region={country.region}
              capital={country.capital?.[0]}
            />
          )
        })}
    </div>}
  </>
  )
}
