import Layout from "../components/Layout";
import RegisterForm from "../components/RegisterForm";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <Layout
            page={"Sign Up"}
        >
            <div className={styles.main}>
                <h1 className={`${styles['register-title']}`}>Join the best <br />frontend community</h1>
                <RegisterForm />
            </div>
        </Layout>
    )
}
