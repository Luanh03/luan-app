import * as React from 'react';
import Grid from '@mui/material/Grid';
import Workshop from '../images/Wokshop.jpg';
import { TbBrandCSharp } from "react-icons/tb";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";


export default function Projects(){
    return(
        <Grid className="GridProj">
            <h1>Projects</h1>
            <Grid className="CardProj_Grid">
                <section>
                    <h3>Workshop</h3>
                    <img src={Workshop} />
                    <div className="CardProj_Footer">
                        <div className="CardProj_Icons">
                            <TbBrandCSharp />
                            <SiMicrosoftsqlserver />
                            <FaGitAlt />
                        </div>
                        <button className="CardProj_Button">Rota</button>
                    </div>
                </section>
            </Grid>
        </Grid>
    );
}