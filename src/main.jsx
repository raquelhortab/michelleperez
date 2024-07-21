import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

import { extendTheme } from "@chakra-ui/react"
const theme = extendTheme({
    colors: {
        accent: "#f5a209",
    },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
        <App/>
    </ChakraProvider> 
  </React.StrictMode>
)
