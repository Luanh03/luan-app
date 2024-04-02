import * as React from 'react';
import Grid from '@mui/material/Grid';
import CSharp from '../images/CSharp.jpg';
import Django from '../images/Django.png';
import DotNet from '../images/DotNet.png';
import EntityFramework from '../images/EntityFramework.png';
import Git from '../images/Git.png';
import Html5 from '../images/Html5.jpg';
import Css3 from '../images/Css3.jpg';
import JS from '../images/JS.png';
import Python from '../images/Python.png';
import ReactLogo from '../images/ReactLogo.png';
import SqlServer from '../images/SqlServer.png';

export default function Skills(){
    return(
        <Grid className="GridSkills">
            <h1 className="TitleSkills">Habilidades</h1>
            <ul className="ListSkills">
                <li><img className="ItemSkills" src={CSharp} /></li>
                <p className="TextSkills">C# é a habilidade que dentre todas as que tenho conhecimento, é a que tenho mais familiardade pois é a que uso mais diariamente
                consequentemente estudei mais, desde o início de 2023 me aprofundo nela e gosto bastante da sintaxe, da forma em que estruturamos e a variedade que ela traz para as aplicações.
                </p>
                <li><img className="ItemSkills" src={Django} /></li>
                <p className="TextSkills">Em Django iniciei os meus estudos em meados do fim de 2023, tive a oportunidade de ter um curso ministrado por um aluno da minha faculdade
                e todo conhecimento é bem vindo. Tenho pouco domínio mas estou estudando e planejando projetos pessoais que possa colocar em prática essa ferramenta.
                </p>
                <li><img className="ItemSkills" src={DotNet} /></li>
                <p className="TextSkills">.Net juntamente com o C# é uma habilidade que comecei os estudos no início de 2023, uso diariamente no meu estágio e por ser uma plataforma 
                de aplicativos segura e confiável tive que me dedicar bastante para dominar bem.</p>
                <li><img className="ItemSkills" src={EntityFramework} /></li>
                <p className="TextSkills">Entity Framework me auxilia bastante no desenvolvimento em C# e .NET, meus estudos com esse Framework vieram um pouco após os meus estudos
                nas linguagens em que ele é usado, pois por opção minha optei por ter conhecimento correto da linguagem antes de começar a usar o Framework. Este foi a primeira biblioteca
                com que tive interação.
                </p>
                <li><img className="ItemSkills" src={Git} /></li>
                <p className="TextSkills">Git, logo após ingressar na faculdade já me foi apresentado o versionador de código e com isso me interessei pois facilitavam os trabalhos em grupo,
                já que na época estavámos em pandemia e não poderia acontecer encontros presenciais. Habilidade que mais tenho tempo de estudo e que está presente em todos os meus estudos
                e projetos desde 2021.</p>
                <li><img className="ItemSkills" src={Html5} /></li>
                <p className="TextSkills">HTML foi o primeiro contato que tive com desenvolvimento web, na faculdade utilizava-se para realizar desafios e projetos. Pelo fácil acesso de conteúdo 
                estudei bastante no ano de 2022 e desenvolvi alguns projetos pessoais utilizando a mesma.</p>
                <li><img className="ItemSkills" src={Css3} /></li>
                <p className="TextSkills">CSS, foi o primeiro contato que tive com estilização de desenvolvimento web, na faculdade foi ensinado junto com o HTML. 
                Estudei bastante no ano de 2022 e desenvolvi alguns projetos pessoais utilizando o mesmo juntamente com HTML.</p>
                <li><img className="ItemSkills" src={JS} /></li>
                <p className="TextSkills">Java Script logo após ter um certo conhecimento em HTML e CSS já fui instruído a começar os estudos e em plataformas de cursos fiz vários cursos, 
                utilizava a Udemy para o estudo e comecei a utilizar em projetos no estágio em 2023.
                </p>
                <li><img className="ItemSkills" src={Python} /></li>
                <p className="TextSkills">Python foi uma linguagem que tive como matéria na faculdade no meu primeiro semestre, tive o primeiro contato no ano de 2021 mas 
                os estudos ocorreram de maneira efetiva somente em 2023 quando ganhei um curso e tive interesse de me aprofundar, curso realizado no final de 2023.</p>
                <li><img className="ItemSkills" src={ReactLogo} /></li>
                <p className="TextSkills">Em ReactJS iniciei os meus estudos em meados do fim de 2023, tive a oportunidade de ter um curso ministrado por um aluno da minha faculdade
                e todo conhecimento é bem vindo. Tenho pouco domínio mas estou estudando e planejando projetos pessoais que possa colocar em prática essa ferramenta.</p>
                <li><img className="ItemSkills" src={SqlServer} /></li>
                <p className="TextSkills">Banco de Dados que utilizo no estágio e depois de conhecer não quis mais usar outro, banco de dados que sempre que tenho a oportunidade 
                recomendo e utilizo pois é ótimo em vários quesitos.</p>
            </ul>
        </Grid>
    );
}