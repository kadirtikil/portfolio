import './App.css'

import portfolioLogo from './assets/svgs/portfoliologo2.svg'

import Links from './components/Links/Links'

import Welcome from './components/Welcome/Welcome'
import Projects from './components/Projects/Projects'

import Techstack from './components/Techstack/Techstack'

import ParticleComponent from './Particles'
import { useState } from 'react'

import languages from './assets/language/languages.json';

import germany from './assets/svgs/germany.svg';
import uk  from './assets/svgs/uk.svg';


import Tooltip from '@mui/material/Tooltip';


function App() {
  // i know i could just use i18 or whatever for this but no thank you felt cute might do it later
  const [language, setLanguage] = useState('english');

  const [flagForLanguage, setFlagForLanguage] = useState(germany);

  const [mobileTextForLink, setMobileTextForLinks] = useState('click on the gmail logo to copy my email or click on the github logo to visit my github page.');

  function changeLanguage() {
    if(language === 'german'){
      setLanguage('english');
      setFlagForLanguage(germany);
      setMobileTextForLinks('click on the gmail logo to copy my email (doesnt work on ios safari) or click on the github logo to visit my github page.')
    }
    else {
      setLanguage('german');
      setFlagForLanguage(uk);
      setMobileTextForLinks('klicke auf das gmail logo um meine email zu kopieren (funtioniert nicht auf safari) oder klicke auf das github logo um mein github zu besuchen.')
    }
  }

  function closeSmallLogoDialog() {
    const closebutton = document.getElementById("ismobile");

    closebutton.style = 'display: none;'
  }

  return (
    <>
      <div className="root" id='root'>
        <div className="portfoliologo">
          <img src={portfolioLogo} alt="" />
        </div>
        <Links data={{clickToCopyEmail: languages[language]['clickToCopyEmail'], 
              copyEmailConfirmed: languages[language]['copyEmailConfirmed'], 
              clickToGoToGithub: languages[language]['clickToGoToGithub']}} />

        <Welcome data={{welcome: languages[language]['welcome'], 
                welcome_text:languages[language]['welcome_text'], 
                outro: languages[language]['outro']}}/>

        <Projects data= {{project: languages[language]['projects'],
                projectsList: languages[language]['projectsList']}} />
        <div id="rootTechstack">
          <Techstack/>
        </div>
        <div id="particles">
          <ParticleComponent/>
        </div>
        <div className="ismobile" id="ismobile">
          <p id='close' onClick={closeSmallLogoDialog}>X</p>
          <p>{mobileTextForLink}</p>
        </div>
      </div>
      <Tooltip title={languages[language]['tooltipForLanguage']}>
        <button onClick={changeLanguage}><img src={flagForLanguage} alt="" /></button>
      </Tooltip>
    </>
  )
}

export default App
