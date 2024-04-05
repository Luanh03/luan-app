import * as React from 'react';
import Grid from '@mui/material/Grid';
import Github from '../images/Github.svg';
import Linkedin from '../images/Linkedin.svg'

export default function Contacts(){

    return(
        <Grid className="GridContacts">
        <h1 className="TitleContacts">ENTRE EM CONTATO COMIGO!</h1>
        <ul className="ListContacts">
            <li><img className="ImgContacts" src={Github} /></li>
            <li><img className="ImgContacts" src={Linkedin}/></li>
        </ul>
    </Grid>
    );
}