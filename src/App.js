
import { ApolloProvider } from '@apollo/client';
import { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResult from './components/SearchResult/SearchResult';
import client from './apiConfig';
import './index.css'

function App() {
  const [searchKeyword, setSearchKeyword] = useState('')

  const handleSearch = (keyword)=>{
    setSearchKeyword(keyword)
  } 



  return (
   
  <ApolloProvider client = {client}>
  <div>
        <SearchBar onSearch={handleSearch}/>
        <SearchResult keyword={searchKeyword} />
    </div>
    </ApolloProvider>

  );
}

export default App;
