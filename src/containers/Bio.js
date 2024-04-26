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
            <h1>About me</h1>
            <p>My name is Luan Henrique, I'm a young web developer.
                I am currently in the 6th period of my Information Systems degree.
                by the Federal District University Center (UDF). I am always looking to improve my techniques and knowledge through courses.
                focused on technology areas. Abstracting and solving problems is what motivates me to continue on this path, this for me goes far beyond just work
                being in touch with code is something I actually treat as beyond work, something I'm obsessed with.
                I have experience in the area of ​​technology through an internship at the Federal Council of Engineering and Agronomy (Confea), using the main tools
                ASP.NET Core, C#, .NET, Entity Framework, Microsotft Sql Server and Git, developing software, collaborating on large-scale projects, participating in the preparation and
                validating software requirements, monitoring projects in production and acquiring practical knowledge about the software development life cycle.
            </p>
        </Grid>
    );
}