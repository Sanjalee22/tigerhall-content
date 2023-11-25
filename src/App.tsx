import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { Flex } from '@chakra-ui/react';
import client from './apiConfig';
import SearchHome from './pages/Search';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <ApolloProvider client={client}>
      <Flex width='100%' minHeight="100vh" direction={'column'} backgroundColor="Teal.1000" px={12} py={6}> 
        <Router>
          <Routes>
            <Route path="/" element={<SearchHome />} />
            <Route path="/search" element={<SearchHome />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </Flex>
    </ApolloProvider>
  );
}

export default App;
