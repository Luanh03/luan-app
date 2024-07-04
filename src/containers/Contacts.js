import React from 'react';
import Grid from '@mui/material/Grid';
import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MdOutlineEmail } from "react-icons/md";

export default function Contacts(){

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".ContactsGrid", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".ContactsGrid",
                scrub: 1,
                start: "top 710px",
                end: "bottom 850px"
            }
        })
        return () => {
            gsap.killTweensOf(".ContactsGrid");
        }
    }, [])

    return (
        <Grid id="Contacts"className="ContactsGrid">
            <h1>Contacts</h1>
            <p>Thanks for visiting, I hope you enjoyed it. Send me an email so I can schedule a conversation. If you prefer, you can find me on my
            <a target="_blank" href="https://www.linkedin.com/in/luan-henrique-47ab98254/"> Linkedin. </a></p>
            <div>
                <a href="mailto:luanhcosta03@gmail.com"><MdOutlineEmail />luanhcosta03gmail.com</a>
            </div>
        </Grid>
    );
};