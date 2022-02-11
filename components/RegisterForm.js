import ErrorMessage from "./ErrorMessage"
import styles from "../styles/RegisterForm.module.css"
import { useRouter } from 'next/router';
import { useContext } from "react";
import AppContext from '../AppContext';


const RegisterForm = () => {

    const {email, setEmail, name, setName, surname, setSurname, country, setCountry, city, setCity, about, setAbout, error, setError, setAvatar} = useContext(AppContext);
    
    const router = useRouter();

    const handleSubmit = e => {
        e.preventDefault();

        const handleColor = () => {
            const hexBase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
            let hexColor = "#";
            for (let i = 0; i < 6; i++) {
                hexColor += hexBase[Math.floor(Math.random() * hexBase.length)];
                if (hexColor.length === 7) {
                    setAvatar(hexColor)
                }
            }
        }
        handleColor();

        if ([email, name, surname, country, city].includes("")) {
            setError(true);
            return
        }
        setError(false)

        !error && router.push('/dashboard')
    }

    return (
        <section className={`${styles['form-section']}`}>
            <h1 className={`${styles['register-title']}`}>Join the best <br />frontend team</h1>
            {
                error && <ErrorMessage message="All fields are mandatory" />
            }

            <form
                className={`${styles['form-container']}`}
                onSubmit={handleSubmit}
            >
                <div>
                    <input
                        className={`${styles['input-form']}`}
                        id="email"
                        type="email"
                        placeholder='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        className={`${styles['input-form']}`}
                        id="name"
                        type="text"
                        placeholder='Name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        className={`${styles['input-form']}`}
                        id="surname"
                        type="text"
                        placeholder='Surname'
                        value={surname}
                        onChange={e => setSurname(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        className={`${styles['input-form']}`}
                        id="country"
                        type="text"
                        placeholder='Country'
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        className={`${styles['input-form']}`}
                        id="city"
                        type="text"
                        placeholder='City'
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    />
                </div>
                <div>
                    <textarea
                        className={`${styles['input-form']}`}
                        id="about"
                        type="text"
                        placeholder='Tell us about yourself'
                        value={about}
                        onChange={e => setAbout(e.target.value)}
                    />
                </div>
                <input
                    className={`${styles['input-submit']}`}
                    type="submit"
                    value="Submit"
                />
            </form>
        </section>
    )
}

export default RegisterForm