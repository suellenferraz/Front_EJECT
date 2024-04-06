class todosCursos extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode: 'open'});


        //Critar div do curso
        const curso = document.createElement('div');
        curso.classList.add('curso');

        const fotoCurso = document.createElement('img');
        fotoCurso.src = this.getAttribute('src');

        const titulo = document.createElement('h3');
        titulo.textContent = this.getAttribute('titulo');

        const dadosCurso = document.createElement('p');
        dadosCurso.textContent = this.getAttribute('dados');
        dadosCurso.classList.add('dados');

        //Detalhes do curso
        const detalhes = document.createElement('div');
        detalhes.classList.add('detalhes');

        const maisDetalhes = document.createElement('p');
        maisDetalhes.textContent = 'Mais detalhes ';

        const setaParaBaixo = document.createElement('span');
        setaParaBaixo.innerHTML = '&#9660;'; // Código HTML da seta para baixo

        maisDetalhes.appendChild(setaParaBaixo);

        const avaliacao = document.createElement('p');
        avaliacao.textContent = '⭐'+'('+this.getAttribute('avaliacao')+')';


        detalhes.appendChild(maisDetalhes);
        detalhes.appendChild(avaliacao);

        // valores
        const linhaValores = document.createElement('div');
        linhaValores.classList.add('linhaValores');

        const valorCurso = document.createElement('div');
        valorCurso.classList.add('valor');

        const valorParcela = document.createElement('p');
        valorParcela.textContent = this.getAttribute('valorParcela');

        const valorAVista = document.createElement('span');
        valorAVista.classList.add('valorAVista');
        valorAVista.textContent = 'ou ' + this.getAttribute
        ('valorAVista') + ' à vista';

        
        valorCurso.appendChild(valorParcela);
        valorCurso.appendChild(valorAVista);
        linhaValores.appendChild(valorCurso);

        const botaoVerMais = document.createElement('button');
        botaoVerMais.classList.add('botaoVerMais');
        botaoVerMais.textContent = 'Ver mais';

        linhaValores.appendChild(botaoVerMais);


        curso.appendChild(fotoCurso);
        curso.appendChild(titulo);
        curso.appendChild(dadosCurso);
        curso.appendChild(detalhes);
        curso.appendChild(linhaValores);


        const style = document.createElement('style');
        style.textContent = `
            .curso{
                display: flex;
                flex-direction: column;
                padding: 1rem;
                margin: 1rem;
                width: 12rem;
            }
            .curso img{
                max-width: 250px;
            }
            .curso h3{
              font-size: 1.25rem;
              margin: 0.5rem 0;
          }

          .curso p{
            font-size: 10px;
        }

        .detalhes{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          text-align: center;
        }
        .linhaValores{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;

        }
        .botaoVerMais{
          background-color: #FF7000;
          width: 40%;
          height: 35px;
          border: none;
          color: white;

          border-radius: 50px;

          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 16px;
          cursor: pointer;
        }

        .botaoVerMais:active{
          transform: translateY(2px);
        }

          .valorAVista{
              
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: 400;
              font-size: 11px;
              line-height: 18px;
              
              color: #787878;
              margin-bottom: 0px;
          }
          .valor{
              display: flex;
              justify-content: center;
              flex-direction: column;
              align-items: start;
          }
          .valor p{
              margin: 0;
          }
          .dados{
              margin: 0px;
          }
        .linhaValores{
          margin-top: 1rem;
        }
`
        
        shadow.appendChild(curso);
        shadow.appendChild(style);
}
}

customElements.define('todos-cursos', todosCursos);



