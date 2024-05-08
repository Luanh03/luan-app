import * as React from 'react';
import { useLayoutEffect } from 'react';
import Grid from '@mui/material/Grid';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CSharp from '../images/C-sharp.svg';
import CSS from '../images/CSS3.svg';
import Django from '../images/Django.svg';
import HTML from '../images/HTML5.svg';
import Python from '../images/Python.svg';
import ReactJS from '../images/ReactJS.svg';
import Javascipt from '../images/javascript.svg';
import MySql from '../images/MySql.svg';
import SqlServer from '../images/SqlServer.svg';

export default function Bio(){

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".BioGrid", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".BioGrid",
                scrub: 1,
                start: "top 510px",
                end: "bottom 620px",
            }
        })
        return () => {
            gsap.killTweensOf(".BioGrid");
        }
    }, [])

    return(
        <Grid id="Bio" className="BioGrid">
            <h1 class="line">About me</h1>
            <Grid className="BioGridInfo">
                <p>My name is Luan Henrique, I'm a young web developer.
                    I am currently in the 6th period of my Information Systems degree.
                    by the Federal District University Center (UDF). I am always looking to improve my techniques and knowledge through courses.
                    focused on technology areas. Abstracting and solving problems is what motivates me to continue on this path, this for me goes far beyond just work
                    being in touch with code is something I actually treat as beyond work, something I'm obsessed with.<br />
                    <br />I have experience in the area of ​​technology through an internship at the Federal Council of Engineering and Agronomy (Confea), using the main tools
                    ASP.NET Core, C#, .NET, Entity Framework, Microsotft Sql Server and Git, developing software, collaborating on large-scale projects, participating in the preparation and
                    validating software requirements, monitoring projects in production and acquiring practical knowledge about the software development life cycle.
                </p>
                <Grid className="GridSkills2">
                    <section>
                        <h2>Frontend</h2>
                        <img src={HTML} />
                        <img src={CSS} />
                        <img src={Javascipt} />
                        <img src={ReactJS} />
                    </section>

                    <section>
                        <h2>Backend</h2>
                        <img src={CSharp} />
                        <img src={Python} />
                        <img src={Django} />
                        <img src={MySql} />
                        <img src={SqlServer} />
                    </section>
                </Grid>
            </Grid>
        </Grid>
    );
}