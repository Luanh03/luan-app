import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Bio(){
    return(
        <Box sx={{ width:'100%', height: '100vh', display: 'flex'}}>
        <Grid sx={{ textAlign:'center'}}>
            <h1 className="BioTitle">Sobre mim</h1>
            <p className="BioText">Me chamo Luan Henrique, sou um jovem apaixonado por tecnologia e por linhas de código.
                Atualmente tenho 20 anos, estou no 6° período da graduação de Sistemas da Informação
                pelo Centro Universitário do Distrito Federal (UDF). Habitante de Brasília, Distrito Federal.
                Sempre estou buscando aprimorar minhas técnicas e meus conhecimentos através de cursos 
                voltados para as áreas que eu tenho interesse.    
            </p>
        </Grid>
    </Box>
    );
}