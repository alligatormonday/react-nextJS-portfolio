import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/Navbar/index'
// import Footer from '../components/Footer/index'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Web site created using create-react-app" />
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
                <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

                <title>Joseph Jepson Portfolio</title>
            </Head>
            <Navbar />
            <Component {...pageProps} />
            {/* <Footer /> */}
        </>
    )
}

export default MyApp
