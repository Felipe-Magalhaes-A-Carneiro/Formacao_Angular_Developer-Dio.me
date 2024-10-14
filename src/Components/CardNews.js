//Versão 2.0 - Profissional

class Cardnews extends HTMLElement{
    constructor(){
        super()

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());

    }

    build(){
        //Obs.: ao invés de usarmos 'card', o termo 'componentRoot' está sendo declarado, pois é costume ser usado como conceito de primeiro, ou pai, ou principal, aquele que começa algo como árvore principal.
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        //criando a classe 'card_left':
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        //Criando a 'span', 'a', 'p':
        const author = document.createElement("span");
        author.textContent = "By " + (this.getAttribute("author") || "Anonymous. ");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url")

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");
        
        cardLeft.appendChild(author);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        //Criando a classe 'card_right':
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        //Criando o 'img' para o 'card_right':
        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "/assets/image-defaut.png";
        newsImage.alt = "Foto da notícia."
        cardRight.appendChild(newsImage);

        //Atribuindo os 'cardLeft' e 'cardRight' como 'child' do 'componentRoot': 
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }
    styles(){

    }
}

customElements.define("card-news", Cardnews)