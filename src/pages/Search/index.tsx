import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import { debounce } from '../../utils/helper';
import { DEBOUNCE_INTERVAL } from '../../utils/constants';

const SearchHome = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>('')

  const handleSearch = debounce((keyword: string) => {
    setSearchKeyword(keyword)
  }, DEBOUNCE_INTERVAL)

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <SearchResult keyword={searchKeyword} />
    </>
  )
}

export default SearchHome