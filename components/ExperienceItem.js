import { useContext } from 'react';
import AppContext from '../AppContext';
import styles from "../styles/ExperienceItem.module.css"

const ExperienceItem = ({ company, position, year }) => {

    const { experienceList, setExperienceList } = useContext(AppContext);

    const deleteExperience = company => {
        const experienceUpdated = experienceList.filter(row => row.company !== company);
        setExperienceList(experienceUpdated);
    }

    const eliminarGasto = id => {
        const gastosActualizados = gastos.filter(gasto => gasto.id !== id);
        setGastos(gastosActualizados);
    }

    return (
        <div className={styles.container}>
            <div className={styles.company}>
                {company}
            </div>
            <div className={styles.role}>
                {position}
            </div>
            <div className={styles.year}>
                {year} years
            </div>
            <button
                className={styles.delete}
                onClick={() => deleteExperience(company)}
            >Delete</button>
        </div>
    )
}

export default ExperienceItem