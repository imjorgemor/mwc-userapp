import Image from "next/image"
import { useContext } from "react";
import AppContext from '../AppContext';
import { useRouter } from 'next/router'
import styles from "../styles/Header.module.css"
import Avatar from "./Avatar";

const Header = () => {

    const { name } = useContext(AppContext);
    const { route } = useRouter();

    return (
        <header className={styles.header}>
            <div className={`${styles['header-container']}`}>
                <div className={styles.logo}>
                    <p>MWC22</p>
                </div>

                {
                    route !== "/"
                    && (
                        <div className={styles.navbar}>
                            <div>
                                <p className={styles.username}>{`Hola, ${name}`}</p>
                            </div>
                            <Avatar />
                        </div>
                    )
                }
            </div>
        </header>
    )
}

export default Header