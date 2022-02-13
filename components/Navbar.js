import Link from 'next/link'
import { useRouter } from 'next/router';
import { useContext} from 'react';
import AppContext from '../AppContext';
import styles from "../styles/Navbar.module.css"


const Navbar = () => {

    const { setEmail, setName, setSurname, setCountry, setCity, setAbout, setAvatar, setExperienceList, setSkillList } = useContext(AppContext);
    const router = useRouter();

    const navLinks = [
        { title: "Overview", path: "/dashboard" },
        { title: "Professional", path: "/experience" },
    ];

    const signout = () => {
        router.push('/');
        setEmail("");
        setName("");
        setSurname("");
        setCountry("");
        setCity("");
        setAbout("");
        setAvatar("");
        setExperienceList([]);
        setSkillList([]);
    }

    return (
        <nav className={styles.navbar}>
            <div className={`${styles['navbar-container']}`}>
                <div>
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
                <button
                    className={styles.signout}
                    onClick={signout}
                >Sign out</button>
            </div>
        </nav>
    )
}

export default Navbar