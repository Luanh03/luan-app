import * as React from 'react';
import Grid from '@mui/material/Grid';
import Workshop from '../images/Wokshop.jpg';

export default function Experience(){
    return(
        <Grid className="GridExp">
            <h1 className="TitleExp">Projetos</h1>
            <ul className="ImagemListExp">
                <li>
                    <img className="ImagemExp"src={Workshop} />
                    <p className="ImagemTitle">WorkShop</p>
                </li>
                <li>
                    <img className="ImagemExp" src={Workshop} />
                    <p className="ImagemTitle">Portfólio</p>
                </li>
            </ul>
        </Grid>
    );
}