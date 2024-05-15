import React from 'react';
import Grid from '@mui/material/Grid';
import { MdOutlineEmail } from "react-icons/md";

export default function Contacts(){
    return (
        <Grid id="Contacts"className="ContactsGrid">
            <h1>Contacts</h1>
            <p>Thanks for visiting, I hope you enjoyed it. Send me an email so I can schedule a conversation. If you prefer, you can find me on my
            <a target="_blank" href="https://www.linkedin.com/in/luan-henrique-47ab98254/"> Linkedin </a></p>
            <div>
                <a href="mailto:luanhcosta03@gmail.com"><MdOutlineEmail />luanhcosta03gmail.com</a>
            </div>
        </Grid>
    );
};