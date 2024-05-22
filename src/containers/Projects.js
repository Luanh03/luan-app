import * as React from 'react';
import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Grid from '@mui/material/Grid';
import Workshop from '../images/Wokshop.jpg';
import SqlServer from '../images/SqlServer.svg';
import CSharp from '../images/C-sharp.svg';


export default function Projects(){

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".GridProj", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".GridProj",
                scrub: 1,
                start: "top 710px",
                end: "bottom 850px"
            }
        })
        return () => {
            gsap.killTweensOf(".GridProj");
        }
    }, [])

    return(
        <Grid className="GridProj">
            <h1 id="Projects">Projects</h1>
            <Grid className="GridProj">
                <div>
                    <img src={Workshop} />
                </div>
                <div>
                    <p>Skill</p>
                </div>
            </Grid>
        </Grid>
    );
}