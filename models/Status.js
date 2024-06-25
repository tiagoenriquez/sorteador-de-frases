class Status {
    /**
     * @type {string}
     * @private
     */
    mensagem;

    /**
     * @type {boolean}
     * @private
     */
    sucesso;

    /**
     * 
     * @param {string} mensagem 
     * @param {boolean} sucesso 
     */
    constructor(mensagem, sucesso) {
        this.mensagem = mensagem;
        this.sucesso = sucesso;
    }

    /**
     * @returns {string}
     */
    getMensagem = () => {
        return this.mensagem;
    }

    /**
     * @returns {boolean}
     */
    isSucesso = () => {
        return this.sucesso;
    }
}