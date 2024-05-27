import './Techstack.css'

import aspnetLogo from './assets/aspnet.svg'
import csharpLogo from './assets/csharp.svg'
import gitLogo from './assets/git.svg'
import githubLogo from './assets/github.svg'
import jsLogo from './assets/js.svg'
import tsLogo from './assets/typescript.svg'
import laravelLogo from './assets/laravel.svg'
import ngLogo from './assets/ng.svg'
import reactLogo from './assets/react.svg'
import phpLogo from './assets/php.svg'
import awsLogo from './assets/aws.svg'





export default function Techstack(){
    return (
        <div className='rootTechstack'>
            
            <img src={jsLogo} alt="" />
            <img src={tsLogo} alt="" />
            <img src={ngLogo} alt="" />
            <img src={reactLogo} alt="" />
            <img src={csharpLogo} alt="" />
            <img src={aspnetLogo} alt="" />
            <img src={phpLogo} alt="" />
            <img src={laravelLogo} alt="" />
            <img src={gitLogo} alt="" />
            <img src={githubLogo} alt="" />
            <img src={awsLogo} alt="" />

        </div>
    )
}