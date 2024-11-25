import React from 'react'
import React, { useState } from "react"
import Searchbar from "./Searchbar"
import Filter from "./Filter"
import Countriescontainer from "./Countriescontainer"

export default function Home() {
    const [query, setquery] = useState('')
    const [filter, setfilter] = useState('')
  return (
    <main>
    <div className="search-filter-container">
    <Searchbar setquery={setquery}/>
    <Filter setfilter={setfilter} />
    </div>
    <Countriescontainer query={query} filter={filter}/>
    </main>
  )
}
