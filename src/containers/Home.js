import * as React from 'react';
import Grid from '@mui/material/Grid';
import Header from '../components/Header';
import Bio from '../components/Bio';
import Experience from '../components/Experience';
import Professional from '../components/Professional';
import Skills from '../components/Skills';
import Contacts from '../components/Contacts';
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
                <button className="ButtonNavBar" onClick={mudarTema}>{escuro === true ? <LightModeIcon /> : <DarkModeIcon />}</button>
                <a  className="LogoNavBar" href="/">LUAN</a>
                <ul className="ListNavBar">
                    <li className="ItemNavBar"><a>Início</a></li>
                    <li className="ItemNavBar"><a href="/">Sobre</a></li>
                    <li className="ItemNavBar"><a href="/">Projetos</a></li>
                    <li className="ItemNavBar"><a href="/">Carreira Profissional</a></li>
                    <li className="ItemNavBar"><a href="/">Habilidades</a></li>
                    <li className="ItemNavBar"><a href="/">Contatos</a></li>
                </ul>
            </Grid>
            <Header />
            <Bio />
            <Experience />
            <Professional />
            <Skills />
            <Contacts />
        </Grid>
    );
}