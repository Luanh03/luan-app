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
                pelo Centro Universitário do Distrito Federal (UDF). Sempre estou buscando aprimorar minhas técnicas e meus conhecimentos através de cursos 
                voltados para as áreas que eu tenho interesse. Abstrair e solucionar problemas é o que me motiva a continuar nesse caminho, isto para mim vai muito além de apenas trabalho
                estar em contato com o código é algo que eu realmente trato como além de trabalho, algo que sou obcecado.  
            </p>
        </Grid>
    );
}