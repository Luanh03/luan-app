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

const navigate = useNavigate;

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
        <Grid className="Main"style={tema}>
            <Grid className="GridNavBar">
                <button className="ButtonNavBar" onClick={mudarTema}>{escuro === true ? <LightModeIcon /> : <DarkModeIcon />}</button>
                <a  className="LogoNavBar" href="/">LUAN</a>
                <ul className="ListNavBar">
                    <li className="ItemNavBar"><a>Início</a></li>
                    <li className="ItemNavBar"><a>Sobre</a></li>
                    <li className="ItemNavBar"><a>Projetos</a></li>
                    <li className="ItemNavBar"><a>Carreira Profissional</a></li>
                    <li className="ItemNavBar"><a>Habilidades</a></li>
                    <li className="ItemNavBar"><a>Contatos</a></li>
                </ul>
            </Grid>
            <Header />
            <Bio />
            <Projects />
            <Skills />
        </Grid>
    );
}