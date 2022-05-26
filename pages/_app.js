import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Script from 'next/script';


{/* <Script
  src="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
  strategy="beforeInteractive"
/> */}

<Script
  src="https://fonts.googleapis.com/icon?family=Material+Icons"
  strategy="beforeInteractive"
/>


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
