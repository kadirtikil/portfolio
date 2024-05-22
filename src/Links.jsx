import './Links.css'
import gmailLogo from './assets/gmail.svg'
import githubLogo from './assets/github.svg'


export default function Links() {
    return (
        <div className="rootLinks">
            <a href="" ><img src={gmailLogo}></img></a>
            <a href="" ><img src={githubLogo}></img></a>
        </div>
    )
}