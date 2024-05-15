import * as React from 'react';
import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Grid from '@mui/material/Grid';
import Workshop from '../images/Wokshop.jpg';
import { TbBrandCSharp } from "react-icons/tb";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";


export default function Projects(){

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".GridProj", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".GridProj",
                scrub: 1,
                start: "top 310px",
                end: "bottom 450px",
            }
        })
        return () => {
            gsap.killTweensOf(".GridProj");
        }
    }, [])

    return(
        <Grid className="GridProj">
            <h1 id="Projects">Projects</h1>
            <Grid className="CardProj_Grid">
                <section>
                    <h3>Workshop</h3>
                    <img src={Workshop} />
                    <div className="CardProj_Footer">
                        <div className="CardProj_Icons">
                            <TbBrandCSharp />
                            <SiMicrosoftsqlserver />
                            <FaGitAlt />
                        </div>
                        <button className="CardProj_Button">Rota</button>
                    </div>
                </section>
            </Grid>
        </Grid>
    );
}