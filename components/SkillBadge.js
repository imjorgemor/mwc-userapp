import React from 'react'
import styles from "../styles/SkillBadge.module.css"

const SkillBadge = ({tech, deleteSkill}) => {
    return (
        <div className={`${styles['skill-badge']}`}>
            <span>{tech}</span>
            <button
            onClick={() => deleteSkill(tech)}
            >x</button>
        </div>
    )
}

export default SkillBadge