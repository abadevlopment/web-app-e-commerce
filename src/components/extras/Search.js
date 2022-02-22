import React from 'react'
import './Search.scss'

const Search = () => {
    return (
        <form className='searchForm' >
            <input type='text' className="searchInput" placeholder="Búsqueda" />
            <button type='submit' className='searchButton'>
                <img
                src='https://res.cloudinary.com/dvinxey2w/image/upload/v1642370038/ABA/ICONS%2032PX/search-69_ekxkgd.svg'
                className='searchImg'
                alt='search img'
                />
            </button>
        </form>
    )
}

export default Search