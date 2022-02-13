import { useContext } from "react";
import AppContext from '../AppContext';
import styles from "../styles/Avatar.module.css"

const Avatar = () => {

    const { name, avatar } = useContext(AppContext);
    const initial = name.slice(0, 1)

    return (
        <div
            className={`${styles['avatar-ready']}`}
            style={{ "backgroundColor": `${avatar}` }}
        >
            <p>{initial}</p>
        </div>
    )
}

export default Avatar