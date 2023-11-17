
import { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import { Flex } from '@chakra-ui/react';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResult from './components/SearchResult/SearchResult';
import client from './apiConfig';
import { debounce } from './utils';


function App() {
  const [searchKeyword, setSearchKeyword] = useState('')

  const handleSearch = debounce((keyword) => {
    setSearchKeyword(keyword)
  }, 300)

  return (
    <ApolloProvider client={client}>
      <Flex width='100%' minHeight="100vh" direction={'column'} backgroundColor="Teal.1000" px={12} py={6}>      
          <SearchBar onSearch={handleSearch} />
          <SearchResult keyword={searchKeyword} />
      </Flex>
    </ApolloProvider>
  );
}

export default App;
