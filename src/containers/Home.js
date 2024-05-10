import * as React from 'react';
import Grid from '@mui/material/Grid';
import Header from './Header.js';
import Bio from './Bio.js';
import Projects from './Projects.js';
import Contacts from './Contacts.js';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Home(){

    const [ escuro, setEscuro ] = React.useState('false');
    
    const tema = {
        backgroundColor: escuro ? '#CFD8DC' : '#111111',
        color: escuro ?  '#9575CD' : '#9575CD', 
    }

    function mudarTema(){
        setEscuro(!escuro)
    }

    return(
        <Grid className="Main" style={tema}>
            <Grid className="GridNavBar">
                <button onClick={mudarTema}>{escuro === true ? <LightModeIcon /> : <DarkModeIcon />}</button>
                <a href="/">LUAN</a>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#Header">Header</a></li>
                    <li><a href="#Bio">Biography</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Contacts">Contacts</a></li>
                </ul>
            </Grid>
            <Header />
            <Bio />
            <Projects />
            <Contacts />
        </Grid>
    );
}