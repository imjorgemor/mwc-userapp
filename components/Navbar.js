import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from "../styles/Navbar.module.css"


const Navbar = () => {

    const router = useRouter();

    const navLinks = [
        { title: "Overview", path: "/dashboard" },
        { title: "Professional", path: "/professional" },
        { title: "Settings", path: "/account" },
        { title: "Log out", path: "/" },
    ]

    return (
        <nav className={styles.navbar}>
            <div className={`${styles['navbar-container']}`}>

           
            {
                navLinks.map(link => (
                    <Link key={link.title} href={link.path} passHref>
                        <a className={router.route === link.path ? `${styles['active-link']}` : styles.link}>
                            {link.title}
                        </a>
                    </Link>
                ))
            }
             </div>
        </nav>
    )
}

export default Navbar