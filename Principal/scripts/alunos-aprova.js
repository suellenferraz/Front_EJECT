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



//clones da lista de alunos

// Selecionar a lista de alunos original
const listaAlunosOriginal = document.querySelector('.lista-alunos');

// Função para clonar e adicionar os alunos ao final da lista de forma contínua
function adicionarClonesContinuamente() {
    // Clonar a lista de alunos
    const clones = listaAlunosOriginal.cloneNode(true);

    // Adicionar os clones ao final da lista de alunos original
    listaAlunosOriginal.parentNode.appendChild(clones);

    // Agendar a próxima adição de clones
    setTimeout(adicionarClonesContinuamente, 1000); // ajuste o tempo conforme necessário
}

// Iniciar o processo de adição contínua de clones
adicionarClonesContinuamente();

