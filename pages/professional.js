import Layout from "../components/Layout"
import styles from "../styles/Professional.module.css"

const professional = () => {

    
  return (
    <Layout
            page={"Professional"}
        >
            <div className={styles.container}>
                <div className={styles.project}>
                    <button>
                        Add Project or experience
                    </button>
                </div>
                <div className={styles.skills}>
                    <button className={styles.add}>
                        Add skills
                    </button>
                </div>
            </div>
            
        </Layout>
  )
}

export default professional