import * as React from 'react';
import Grid from '@mui/material/Grid';

export default function Header(){
    
    return(
            <Grid className="GridHeader">
                <h1 id="Header" className="typing-animation-Header">Hi, I'm Luan Henrique</h1>     
                <h2 className="typing-animation-SubHeader">I'm a FullStack Developer</h2>
                <p>Hi, I'm Luan - Junior FullStack Developer. Here you can learn a little more about me and you will see that my relationship with technology goes far beyond lines of code, 
                    abstracting and solving problems is not just a job but it is my motivation, with this I have been making the ideas I dream come true.</p>
            </Grid>
    );
}