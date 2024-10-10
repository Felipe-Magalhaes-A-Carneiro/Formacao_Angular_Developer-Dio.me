//Versão 2.0 - Profissional

class Cardnews extends HTMLElement{
    constructor(){
        super()

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());

    }

    build(){
        //Obs.: ao invés de usarmos 'card', o termo 'componentRoot' está sendo declarado, pois é costume ser usado como conceito de primeiro, ou pai, ou principal, aquele que começa algo.
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }
    styles(){

    }
}

customElements.define("card-news", Cardnews)