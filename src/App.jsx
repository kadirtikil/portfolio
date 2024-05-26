import './App.css'

import portfolioLogo from './assets/portfoliologo2.svg'

import Links from './Links'

import Welcome from './Welcome'
import Projects from './Projects'

import Techstack from './Techstack'

import ParticleComponent from './Particles'


function App() {

  

  return (
    <>
      <div className="root" id='root'>
        <div className="portfoliologo">
          <img src={portfolioLogo} alt="" />
        </div>
        <Links />

        <Welcome/>

        <Projects />
        <div id="rootTechstack">
          <Techstack/>
        </div>
        <div id="particles">
          <ParticleComponent/>
        </div>
      </div>
    </>
  )
}

export default App
