import Head from 'next/head'
import Header from './Header'
import Navbar from './Navbar'

const Layout = ({ children, page }) => {
    
    return (
        <div>
            <Head>
                <title>MWC CHALLENGE - {page}</title>
                <meta name="description" content="website of the MWC22 challenge hackaton" />
            </Head>
            <Header/>
            <Navbar />

            {children}
        </div>
    )
}

export default Layout