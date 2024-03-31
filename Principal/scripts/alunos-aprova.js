class alunosAprova extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode: 'open'});

        //criar div do aluno
        const cardAluno = document.createElement('div');
        cardAluno.classList.add('card-aluno');

        const fotoAluno = document.createElement('img');
        fotoAluno.src = this.getAttribute('src');

        const textoAluno = document.createElement('div');
        textoAluno.classList.add('texto-aluno');

        const nome = document.createElement('h3');
        nome.textContent = this.getAttribute('nome');

        const curso = document.createElement('p');
        curso.textContent = this.getAttribute('curso');

        const avaliacao = document.createElement('p');
        avaliacao.textContent = '"' + this.getAttribute('avaliacao') + '"';

        textoAluno.appendChild(nome);
        textoAluno.appendChild(curso);
        textoAluno.appendChild(avaliacao);

        cardAluno.appendChild(fotoAluno);
        cardAluno.appendChild(textoAluno);



        const style = document.createElement('style');
        style.textContent = `

            .card-aluno{
                position: relative; /* Adicionando posição relativa para o posicionamento absoluto do texto */
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-end; /* Alinhamento na parte inferior */
                width: 300px;
                height: 350px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                margin-left: 1rem;
            }

           .card-aluno img{
            max-width: 100%;
           }

           .texto-aluno{
            position: absolute; 
            bottom: 0;
            left: 0; 
            width: 100%; 
            background-color: #ff7000; 
            color: white;
            border-radius: 20px 20px 20px 20px; 
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: start;
           }
           .texto-aluno h3 {
            font-size: 20px;
            margin-left: 1rem;
            margin-top: 0.5rem;
            margin-bottom: 0;
           }

           .texto-aluno p{
            font-size: 13px;
            margin-left: 1rem;
            margin-top: 0;
            margin-bottom: 0.5rem;
            margin-right: 1rem
           }
          

            `






        shadow.appendChild(style);
        shadow.appendChild(cardAluno);


        

    }
}

customElements.define('alunos-aprova', alunosAprova);


// Clonar os alunos e adicioná-los ao final para criar o efeito infinito
const listaAlunos = document.querySelector('.lista-alunos');
const clones = listaAlunos.cloneNode(true);
listaAlunos.appendChild(clones);
