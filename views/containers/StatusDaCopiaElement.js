/**
 * 
 * @param {string} mensagem 
 * @param {boolean} sucesso 
 * @param {() => void} fechar 
 * @returns {HTMLDivElement}
 */
function StatusDaCopiaElement(mensagem, sucesso, fechar) {
    const container = document.createElement('div');
    const id = sucesso ? 'sucesso' : 'erro';
    container.id = id;
    container.appendChild(Paragraph(mensagem, `mensagem-de-${id}`));
    container.appendChild(Button(fechar, 'X'));
    return container;
}