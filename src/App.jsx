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
      <div className="root">
        <img src={portfolioLogo} className='portfoliologo' alt="" />
        <Links />

        <Welcome/>

        <Projects />

        <Techstack/>

        <div id="particles">
          <ParticleComponent/>
        </div>
      </div>
    </>
  )
}

export default App
