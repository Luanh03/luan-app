import * as React from 'react';
import Grid from '@mui/material/Grid';
import CSharp from '../images/C-sharp.svg';
import CSS from '../images/CSS3.svg';
import Django from '../images/Django.svg';
import Git from '../images/Git.svg';
import HTML from '../images/HTML5.svg';
import SQLServer from '../images/SQLServer.svg';
import Python from '../images/Python.svg';
import ReactJS from '../images/ReactJS.svg';

export default function Skills(){
    return(
        <Grid className="GridSkills">
            <h1 className="TitleSkills">Habilidades</h1>
            <ul className="ListSkills">
                <li><img className="ImgSkill" src={CSharp} /></li>
                <li><img className="ImgSkill" src={CSS} /></li>
                <li><img className="ImgSkill" src={Django} /></li>
                <li><img className="ImgSkill" src={Git} /></li>
                <li><img className="ImgSkill" src={HTML} /></li>
                <li><img className="ImgSkill" src={SQLServer} /></li>
                <li><img className="ImgSkill" src={Python} /></li>
                <li><img className="ImgSkill" src={ReactJS} /></li>
            </ul>
        </Grid>
    );
}