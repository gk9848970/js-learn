import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: "red",
    secondary: "blue",
  }
}

export default function App({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
}
