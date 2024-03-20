import * as React from 'react';
import Grid from '@mui/material/Grid';
import Header from '../components/Header';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Home(){

    const [ escuro, setEscuro ] = React.useState('false');
    
    const tema = {
        backgroundColor: escuro ? '#111111' : '#CFD8DC',
        color: escuro ? '#0aff9d' : '#9575CD', 
    }

    function mudarTema(){
        setEscuro(!escuro)
    }

    return(
        <Grid style={tema}>
            <button onClick={mudarTema}>{escuro === true ? <LightModeIcon /> : <DarkModeIcon />}</button>
            <Header />
        </Grid>
    );
}