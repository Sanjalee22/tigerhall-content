import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons'
import React, { useState } from 'react';

const SearchBar = ({onSearch}) => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
    onSearch(e.target.value)
  };

  return (
    <InputGroup>
    <InputLeftElement pointerEvents='none'>
      <SearchIcon />
    </InputLeftElement>
    <Input bgColor="Grey.900" type="text" value={input} onChange={handleInputChange} borderColor="Grey.700" />
  </InputGroup>
  );
};

export default SearchBar;