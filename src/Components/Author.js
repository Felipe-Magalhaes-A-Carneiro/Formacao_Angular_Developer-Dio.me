class Author extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        //base do component 'author'
        const componentRoot = document.createElement("span");
        componentRoot.textContent = this.getAttribute("author");

        //estilizar o componente
        const style = document.createElement("style");
        style.textContent = `
            span{
                color: gray;
            }   
        `;

        //enviar para o shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define("author-dinamico", Author);