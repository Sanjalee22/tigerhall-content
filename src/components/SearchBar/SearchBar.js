import React, { useState } from 'react';

const SearchBar = ({onSearch}) => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
    onSearch(e.target.value)
  };

  return (
    <input type="text" value={input} onChange={handleInputChange} />
  );
};

export default SearchBar;