import React, { useState } from "react"
import Header from "./components/Header"
import Searchbar from "./components/Searchbar"
import Filter from "./components/Filter"
import "./App.css"
import Countriescontainer from "./components/Countriescontainer"

const App = () => {
    const [query, setquery] = useState('')
    const [filter, setfilter] = useState('')
    return(
        <>
        <Header/>
        <main>
        <div className="search-filter-container">
        <Searchbar setquery={setquery}/>
        <Filter setfilter={setfilter} />
        </div>
        <Countriescontainer query={query} filter={filter}/>
        </main>
        </>
    )
}
export default App