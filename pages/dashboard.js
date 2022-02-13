import { useContext, useEffect } from "react";
import AppContext from "../AppContext";
import Layout from "../components/Layout"
import Avatar from "../components/Avatar";
import styles from "../styles/Dashboard.module.css"

const dashboard = () => {

    const { email, name, surname, country, city, about, experienceList, skillList, setSkillList } = useContext(AppContext);

    const [lastRole] = experienceList;

    return (
        <Layout
            page={"Dashboard"}
        >
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
        </Layout>
    )
}

export default dashboard