import Head from "next/head"
import Header from "./Header"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { useRouter } from "next/router"

const Layout = ({ children, page }) => {

    const { route } = useRouter();

    return (
        <div >
            <Head>
                <title>MWC CHALLENGE - {page}</title>
                <meta name="description" content="Website of the MWC22 challenge hackaton" />
            </Head>
            <Header />
            {
                route !== "/" && <Navbar />
            }
            {children}
            <Footer />
        </div>
    )
}

export default Layout