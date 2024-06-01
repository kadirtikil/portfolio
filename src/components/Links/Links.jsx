import './Links.css'
import gmailLogo from '../../assets/svgs/gmail.svg'
import githubLogo from '../../assets/svgs/github.svg'

import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';


export default function Links({data}) {
    const [toolTipTitle, setToolTipTitle] = useState(data['clickToCopyEmail']);

    const copyEmail = (event) => {
        event.preventDefault();

        var email = "kadirtikil@gmail.com";

        navigator.clipboard.writeText(email).then(() => {
            setToolTipTitle(data['copyEmailConfirmed']);
            setTimeout(() => setToolTipTitle(data['clickToCopyEmail']), 5000);
        });
    }

    return (
        <div className="rootLinks">
            <Tooltip title={toolTipTitle}>
                <a href="" onClick={copyEmail}>
                    <img src={gmailLogo}></img>
                </a>
            </Tooltip>
            <Tooltip title={data['clickToGoToGithub']}>
                <a href="https://github.com/kadirtikil" target='_blank'>
                    <img src={githubLogo}></img>
                </a>
            </Tooltip>
        </div>
    )
}