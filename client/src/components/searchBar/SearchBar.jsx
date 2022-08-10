import './searchBar.scss'


function SearchBar({handleSearch}) {
    

  return (
    <div className="search">
        <label>search</label>
        <input onChange={handleSearch} type="text"/>
    </div>
  )
}

export default SearchBar