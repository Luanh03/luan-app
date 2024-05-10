import React from 'react';
import Grid from '@mui/material/Grid';
import { MdOutlineEmail } from "react-icons/md";

export default function Contacts(){
    return (
        <Grid id="Contacts"className="ContactsGrid">
            <h1>Contacts</h1>
            <p>Espero que tenha gostado, muito obrigado pela visita, me envie um e-mail para que possamos marcar uma conversa. Você também pode me encontar no meu 
            <a target="_blank" href="https://www.linkedin.com/in/luan-henrique-47ab98254/"> Linkedin </a>se for da sua preferência.</p>
            <a href="mailto:luanhcosta03@gmail.com"><MdOutlineEmail />luanhcosta03gmail.com</a>
        </Grid>
    );
};