import React from 'react'
import SearchImage from '../assets/search.svg'

const Search = ({searchButton, setSearchButton}) => {
  return (
    <div className='search'>
        <div>
            <img src={SearchImage} alt="search" />
            <input 
            type="text" placeholder='Search the movies you want'
            value={searchButton}
            onChange={(event) => setSearchButton(event.target.value)}
            />
        </div>
    </div>
  )
}

export default Search