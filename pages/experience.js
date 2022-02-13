import { useContext, useState } from 'react';
import AppContext from '../AppContext';
import ExperienceItem from '../components/ExperienceItem';
import Layout from "../components/Layout"
import ModalProfessional from "../components/ModalProfessional"
import ModalSkill from '../components/ModalSkill';
import SkillBadge from '../components/SkillBadge';
import styles from "../styles/Experience.module.css"


const experience = () => {

    const { experienceList, setExperienceList, skillList, setSkillList } = useContext(AppContext);
    const [modalExperience, setModalExperience] = useState(false);
    const [modalSkill, setModalSkill] = useState(false);

    const saveExperience = (experience) => {
        setExperienceList([...experienceList, experience])
    }

    const deleteSkill = tech => {
        const skillListUpdated = skillList.filter(skill => skill !== tech);
        setSkillList(skillListUpdated);

    }

    return (
        <Layout
            page={"Professional"}
        >
            <div className={styles.container}>
                <div className={`${styles['top-section']}`}>
                    <h2>Experience & projects</h2>
                    <button
                        className={`${styles['button-base']}`}
                        onClick={() => setModalExperience(true)}
                    >
                        <span> + </span>Add experience
                    </button>
                </div>

                {modalExperience && <ModalProfessional
                    setModalExperience={setModalExperience}
                    saveExperience={saveExperience}
                />
                }

                <div className={styles.project}>
                    {
                        experienceList.length > 0 &&
                        experienceList.map(row => (
                            <ExperienceItem
                                key={row.company}
                                company={row.company}
                                position={row.position}
                                year={row.year}
                            />
                        ))
                    }
                </div>

                <div className={`${styles['top-section']}`}>
                    <h2>Skills</h2>
                    <button
                        className={`${styles['button-base']}`}
                        onClick={() => setModalSkill(true)}
                    >
                        <span> + </span>Add Skills
                    </button>
                    {modalSkill && <ModalSkill
                        setModalSkill={setModalSkill}
                        deleteSkill={deleteSkill}
                    />
                    }
                </div>
                <div className={styles.skill}>
                {
                            skillList.length > 0 && (
                                skillList.map(tech => (
                                    <SkillBadge
                                        key={tech}
                                        tech={tech}
                                        deleteSkill={deleteSkill}
                                    />
                                ))
                            )
                        }
                </div>
            </div>
        </Layout>
    )
}

export default experience