class Footer extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode: 'open'});

        //Criar o elemento footer
        const footer = document.createElement('footer');
        footer.classList.add('footer');
        footer.setAttribute('name', 'footer');
        const colunasFooter = document.createElement('div');
        colunasFooter.classList.add('colunas-footer');

        //adicionanr a logo
        const logo = document.createElement('img');
        logo.classList.add('footer-logo');
        logo.src = this.getAttribute('src');


        footer.appendChild(logo);


        const entreEmContato = document.createElement('h3');
        entreEmContato.textContent = 'Entre em contato';
        entreEmContato.classList.add('entre-em-contato');

        //primeira coluna (Entre em contato)
        const contato = document.createElement('ul');
        contato.classList.add('contato');


        contato.appendChild(entreEmContato);

        const itensContato = [
            'contato@manicursos.com.br',
            '+1-2345-6789',
            '23 Cornelia St, NY 10014, EUA'];

        itensContato.forEach(item => {

            const li = document.createElement('li');

            li.textContent = item;
            contato.appendChild(li);
            

        });


        
        // const redesSociais = document.createElement('img');
        // redesSociais.classList.add('redes-sociais');
        // redesSociais.src = this.getAttribute('srcRedesSociais');


        // contato.appendChild(redesSociais);


        //segunda coluna (FAQ)
        const faq = document.createElement('ul');
        faq.classList.add('faq');


        const textoFaq = document.createElement('h3');
        textoFaq.textContent = 'FAQ';
        textoFaq.classList.add('textoFaq');

        faq.appendChild(textoFaq);

        const itensFaq = [
            'Auctor volutpat.',
            'Fermentum turpis.',
            'Mi consequat.',
            'Amet venenatis.',
            'Convallis porttitor.'
        ];

        itensFaq.forEach(item => {
            const li = document.createElement('li');

            li.textContent = item;
            faq.appendChild(li);

        });

        const centralDeAjuda = document.createElement('ul');
        centralDeAjuda.classList.add('central-de-ajuda');


        const textoCentralAjuda= document.createElement('h3');
        textoCentralAjuda.textContent = 'Central de Ajuda';
        textoCentralAjuda.classList.add('texto-central-ajuda');

        centralDeAjuda.appendChild(textoCentralAjuda);


        const itensCentral = [
            'Egestas vitae.',
            'Vivera lorem ac.',
            'Eget ac tellus',
            'Erat nulla',
            'Vulputate proin.'
        ]

        itensCentral.forEach(item => {
            const li = document.createElement('li');

            li.textContent = item;
            centralDeAjuda.appendChild(li);
        });
       

        const copyright = document.createElement('p');
        copyright.textContent = 'Copyright © 2023. All rights reserved.';
        copyright.classList.add('copyrigth');
     
        



        const style = document.createElement('style');
        style.textContent = `
        .footer {
            background: #FF7000;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: start;
            bottom: 0;
            width: 100%;
        }
        .colunas-footer {
            display: flex;
            width: 100%;
            justify-content: space-between;
        }
        .contato {
            display: flex;
            flex-direction: column;
            list-style: none;
            padding: 0;
            margin-left: 6rem;
            width: 10rem;
        }
        .contato li {
            margin-bottom: 0.3rem;
        }
        .faq { 
            display: flex;
            flex-direction: column;
            list-style: none;
            padding: 0;
            margin: 0;
            width: 10rem;
        }
        .central-de-ajuda {
            display: flex;
            flex-direction: column;
            list-style: none;
            padding: 0;
            margin-right: 6rem;
           width: 10rem;
        }

        .footer-logo{  
            margin-top: 1rem;
            margin-left: 6rem;
            margin-bottom: 1rem;
            width: 6rem;
            height: 2.5rem;
            
        }
        .entre-em-contato, .textoFaq , .texto-central-ajuda {

            font-family: 'Montserrat';
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 24px;

        }
     

        ul{
            padding: 0;
            margin: 0;
            display: flex;
            
        }
       
        .copyrigth {
            margin-left: 6rem;
            margin-top: 3rem;
            

            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;

            color: #262626;    
        }
       

        `;
        
        colunasFooter.appendChild(contato);
        colunasFooter.appendChild(faq);
        colunasFooter.appendChild(centralDeAjuda);
        footer.appendChild(colunasFooter);
        footer.appendChild(copyright);
        shadow.appendChild(style);
        shadow.appendChild(footer);


    }

        



}

customElements.define('footer-tag', Footer);

