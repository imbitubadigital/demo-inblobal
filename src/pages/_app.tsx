import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import GlobalStyle from '../styles/global'
import AppProvider from '../hooks'
// import { ThemeCustomProvider } from '../hooks/Theme'
import store from '../store'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <AppProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </AppProvider>
    </Provider>
  )
}

export default MyApp
