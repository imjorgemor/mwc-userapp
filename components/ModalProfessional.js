import { useState } from 'react';
import ErrorMessage from './ErrorMessage'
import styles from '../styles/ModalProfessional.module.css'


const ModalProfessional = ({ setModalExperience, saveExperience }) => {

    const [company, setCompany] = useState("");
    const [year, setYear] = useState("");
    const [position, setPosition] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if ([company, year, position].includes("")) {
            setError(true);
            return
        }

        setError(false);
        const experienceItem = { company, year, position };
        saveExperience(experienceItem);
        setModalExperience(false);
        setCompany("");
        setYear("");
        setPosition("");
    }

    return (
        <div className={styles.modal}>
            <div className={`${styles['form-container']}`}>
                <button
                    className={`${styles['close-modal']}`}
                    onClick={() => setModalExperience(false)}
                >
                    <span>close</span>
                </button>
                <form
                    className={`${styles['form-wrapper']}`}
                    onSubmit={handleSubmit}
                >
                    <legend>Add experience</legend>
                    {
                        error && <ErrorMessage message="All fields are mandatory" />
                    }
                    <div className={`${styles['input-wrapper']}`}>
                        <label
                            htmlFor="company"
                        >Company name</label>
                        <input
                            className={`${styles['input-form']}`}
                            id="company"
                            type="text"
                            placeholder='Add company'
                            value={company}
                            onChange={e => setCompany(e.target.value)}
                        />
                    </div>
                    <div className={`${styles['input-wrapper']}`}>
                        <label htmlFor="years">Years of experience</label>
                        <input
                            className={`${styles['input-form']}`}
                            id="years"
                            type="number"
                            placeholder='Add years of experience'
                            value={year}
                            onChange={e => setYear(e.target.value)}
                        />
                    </div>
                    <div className={`${styles['input-wrapper']}`}>
                        <label htmlFor="position">Position</label>
                        <select
                            className={`${styles['input-form']}`}
                            name="position"
                            id="position"
                            value={position}
                            onChange={e => setPosition(e.target.value)}
                        >
                            <option value="">Choose one</option>
                            <option value="front end">Front end</option>
                            <option value="back end">Back end</option>
                            <option value="mobile">Mobile</option>
                            <option value="data science">Data Science</option>
                        </select>
                    </div>
                    <input
                        className={`${styles['input-submit']}`}
                        type="submit"
                        value="Add experience"
                    />
                </form>
            </div>
        </div>
    )
}

export default ModalProfessional