import Layout from "../components/Layout"
import styles from "../styles/Dashboard.module.css"

const dashboard = () => {
  return (
    <Layout
            page={"Dashboard"}
        >
            <div className={styles.main}>
                desde overview del dashboard
               

    
            </div>
        </Layout>
  )
}

export default dashboard