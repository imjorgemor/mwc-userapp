import Layout from '../components/Layout'
import RegisterForm from '../components/RegisterForm'
import styles from '../styles/Home.module.css'

export default function Home() {

    return (
        <Layout
            page={"Home"}
        >
            <div className={styles.main}>
                <RegisterForm
                />
            </div>
        </Layout>
    )
}
