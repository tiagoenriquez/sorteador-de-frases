/**
 * 
 * @param {number} id 
 * @param {string} frase 
 * @param {Sorteador} sorteador 
 * @param {Status | null} status 
 */
function FrasePage(id, frase, sorteador, status) {
    const sorteadorController = new SorteadorController();
    let statusDaCopiaElement = null;

    function fechar() {
        const id = status.isSucesso() ? 'sucesso' : 'erro';
        const element = document.getElementById(id);
        element.innerHTML = '';
    }
    
    if (status === null) {
        statusDaCopiaElement = document.createElement('div');
    } else {
        const mensagem = status.getMensagem();
        const sucesso = status.isSucesso();
        statusDaCopiaElement = StatusDaCopiaElement(mensagem, sucesso, fechar);
    }

    async function copiar() {
        await sorteadorController.copiar(id, frase, sorteador);
    }

    function mostrarProximaFrase() {
        sorteadorController.mostrarFrase(id + 1, sorteador);
    }

    function sortearMais() {
        sorteadorController.sortear(sorteador);
    }

    const continuarButton = id < 19 ? Button(mostrarProximaFrase, 'Próxima Frase') : Button(sortearMais, 'Sortear mais frases');

    /**
     * @type {HTMLElement[]}
     */
    const elements = [
        Heading(`Frase ${id + 1}`),
        statusDaCopiaElement,
        Paragraph(frase, 'frase'),
        Buttons([
            continuarButton,
            Button(copiar, 'Copiar Frase'),
            Button(sorteadorController.cadastrarTexto, 'Resetar')
        ])
    ];

    const page = Page();

    elements.forEach((element) => {
        page.appendChild(element);
    });
}