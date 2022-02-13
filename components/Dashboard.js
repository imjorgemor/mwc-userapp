import { useContext } from "react";
import AppContext from "../AppContext";
import Avatar from "../components/Avatar";
import styles from "../styles/Dashboard.module.css"

const Dashboard = () => {

    const { email, name, surname, country, city, about, experienceList } = useContext(AppContext);

    const [lastRole] = experienceList;

    return (
        <div className={styles.container}>
            <div className={`${styles['top-section']}`}>
                <h2> Profile </h2>
            </div>
            <div className={styles.profile}>
                <div className={`${styles['personal-data']}`}>
                    <div>
                        <Avatar
                            size="big"
                        />
                    </div>
                    <div className={`${styles['personal-text']}`}>
                        <h3>{name} {surname}</h3>
                        <h4>{lastRole?.position}</h4>
                        <p>{email}</p>
                        <p>{city}, {country}</p>
                    </div>
                </div>
                <div>
                    <h2> About </h2>
                    <p>{about}</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard