import Image from "next/image"
import { useContext } from "react";
import AppContext from '../AppContext';
import { useRouter } from 'next/router'
import styles from "../styles/Header.module.css"

const Header = () => {

    const { name } = useContext(AppContext);
    const {route} = useRouter();
    console.log(route)

    return (
        <header className={styles.header}>
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
                    <div className={`${styles['avatar-container']}`}>
                        <Image src="/img/avatarimage.svg" alt="Avatar image of user" width={30} height={30} />
                    </div>
                </div>
                )
            }
        </header>
    )
}

export default Header