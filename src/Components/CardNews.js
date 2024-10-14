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
        const style = document.createElement("style");
        style.textContent = `
        
.card {
    width: 900px;
    border: 1px solid gray;
    display: flex;
    /*coloca a caixa direita e a esquerda em linha horizonal*/
    flex-direction: row;
    /* Se colocarm 'column' ao invés de 'row', voltará para vertical */
    /* cssmatic.com: box-shadow utilizado do site */
    -webkit-box-shadow: 10px 10px 5px 0px rgba(230, 230, 230, 1);
    -moz-box-shadow: 10px 10px 5px 0px rgba(230, 230, 230, 1);
    box-shadow: 10px 10px 5px 0px rgba(230, 230, 230, 1);
}



.card_left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
}

.card_left > span {
    font-weight: 400;
    margin-right: 40px;
}

.card_left > a {
    /* '>' você irá alterar apenas o elemento h1, segundo o exemplo*/
    margin-top: 15px;
    /* aumenta o espaçamento entre o título e nome do autor */
    font-size: 25px;
    color: black;
    text-decoration: none;
    font-weight: bold;
}

.card_left>p {
    color: gray;
}

.card_right {
    margin: 5px;
    margin-right: 5px;
}

        `
        return style;
    }
}

customElements.define("card-news", Cardnews)