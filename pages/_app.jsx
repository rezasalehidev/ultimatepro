import { ThemeProvider } from '@emotion/react'
import App from 'next/app'
import theme from '../configs/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
