import React from 'react'

export default function Countrieslistshimmer() {

    const mapped = Array.from({length: 20}).map((el , i) => {
        return <div key={i} className="country-card shimmer-card"></div>
    })
  return (
    <div className='countries-container'>
        {
            mapped
        }
    </div>
  )
}
