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
            <h1>Skills</h1>
            <section>
                <div className="DivSkills">
                    <h1>CSHARP</h1>
                    <img src={CSharp} />
                    <p>Habilidade aprendida na faculdade</p>
                </div>
                <div className="DivSkills">
                    <img className="ImgSkill" src={CSS} />
                    <p>Habilidade aprendida na faculdade</p>
                </div>
                <div className="DivSkills">
                    <img className="ImgSkill" src={HTML} />
                    <p>Habilidade aprendida na faculdade</p>
                </div>
                <div className="DivSkills">
                    <img className="ImgSkill" src={SQLServer} />
                    <p>Habilidade aprendida na faculdade</p>
                </div>
                <div className="DivSkills">
                    <img className="ImgSkill" src={Python} />
                    <p>Habilidade aprendida na faculdade</p>
                </div>
                <div className="DivSkills">
                    <img className="ImgSkill" src={Django} />
                    <p>Habilidade aprendida na faculdade</p>
                </div>
                <div className="DivSkills">
                    <img className="ImgSkill" src={Git} />
                    <p>Habilidade aprendida na faculdade</p>
                </div>
                <div className="DivSkills">
                    <img className="ImgSkill" src={ReactJS} />
                    <p>Habilidade aprendida na faculdade</p>
                </div>
            </section>
        </Grid>
    );
}