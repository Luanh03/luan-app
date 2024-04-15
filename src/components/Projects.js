import * as React from 'react';
import Grid from '@mui/material/Grid';
import Workshop from '../images/Wokshop.jpg';
import { FaHtml5 } from "react-icons/fa";

export default function Projects(){
    return(
        
        <Grid className="GridProj">
            <h1 className="TitleProj">Projetos</h1>
            <section className="CardProj">
                <h3>TítuloProjetos</h3>
                <img src={Workshop} />
                <div className="CardProj_Footer">
                    <div className="CardProj_Icons">
                        <FaHtml5 />
                        <FaHtml5 />
                        <FaHtml5 />
                        <FaHtml5 />
                        <FaHtml5 />
                        <FaHtml5 />
                    </div>
                    <button>Rota</button>
                </div>
            </section>
        </Grid>
    );
}