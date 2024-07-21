import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

import { extendTheme } from "@chakra-ui/react"
import '@fontsource/staatliches';
import '@fontsource/yeseva-one';

const theme = extendTheme({
    colors: {
        accent: "#f5a209",
    },
    fonts: {
        subHeader: `'Yeseva One', system-ui;`
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
        <App/>
    </ChakraProvider> 
  </React.StrictMode>
)
