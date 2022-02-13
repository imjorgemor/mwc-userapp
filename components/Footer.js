import styles from "../styles/Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.media}>
                <a
                    className={`${styles['social-link']}`} href="https://github.com/imjorgemor"
                >
                    <img src="/img/github.svg"  alt="github logo" />
                </a>
                <a
                    className={`${styles['social-link']}`} href="https://www.linkedin.com/in/jorge-mor-reactdev/"
                >
                    <img src="/img/linkedin.svg" alt="linkedin" />
                </a>
            </div>
            <div className={styles.contact}>
                <p>This page is intended for educational purposes of the Hackatton MWC22</p>
                <p>Privacy: We do not manage any data, all data is stored temporally in your browser</p>
            </div>
        </div>
    )
}

export default Footer