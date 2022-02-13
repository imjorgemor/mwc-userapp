import { useContext, useState } from "react";
import AppContext from "../AppContext";
import styles from "../styles/ModalSkill.module.css";
import SkillBadge from "./SkillBadge";

const ModalSkill = ({ setModalSkill, deleteSkill }) => {

    const { skillList, setSkillList } = useContext(AppContext);
    const [skill, setSkill] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setSkillList([...skillList, skill])
        setSkill("")
    }

    return (
        <div className={styles.modal}>
            <div className={`${styles['form-container']}`}>
                <button
                    className={`${styles['close-modal']}`}
                    onClick={() => setModalSkill(false)}
                >
                    <span>save & close</span>
                </button>
                <div>
                    <h2>Skill list</h2>
                </div>
                <div className={`${styles['skill-container']}`}>
                    <div className={`${styles['skill-list']}`}>
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
                    <div>
                        <form
                            className={`${styles['form-wrapper']}`}
                            onSubmit={handleSubmit}
                        >
                            <div className={`${styles['input-wrapper']}`}>
                                <input
                                    className={`${styles['input-form']}`}
                                    type="text"
                                    placeholder='Add a new skill'
                                    value={skill}
                                    onChange={e => setSkill(e.target.value)}
                                />
                            </div>
                            <div className={`${styles['input-wrapper']}`}>
                                <input
                                    className={`${styles['input-submit']}`}
                                    type="submit"
                                    value='+ Add skill'
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalSkill