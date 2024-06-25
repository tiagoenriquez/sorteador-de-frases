function InserirTextoPage() {
    const sorteadorController = new SorteadorController();

    /**
     * @type {HTMLElement[]}
     */
    const elements = [
        Heading('Cole um texto'),
        TextArea('texto', 24, 112, true),
        Button(sorteadorController.inserirTexto, 'Digitar separador')
    ];

    const page = Page();

    elements.forEach((element) => {
        page.appendChild(element);
    });
}