import Head from 'next/head'
import Header from './Header'
import Navbar from './Navbar'
import { useRouter } from 'next/router'

const Layout = ({ children, page }) => {

    const {route} = useRouter();
    
    return (
        <div>
            <Head>
                <title>MWC CHALLENGE - {page}</title>
                <meta name="description" content="website of the MWC22 challenge hackaton" />
            </Head>
            <Header/>

            {
                 route !== "/" && <Navbar />
            }

            

            {children}
        </div>
    )
}

export default Layout