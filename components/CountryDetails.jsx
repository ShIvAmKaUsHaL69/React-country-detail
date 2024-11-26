import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Countriesdetailshimmer from './Countriesdetailshimmer';

export default function CountryDetails() {
  const { country: countryName } = useParams();

  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        const countryDetails = {
          name: data.name.common,
          flag: data.flags.svg,
          native: data.name.nativeName ? Object.values(data.name.nativeName)[0].common : '',
          population: data.population,
          region: data.region,
          tld: data.tld.join(', '),
          capital: data.capital ? data.capital[0] : 'N/A',
          subregion: data.subregion,
          languages: data.languages ? Object.values(data.languages).join(', ') : 'N/A',
          borders: [],
        };

        if (data.borders) {
          Promise.all(
            data.borders.map((border) =>
              fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                .then((res) => res.json())
                .then((borderData) => borderData[0]?.name.common)
            )
          )
            .then((borders) => {
              setCountryData({ ...countryDetails, borders });
            })
            .catch((err) => {
              console.error('Error fetching border countries:', err);
              setCountryData(countryDetails); // Set data even if borders fail
            });
        } else {
          setCountryData(countryDetails);
        }
      })
      .catch((err) => {
        console.error(err);
        setNotFound(true);
      });
  }, [countryName]);

  if (notFound) {
    return <div>Country not found</div>;
  }

  if (!countryData) {
    return <main><div className="country-details-container">
    <span className="back-button" onClick={() => window.history.back()}>
      <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
    </span>
    <Countriesdetailshimmer /></div></main>;
  }

  return (
    <main>
      <div className="country-details-container">
        <span className="back-button" onClick={() => window.history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name} flag`} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: </b>
                {countryData.native}
              </p>
              <p>
                <b>Population: </b>
                {countryData.population}
              </p>
              <p>
                <b>Region: </b>
                {countryData.region}
              </p>
              <p>
                <b>Sub Region: </b>
                {countryData.subregion}
              </p>
              <p>
                <b>Capital: </b>
                {countryData.capital}
              </p>
              <p>
                <b>Top Level Domain: </b>
                {countryData.tld}
              </p>
              <p>
                <b>Languages: </b>
                {countryData.languages}
              </p>
            </div>
            <div className="border-countries">
              <b>Border Countries: </b>&nbsp;
              {countryData.borders.length > 0 ? (
                countryData.borders.map((border) => (
                  <Link key={border} to={`/${border}`}>
                    {border}
                  </Link>
                ))
              ) : (
                <span>No border countries</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
