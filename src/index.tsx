import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import tigerhallTheme from './themes';

const rootElement = document.getElementById('root');

if(rootElement){
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
       <ChakraProvider resetCSS theme={tigerhallTheme}>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  );
  
}

