class cursosPopulares extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode: 'open'});


        //Critar div do curso
        const curso = document.createElement('div');
        curso.classList.add('curso');

        const fotoCurso = document.createElement('img');
        fotoCurso.src = this.getAttribute('src');


        //linha dotitulo
        const titulo = document.createElement('div');
        titulo.classList.add('titulo');

        const tituloCurso = document.createElement('h3');
        tituloCurso.textContent = this.getAttribute('titulo');

        const avaliacao = document.createElement('p');
        avaliacao.textContent = '⭐'+'('+this.getAttribute('avaliacao')+')';

        titulo.appendChild(tituloCurso);
        titulo.appendChild(avaliacao);



        const dadosCurso = document.createElement('p');
        dadosCurso.textContent = this.getAttribute('dados');
        dadosCurso.classList.add('dados');

        const informacaoCurso = document.createElement('p');
        informacaoCurso.textContent = this.getAttribute('informacao');

        const valorCurso = document.createElement('p');
        valorCurso.textContent = this.getAttribute('valor');

        const botaoVerMais = document.createElement('button');
        botaoVerMais.textContent = 'Ver mais';


        curso.appendChild(fotoCurso);
        curso.appendChild(titulo);
        curso.appendChild(dadosCurso);
        curso.appendChild(informacaoCurso);
        curso.appendChild(valorCurso);
        curso.appendChild(botaoVerMais);


        const style = document.createElement('style');
        style.textContent = `
            .curso{
                display: flex;
                flex-direction: column;
                padding: 1rem;
                margin: 1rem;
                width: 250px;
            }
            .curso img{
                max-width: 250px;
            }
            .curso h3{
                font-size: 15px;
                margin: 0.5rem 0;
            }
            .curso p{
                font-size: 12px;
                margin: 0.5rem 0;
            }
            .titulo{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            .dados p{
                font-size: 18px;
            }
        `


        shadow.appendChild(style);
        shadow.appendChild(curso);
}
}

customElements.define('cursos-populares', cursosPopulares);