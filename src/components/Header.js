import * as React from 'react';
import Grid from '@mui/material/Grid';

export default function Header(){
    
    return(
            <Grid className="GridHeader">
                <h1 className="HeaderTitle typing-animation-Header">Hi, I'm Luan Henrique</h1>     
                <h2 className="HeaderSubTitle typing-animation-SubHeader">I'm a FullStack Developer</h2>
                <p className="HeaderText">Olá, eu sou Luan, Desenvolvedor FullStack.
                Bem vindo ao meu portfólio, aqui você conhecerá mais sobre mim, meus projetos e minhas habilidades.
                Você descobrirá que minha paixão por tecnologia vai além de linhas de código.
                Desenvolvimento Web com conhecimento em amplas habilidades.</p>
            </Grid>
    );
}