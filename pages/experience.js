import Layout from "../components/Layout"
import styles from "../styles/Experience.module.css"


const experience = () => {

    return (
        <Layout
            page={"Professional"}
        >
            <div className={styles.container}>
                <div className={`${styles['top-section']}`}>
                    <h2>Experience & projects</h2>
                    <button className={`${styles['button-base']}`}>
                        <span> + </span>Add experience
                    </button>
                </div>
                <div className={styles.project}>
                </div>
                <div className={`${styles['top-section']}`}>
                    <h2>Skills</h2>
                    <button className={`${styles['button-base']}`}>
                        <span> + </span>Add Skills
                    </button>
                </div>
                <div className={`${styles.project} ${styles.skill}`}>
                </div>
            </div>
        </Layout>
    )
}

export default experience