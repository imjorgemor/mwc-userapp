import { useState } from 'react'
import ErrorMessage from "./ErrorMessage"
import styles from "../styles/RegisterForm.module.css"
import { useRouter } from 'next/router';


const RegisterForm = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [about, setAbout] = useState("");
    const [error, setError] = useState(false);
    const [avatar, setAvatar] = useState("");

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