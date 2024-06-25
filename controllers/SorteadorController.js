class SorteadorController {
    /**
     * 
     * @param {Sorteador} sorteador 
     */
    cadastrarSeparador = (sorteador) => {
        InserirSeparadorPage(sorteador);
    }

    cadastrarTexto = () => {
        InserirTextoPage();
    }
    
    /**
     * 
     * @param {number} id 
     * @param {string} frase 
     * @param {Sorteador} sorteador 
     * @returns 
     */
    copiar = async (id, frase, sorteador) => {
        let statusDaCopia = null;

        await navigator.clipboard.writeText(frase).then(() => {
            const mensagem = 'Frase copiada com sucesso';
            const sucesso = true;
            statusDaCopia = new Status(mensagem, sucesso);
        }).catch ((error) => {
            const mensagem = `Erro na cópia da frase ${error}`;
            const sucesso = false;
            statusDaCopia = new Status(mensagem, sucesso);            
        }).finally(() => {
            FrasePage(id, frase, sorteador, statusDaCopia);
        });
    }

    /**
     * 
     * @param {Sorteador} sorteador 
     */
    inserirSeparador = (sorteador) => {
        /**
         * @type {HTMLTextAreaElement}
         */
        const separadorElement = document.getElementById('separador');

        const separador = separadorElement.value;
        sorteador.setSeparador(separador);
        this.sortear(sorteador);
    }

    inserirTexto = () => {
        /**
         * @type {HTMLTextAreaElement}
         */
        const textoElement = document.getElementById('texto');

        const texto = textoElement.value;
        const sorteador = new Sorteador(texto);
        this.cadastrarSeparador(sorteador);
    }

    /**
     * 
     * @param {number} id 
     * @param {Sorteador} sorteador 
     */
    mostrarFrase = (id, sorteador) => {
        const frase = sorteador.getFrase(id);
        FrasePage(id, frase, sorteador, null);
    }

    /**
     * 
     * @param {Sorteador} sorteador 
     */
    sortear = (sorteador) => {
        sorteador.sortear();
        const id = 0;
        this.mostrarFrase(id, sorteador);
    }
}