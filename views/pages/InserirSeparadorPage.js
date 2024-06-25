/**
 * 
 * @param {Sorteador} sorteador 
 */
function InserirSeparadorPage(sorteador) {
    function inserirSeparador() {
        const sorteadorController = new SorteadorController();
        sorteadorController.inserirSeparador(sorteador);
    }

    /**
     * @type {HTMLElement[]}
     */
    const elements = [
        Heading('Digite um separador'),
        TextArea('separador', 2, 56, true),
        Button(inserirSeparador, 'Mostrar Frases')
    ];

    const page = Page();

    elements.forEach((element) => {
        page.appendChild(element);
    });
}