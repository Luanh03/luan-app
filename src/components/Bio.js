import * as React from 'react';
import { useLayoutEffect } from 'react';
import Grid from '@mui/material/Grid';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Bio(){

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".BioText", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".BioText",
                scrub: true,
                start: "top 510px",
                end: "bottom 620px",
            }
        })
        return () => {
            gsap.killTweensOf(".BioText");
        }
    }, [])

    return(
        <Grid className="BioGrid">
            <h1 className="BioTitle">Sobre mim</h1>
            <p className="BioText">Me chamo Luan Henrique, sou um jovem apaixonado por tecnologia e por linhas de código.
                Atualmente estou no 6° período da graduação de Sistemas da Informação
                pelo Centro Universitário do Distrito Federal (UDF). Habitante de Brasília, Distrito Federal.
                Sempre estou buscando aprimorar minhas técnicas e meus conhecimentos através de cursos 
                voltados para as áreas que eu tenho interesse.    
            </p>
        </Grid>
    );
}