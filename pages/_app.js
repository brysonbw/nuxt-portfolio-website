import '../styles/global.css'
// App is top level component
// Use App to keep state
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
  }