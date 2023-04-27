import { useEffect, useState } from 'react';
import { SearchResults } from './SearchResults';
import { useLocation } from 'react-router-dom';

function SearchBar() {
  const [query, setQuery] = useState("");
  const location = useLocation();

  const handleChange = (event) => {
    setQuery(event.target.value);
  }
  
  useEffect(() => {
    setQuery(""); 
  }, [location.pathname]);

  return (
    <div className="relative w-full">
      <input
        type="text"
        className="px-4 py-2 rounded-3xl border-2 border-gray-200 w-full"
        value={query}
        placeholder='Search...'
        onChange={handleChange}
      />
      <SearchResults query={query}/>
    </div>
  );
}

export default SearchBar;





