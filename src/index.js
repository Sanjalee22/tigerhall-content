import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import tigerhallTheme from './themes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ChakraProvider resetCSS theme={tigerhallTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
