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
            <section className="ListSkills">
                <img className="ImgSkill" src={CSharp} />
                <img className="ImgSkill" src={CSS} />
                <img className="ImgSkill" src={Django} />
                <img className="ImgSkill" src={Git} />
                <img className="ImgSkill" src={HTML} />
                <img className="ImgSkill" src={SQLServer} />
                <img className="ImgSkill" src={Python} />
                <img className="ImgSkill" src={ReactJS} />
            </section>
        </Grid>
    );
}