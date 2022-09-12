import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout'

import theme from '../theme'

import { CalendarContextProvider } from '../context/CalenderContext'
import { SocketContextProvider } from '../context/SocketContext'
import { StyledEngineProvider, ThemeProvider } from '@mui/material'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme} >
    <StyledEngineProvider injectFirst >
    <CalendarContextProvider>
    <SocketContextProvider>
        <Layout>
              <Component {...pageProps} />
          </Layout>
    </SocketContextProvider>     
      </CalendarContextProvider>
    </StyledEngineProvider>

    </ThemeProvider>
    
    
  )
  
    
}

export default MyApp
