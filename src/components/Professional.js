import * as React from 'react';
import Grid from '@mui/material/Grid';
import Confea from '../images/Confea.png'

export default function Professional(){
    return(
        <Grid className="GridProfessional"> 
            <h1 className="TitleProfessional">Carreira Profissional</h1>
            <ul className="ListProfessional">
            <li><img src={Confea} className="ImgProfessional" /></li>
            <li><p className="TextProfessional">
                No ano de 2023 iniciei a minha jornada na área da tecnologia como estagário do Conselho Federal de Engenharia e Agronomia (Confea).
                Atuando como Desenvolvedor Web usando .Net, ASP .NET, C# de acordo com a demanda e o projeto, Entity Framework como biblioteca para ajuda no desenvolvimento,
                Microsoft SQL Server como banco de dados de todos os projetos e o Git como versionador de código para trabalho em equipe.  
                As principais tarefas era colaborar em projetos em grande escala, escrevendo código e resolvendo desafios de software. Participava juntamente com a equipe na
                elaboração e validação de requisitos de software, acompanhamento de projetos em produção e aquisição de conhecimento prático sobre o ciclo de vida de desenvolvimento
                de software, abrangendo todas as fases, desde a concepção até a entrega e manutenção.
            </p></li>
            </ul>
        </Grid>
    );
}