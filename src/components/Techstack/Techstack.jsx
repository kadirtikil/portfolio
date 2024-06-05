import './Techstack.css'

import aspnetLogo from '../../assets/svgs/aspnet.svg'
import csharpLogo from '../../assets/svgs/csharp.svg'
import gitLogo from '../../assets/svgs/git.svg'
import githubLogo from '../../assets/svgs/github.svg'
import jsLogo from '../../assets/svgs/js.svg'
import tsLogo from '../../assets/svgs/typescript.svg'
import laravelLogo from '../../assets/svgs/laravel.svg'
import ngLogo from '../../assets/svgs/ng.svg'
import reactLogo from '../../assets/svgs/react.svg'
import phpLogo from '../../assets/svgs/php.svg'
import awsLogo from '../../assets/svgs/aws.svg'
import goLogo from '../../assets/svgs/go.svg'





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
            <img src={goLogo} alt="" />
            <img src={awsLogo} alt="" />

        </div>
    )
}