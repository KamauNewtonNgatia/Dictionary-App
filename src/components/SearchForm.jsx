import React, { useState } from 'react';
import useSearchStore from '../store';

const SearchForm = () => {
  const [inputValue, setInputValue] = useState('');
  const setSearchTerm = useSearchStore((state) => state.setSearchTerm);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a word..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
