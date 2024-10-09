class TituloDinamico extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});

        //base do component
        const componentRoot = document.createElement("h1");
        //Criando a propriedade da base do component
        componentRoot.textContent = this.getAttribute("titulo");

        //estilizar o component
        const style = document.createElement("style");
        style.textContent = `
            h1{
                color: red;
            }
        `;
        //enviar para a shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);

    }
}

//sempre utilize o hifem ' - ' para que seja devidamente reconhecido o seu seletor
customElements.define("titulo-dinamico", TituloDinamico);