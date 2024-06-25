class Sorteador {
    /**
     * @type {string[]}
     * @private
     */
    frases;

    /**
     * @type {string}
     * @private
     */
    separador;

    /**
     * @type {string}
     * @private
     */
    texto;

    /**
     * 
     * @param {string} texto 
     */
    constructor(texto) {
        this.texto = texto;
    }

    /**
     * 
     * @param {number} id 
     * @returns {string}
     */
    getFrase = (id) => {
        return this.frases[id];
    }

    /**
     * 
     * @param {string} separador 
     */
    setSeparador = (separador) => {
        this.separador = separador;
    }

    sortear = () => {
        /**
         * @type {string[]}
         */
        this.frases = [];

        const frases = this.texto.split(this.separador);
        for (let i = 0; i < 20; i++) {
            let frase = '';
            while (frase === '') {
                frase = frases[Math.floor(Math.random() * frases.length)];
            }
            this.frases.push(frase);
        }
    }
}