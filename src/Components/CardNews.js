//Criando uma tag HTML: Um card modelo com 'Programação orientada a objetos (POO)'.

class CardNews extends HTMLElement{
    //O primeiro método a se executar sempre é o 'constructor'.
    constructor(){
        // 'super' é para invocar o método 'constructor' de quem ele está herdando.
        super();

        //Criando a 'Shadow D.O.M. (Document Object Model)'
        const shadow = this.attachShadow({mode: "open"});
        //Retornando dentro do 'shadow'algo de HTML:
        shadow.innerHTML = "<h1>Hello Word!</h1>";
    }
}

// Utilizando o método 'define' para definir qual elemento 
customElements.define('card-news', CardNews)