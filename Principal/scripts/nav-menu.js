class NavMenu extends HTMLElement {

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // Criar elementos do menu
        const nav = document.createElement('nav');
        nav.classList.add('nav');
        

        // adicionar a logo
        
        const logo = document.createElement('img');
        logo.src =this.getAttribute('src')

        //linha de divisão
        const linhaVertical = document.createElement('div');
        linhaVertical.classList.add('linha-vertical');


        nav.appendChild(logo);
        nav.appendChild(linhaVertical);
 
        const menu = document.createElement('ul');
        menu.classList.add('nav-menu');

        const navItems = [
            { text: 'HOME', link: '/home' },
            { text: 'SOBRE', link: '/sobre' },
            { text: 'CURSOS', link: '/cursos' },
            { text: 'BLOG', link: '/blog' },
            { text: 'CONTATO', link: '/contato' }
        ];

        navItems.forEach(item => {
            

            const li = document.createElement('li');
            const link = document.createElement('a');
           
            link.href = item.link; 
            link.textContent = item.text;
            li.appendChild(link);
            menu.appendChild(li);
            
        });
        
                const style = document.createElement('style');
                style.textContent = `
                .linha-vertical {
                    width: 2.5rem;
                    height: 0px;
                    margin: 0;
                    border: 2px solid #262626;
                    transform: rotate(-90deg);
                    margin-right:0;
                    
                }


                    .nav-logo{  
                        width: 6rem;
                        height: 2.5rem;
                        
                    }
                    .nav {
                        margin-top: 1rem;
                        margin-left: 3rem;
                        background-color: #fff;
                        color: #000;
                        padding: 10px;
                        display: flex;
                        align-items: center;
                        flex-direction: row;
                    }
                    .nav-menu {
                        display: flex;
                        justify-content: space-around;
                        list-style: none;
                        padding: 0;
                        justify-content: center;
                        align-items: center;
                        margin-left: 0;
                       
                    }
                    
                    .nav-menu li {
                        padding: 0 10px;
                        

                        font-family: 'Montserrat';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 20px;
                        /* identical to box height */
                        letter-spacing: 0.075em;

                        color: #262626;


                        /* Inside auto layout */
                        flex: none;
                        order: 1;
                        flex-grow: 0;

                                                

                    }
                    .nav-menu a {
                        color: #000;
                        text-decoration: none;
                    }
                `;

        nav.appendChild(menu);
        shadow.appendChild(nav);
        shadow.appendChild(style);
    }

}

// Adicionando o menu ao DOM.
customElements.define('nav-menu', NavMenu);


