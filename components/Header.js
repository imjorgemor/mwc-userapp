import Image from "next/image"
import styles from "../styles/Header.module.css"

const Header = () => {
    return (
            <header className={styles.header}>
                <div className={styles.logo}>
                    <p>MWC22</p>
                </div>
                <div className={styles.navbar}>
                    <div>
                        <p className={styles.username}>{`Hola, amigo`}</p>
                    </div>
                    <div className={`${styles['avatar-container']}`}>
                        <Image src="/img/avatarimage.svg" alt="Avatar image of user" width={30} height={30} />
                    </div>
                </div>
            </header>
    )
}

export default Header