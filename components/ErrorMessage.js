import styles from "../styles/Error.module.css";

const ErrorMessage = ({message}) => {
  return (
    <p className={styles.error}>{message}</p>
  )
}

export default ErrorMessage