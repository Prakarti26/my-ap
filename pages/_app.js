import '../styles/globals.css'
import { StoreProvider } from '../utlis/Store'

function MyApp({ Component, pageProps }) {
  return (
  <StoreProvider>
    <Component {...pageProps} />
  </StoreProvider>
  );
}

export default MyApp
