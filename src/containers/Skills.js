import * as React from 'react';
import Grid from '@mui/material/Grid';
import CSharp from '../images/C-sharp.svg';
import CSS from '../images/CSS3.svg';
import Django from '../images/Django.svg';
import Git from '../images/Git.svg';
import HTML from '../images/HTML5.svg';
import SQLServer from '../images/SQLServer.svg';
import Python from '../images/Python.svg';
import ReactJS from '../images/ReactJS.svg';
import Javascipt from '../images/javascript.svg';

export default function Skills(){
    return(
        <Grid className="GridSkills">
            <h1 id="Skills">Skills</h1>
            <section>
                <div className="DivSkills">
                    <h1>CSHARP</h1>
                    <img src={CSharp} />
                    <p> Profissionalmente foi a primeira linguagem que tive contato, com ela aprimorei e aprofundei meus conhecimentos com cursos
                        sobre Programação Orientada a Objetos, Estrutura de sistemas, APIs REST e princípios SOLID. Através da mesma pude usar e aprender meus primeiros frameworks, .NET,
                        .NET Core, Entity Framework e outras vertentes como ASP .NET CORE.
                    </p>
                </div>
                <div className="DivSkills">
                    <h1>SQLServer</h1>
                    <img src={SQLServer} />
                    <p>Banco de dados que usei juntamente com o C#, tive a oportunidade de fazer cursos baseados neste banco de dados e com toda a facilidade 
                        e o costume rotineiro de trabalhar com o mesmo fez com o que se tornasse o meu preferido, a partir disso não só utilizando no profissional 
                        mas também no pessoal e acadêmico.
                    </p>
                </div>
                <div className="DivSkills">
                    <h1>Git</h1>
                    <img src={Git} />
                    <p> Linguagem de versionamento que aprendi na faculdade para desenvolvimento de trabalhos e projetos em grupo. Um certo tempo depois esse conhecimentos
                        foi aproveitado para a minha área profissional pois um dos requisitos era em especifíco a linguagem de versionamento Git para que compartilhamento
                        do código através da ferramenta GitLab.
                    </p>
                </div>
                <div className="DivSkills">
                    <h1>HTML</h1>
                    <img src={HTML} />
                    <p>HTML que me auxiliou no início da minha jornada por conta da certa facilidade da própria e por conseguir encontrar diversos cursos
                        e vídeos ensinando desde do básico. Foi algo que foi lecionado na faculdade e tive com a matéria Desenvolvimento Web nos meus primeiros semestres.
                    </p>
                </div>
                <div className="DivSkills">
                    <h1>CSS</h1>
                    <img src={CSS} />
                    <p>CSS aprendi com o HTML, pois em geral se aprende os dois de maneira conjunta e seguindo a mesma idéia do HTML temos diversos vídeos e cursos
                        o que estimula o conhecimento e o aprendizado. Foi algo que foi lecionado na faculdade e tive com a matéria Desenvolvimento Web nos meus primeiros semestres
                    </p>
                </div>
                <div className="DivSkills">
                    <h1>Python</h1>
                    <img src={Python} />
                    <p>Minha primeira linguagem de programação, antes de ter essa linguagem lecionada na faculdade nunca antes havia tido contato com linhas de códigos,
                        por ser uma linguagem com certa facilidade de ser compreendida e um menor grau de dificuldade na sintaxe pude ter ela bem no começo
                        da minha jornada, gostei bastante e fiz vários cursos e projetos. Após isso ganhei um curso para se aprender 
                        o Framework Django e tive um contato e uma atualização pois tinha algum tempo que não estudava sobre.
                    </p>
                </div>
                <div className="DivSkills">
                    <h1>Django</h1>
                    <img src={Django} />
                    <p>Framework em que eu ganhei um curso antes não tinha nada de conhecimento sobre mas após o curso me interessei e penso futuramente em desenvolver projetos utilizando
                        para que na prática adquira mais conhecimento e possa ter mais uma vertente de conhecimento.
                    </p>
                </div>
                <div className="DivSkills">
                    <h1>React JS</h1>
                    <img src={ReactJS} />
                    <p>Framework de Javascipt que aprendi e tive o primeiro contato no curso onde aprendi Django, foi algo que me chamou bastante atenção, tenho diversos projetos 
                        sendo desenvolvidos em React JS, inclusive o meu portfólio foi desenvolvido neste framework.
                    </p>
                </div>
                <div className="DivSkills">
                    <h1>Javascipt</h1>
                    <img src={Javascipt} />
                    <p>Linguagem que aprendi junto com o C#, me interessei bastante por ser uma linguagem que abrange várias vertentes, utilizo ela diariamente e 
                        conheço um Framework que me ajuda no desenvolvimento.
                    </p>
                </div>
            </section>
        </Grid>
    );
}