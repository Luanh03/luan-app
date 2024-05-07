import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Header from './Header.js';
import Bio from './Bio.js';
import Projects from './Projects.js';
import Skills from './Skills.js';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useNavigate } from 'react-router-dom';

export default function Home(){

    const navigate = useNavigate();

    const [ escuro, setEscuro ] = React.useState('false');
    
    const tema = {
        backgroundColor: escuro ? '#CFD8DC' : '#111111',
        color: escuro ?  '#9575CD' : '#9575CD', 
    }

    function mudarTema(){
        setEscuro(!escuro)
    }

    return(
        <Grid className="Main"style={tema}>
            <Grid className="GridNavBar">
                <button onClick={mudarTema}>{escuro === true ? <LightModeIcon /> : <DarkModeIcon />}</button>
                <a href="/">LUAN</a>
                <ul>
                    <li><a href="/">Início</a></li>
                    <li><a href="#Header">Apresentação</a></li>
                    <li><a href="#Bio">Sobre</a></li>
                    <li><a href="#Projects">Projetos</a></li>
                    <li><a href="#Skills">Habilidades</a></li>
                </ul>
            </Grid>
            <Header />
            <Bio />
            <Projects />
            <Skills />
        </Grid>
    );
}