import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Header(){
    return(
        <Box sx={{ width:'100%', height: '100vh', display: 'flex'}}>
            <Grid sx={{ textAlign:'center'}}>
                <h1 style={{ }}>Hi, I'm Luan Henrique</h1>
                <h2 style={{  }}>I'm a FullStack Developer</h2>
                <p style={{ }}>Hi, I'm Luan, FullStack Developer. Welcome to my portfolio, here you will learn more about me, my projects and knowledge. 
                You'll discover that my passion for technology goes beyond lines of code. Web development with knowledge in broad areas</p>
            </Grid>
        </Box>
    );
}