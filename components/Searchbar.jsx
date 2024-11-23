import React from 'react'

export default function Searchbar({ setquery }) {
  return (
    <div className="search-container">
  <i className="fa-solid fa-magnifying-glass"></i> 
  <input type="text" placeholder="Search for a country..." onChange={(e) => setquery(e.target.value.toLowerCase())}/>
</div>
  )
}
