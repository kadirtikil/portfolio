import './Links.css'
import gmailLogo from './assets/gmail.svg'
import githubLogo from './assets/github.svg'

import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';


export default function Links() {
    const [toolTipTitle, setToolTipTitle] = useState('click to copy my email');

    const copyEmail = (event) => {
        event.preventDefault();

        var email = "kadirtikil@gmail.com";

        navigator.clipboard.writeText(email).then(() => {
            setToolTipTitle("email copied! go away now u r hogging server resources this stuff mad expensive");
            setTimeout(() => setToolTipTitle('click to copy my email'), 5000);
        });
    }

    return (
        <div className="rootLinks">
            <Tooltip title={toolTipTitle}>
                <a href="" onClick={copyEmail}>
                    <img src={gmailLogo}></img>
                </a>
            </Tooltip>
            <Tooltip title="click to go to my github">
                <a href="https://github.com/kadirtikil" target='_blank'>
                    <img src={githubLogo}></img>
                </a>
            </Tooltip>
        </div>
    )
}