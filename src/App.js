
import { useState, useEffect } from 'react';
import { ApolloProvider } from '@apollo/client';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResult from './components/SearchResult/SearchResult';
import client from './apiConfig';
import { Flex, useColorMode } from '@chakra-ui/react';
import { debounce } from './utils';


function App() {
  const [searchKeyword, setSearchKeyword] = useState('')
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === "dark") {
      toggleColorMode();
    }
  }, []);
  
  const handleSearch = debounce((keyword) => {
    setSearchKeyword(keyword)
  }, 300)

  return (
    <ApolloProvider client={client}>
      <Flex width='100%' direction={'column'} backgroundColor="Teal.1000" px={12} py={6}>      
          <SearchBar onSearch={handleSearch} />
          <SearchResult keyword={searchKeyword} />
      </Flex>
    </ApolloProvider>
  );
}

export default App;
