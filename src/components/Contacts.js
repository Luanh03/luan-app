import * as React from 'react';
import Grid from '@mui/material/Grid';


export default function Contacts(){

    return(
        <Grid className="GridContacts">
        <h1 className="TitleContacts">ENTRE EM CONTATO COMIGO!</h1>
        <section>
            <ul className="ListContacts">
                <li><a className="ImgContacts"/></li>
                <li><a className="ImgContacts"/></li>
            </ul>
        </section>
    </Grid>
    );
}