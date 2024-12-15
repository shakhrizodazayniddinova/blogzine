import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';

import Header from "./components/Header/Header";
import Landing from "./components/LandingPage/Landing";
import Highlights from "./components/Highlights/Highlights";
import Newhighlights from "./components/Newhighlights/Newhighlights";
import Topics from "./components/Topics/Topics";
import Sportsupdate from "./components/Sportsupdate/Sportsupdate";
import Sponsored from "./components/Sponsored/Sponsored";
import Emailform from "./components/EmailForm/Emailform";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import { Theme } from "./components/Theme/Theme";

function App() {
  // theme
  const [theme, setTheme] = useState('white');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'white' ? 'dark' : 'white'));
  }
  
  useEffect(() => {
    const scrolledFunc = () => {
      const header = document.getElementById('header');
      
      if (window.scrollY > window.innerHeight) {
        document.body.classList.add("scrolled");
        header.classList.add("shadow");
      }else{
        document.body.classList.remove("scrolled");
        header.classList.remove("shadow");
      }
    };

    window.addEventListener('scroll', scrolledFunc);
    return () => window.removeEventListener('scroll', scrolledFunc);

  }, []);
  
  return(
    <Theme.Provider value={{theme, toggleTheme}}>
      {/* header */}
      <Header/>

      <section className={`bg-${theme === 'white' ? 'white' : 'dark'}`}>
        {/* landing page */}
        <Landing/>

        {/* main */}
        <main>
          <a href="#" className={`arrowBtn ${theme === 'white' ? 'arrowBtn' : 'arrowBtnDark'}`}><FontAwesomeIcon icon={faArrowUp} /></a>

          {/* highlights section */}
          <Highlights/>

          {/* new highlights section */}
          <Newhighlights/>

          {/* Topics section */}
          <Topics/>

          {/* Sportupdate section */}
          <Sportsupdate/>

          {/* Sponsored section */}
          <Sponsored/>

          {/* Email from section */}
          <Emailform/>
        </main>

        <footer>
          <Footer/>
        </footer>
      </section>
    </Theme.Provider>
  )
}

export default App;