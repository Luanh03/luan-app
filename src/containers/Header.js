import * as React from 'react';
import Grid from '@mui/material/Grid';

export default function Header(){
    
    return(
            <Grid className="GridHeader">
                <h1 id="Header" className="typing-animation-Header">Hi, I'm Luan Henrique</h1>     
                <h2 className="typing-animation-SubHeader">I'm a FullStack Developer</h2>
                <p>Hello, I'm Luan, FullStack Developer.
                Welcome to my portfolio, here you will learn more about me, my projects and my skills.
                You will find that my passion for technology goes beyond lines of code, abstracting and solving problems is my motivation.
                C# and ReactJS Web Development.</p>
            </Grid>
    );
}