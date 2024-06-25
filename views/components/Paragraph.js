/**
 * 
 * @param {string} textContent 
 * @param {string} id 
 * @returns {HTMLParagraphElement}
 */
function Paragraph(textContent, id) {
    const paragraph = document.createElement('p');
    paragraph.textContent = textContent;
    paragraph.id = id;
    return paragraph;
}