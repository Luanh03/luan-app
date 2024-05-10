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
import Linkedin from '../images/Linkedin.svg';
import Github from '../images/Github.svg';

export default function Bio() {

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

    return (
        <Grid id="Bio" className="BioGrid">
            <h1 class="line">About me</h1>
            <Grid className="BioGridInfo">
                <p>My name is Luan Henrique. Technology has always been present in my life since my childhood as I have always liked games, whether on a console or on a computer. 
                    The codes came a little later in my life but upon first contact I was sure that this was my passion.<br />
                    <br />I am currently an intern at the Federal Council of Engineering and Agronomy, a federal body that controls and supervises the exercise of the profession of engineers and architects in Brazil, as a Web Developer, 
                    I work developing software, APIs, collaborating on large-scale projects, participating in the preparation and
                    validating software requirements, monitoring projects in production,acquiring practical knowledge about the software development life cycle and carrying out maintenance so that the professionals governed by this body have quality, safety and ease according to your needs. 
                    C#, .NET, .NET Core, ASP.NET, ASP.NET Core, SQL Server, GitLab, JavaScript and API in .NET Core have been used.
                </p>
                <Grid className="BioGridSkills">
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
            <section className="SectionBioContacts">
                <h4>My contact links: </h4>
                <a href="https://www.linkedin.com/in/luan-henrique-47ab98254/" target="_blank"><img src={Linkedin} /></a>
                <a href="https://github.com/Luanh03" target="_blank"><img src={Github} /></a>
            </section>
        </Grid>
    );
}