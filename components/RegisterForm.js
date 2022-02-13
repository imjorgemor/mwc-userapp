import ErrorMessage from "./ErrorMessage"
import styles from "../styles/RegisterForm.module.css"
import { useRouter } from 'next/router';
import { useContext } from "react";
import AppContext from '../AppContext';
import avatarGen from "../helpers/avatarGen";


const RegisterForm = () => {

    const {email, setEmail, name, setName, surname, setSurname, country, setCountry, city, setCity, about, setAbout, error, setError, setAvatar} = useContext(AppContext);
    
    const router = useRouter();

    const handleSubmit = e => {
        e.preventDefault();

        if ([email, name, surname, country, city].includes("")) {
            setError(true);
            return
        }
        setError(false);

        !error && router.push('/dashboard');

        const color1 = avatarGen();
        setAvatar(color1) 
    }

    return (
        <section className={`${styles['form-section']}`}>

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