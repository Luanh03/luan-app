import * as React from 'react';
import Grid from '@mui/material/Grid';
import Header from '../components/Header';
import Bio from '../components/Bio';
import Experience from '../components/Experience';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Home(){

    const [ escuro, setEscuro ] = React.useState('false');
    
    const tema = {
        backgroundColor: escuro ? '#CFD8DC' : '#111111',
        color: escuro ?  '#9575CD' : '#0aff9d', 
    }

    function mudarTema(){
        setEscuro(!escuro)
    }

    return(
        <Grid className="Main"style={tema}>
            <button onClick={mudarTema}>{escuro === true ? <LightModeIcon /> : <DarkModeIcon />}</button>
            <Header />
            <Bio />
            <Experience />
        </Grid>
    );
}