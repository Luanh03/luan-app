import * as React from 'react';
import Grid from '@mui/material/Grid';
import { LogoDev } from '@mui/icons-material/';

export default function Experience(){
    return(
        <Grid className="GridExp">
            <h1 className="TitleExp">Projetos</h1>
            <ul className="ImagemList">
                <li>
                    <img className="ImagemExp"src={LogoDev} />
                    <p className="ImagemTitle">WorkShop</p>
                </li>
                <li>
                    <img className="ImagemExp" src={LogoDev} />
                    <p className="ImagemTitle">Portfólio</p>
                </li>
            </ul>
        </Grid>
    );
}