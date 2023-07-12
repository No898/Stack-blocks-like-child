"use client"
import { useState } from "react"

import SearchManufacturer from "./SearchManufacturer"

function SearchBar() {

  const [manufacturer, setmanufacturer] = useState("second")

  const handleSearch = () => {}

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className="searchbar__item">
       <SearchManufacturer 
        manufacturer={manufacturer}
        setManufacturer={setmanufacturer}
        />
      </div>
    </form>
  )
}

export default SearchBar