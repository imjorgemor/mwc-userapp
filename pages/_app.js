import { useState } from 'react'
import AppContext from '../AppContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [about, setAbout] = useState("");
    const [error, setError] = useState(false);
    const [avatar, setAvatar] = useState("#111");
    const [experienceList, setExperienceList] = useState([]);
    const [skillList, setSkillList] = useState([]);
   

    const data = {email, setEmail, name, setName, surname, setSurname, country, setCountry, city, setCity, about, setAbout, error, setError, avatar, setAvatar, experienceList, setExperienceList, skillList, setSkillList};

  return (
      <AppContext.Provider value={data}>
           <Component {...pageProps} />
      </AppContext.Provider>
  )  
}

export default MyApp
