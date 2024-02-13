import {SessionProvider} from "next-auth/react";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log("pageprops",pageProps.session);
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
