import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Header(){
    return(
        <Box className="BoxHeader">
            <Grid className="GridHeader">
                <h1 className="HeaderTitle typing-animation-Header">Hi, I'm Luan Henrique</h1>
                <hr />
                <h2 className="HeaderSubTitle typing-animation-SubHeader">I'm a FullStack Developer</h2>
                <p className="HeaderText">Hi, I'm Luan, FullStack Developer. Welcome to my portfolio, here you will learn more about me, my projects and knowledge. 
                You'll discover that my passion for technology goes beyond lines of code. Web development with knowledge in broad areas</p>
            </Grid>
        </Box>
    );
}