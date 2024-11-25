import React, { useEffect, useState } from 'react'

export default function CountryDetails() {
    const countryName = new URLSearchParams(location.search).get('name')
    const [countryData, setcountrydata] = useState({})
    useEffect(() =>{
        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json()).then(([data]) => {
    setcountrydata(
        {
            name: data.name.common ,
            flag: data.flags.svg ,
            native: Object.values(data.name.nativeName)[0].common,
            population: data.population ,
            region: data.region ,
            tld: data.tld.join(', ') ,
            capital: data.capital?data.capital:data.capital[0] ,
            subregion: data.subregion ,
            languages: Object.values(data.languages).join(', ') ,

        })
  })
    }
        ,[])
  return (
    <main>
        <main>
      <div className="country-details-container">
        <span className="back-button" >
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt="" />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p><b>Native Name: </b>{countryData.native}<span className="native-name"></span></p>
              <p><b>Population: </b>{countryData.population}<span className="population"></span></p>
              <p><b>Region: </b>{countryData.region}<span className="region"></span></p>
              <p><b>Sub Region: </b>{countryData.subregion}<span className="sub-region"></span></p>
              <p><b>Capital: </b>{countryData.capital}<span className="capital"></span></p>
              <p>
                <b>Top Level Domain: </b>{countryData.tld}<span className="top-level-domain"></span>
              </p>
              <p><b>Languages: </b>{countryData.languages}<span className="languages"></span></p>
            </div>
            <div className="border-countries"><b>Border Countries: </b>&nbsp;</div>
          </div>
        </div>
      </div>
    </main>
    </main>
  )
}
