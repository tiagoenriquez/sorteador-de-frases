/**
 * 
 * @param {string} id 
 * @param {number} rows 
 * @param {number} cols 
 * @param {boolean} autofocus 
 * @returns {HTMLTextAreaElement}
 */
function TextArea(id, rows, cols, autofocus) {
    const textArea = document.createElement('textarea');
    textArea.rows = rows;
    textArea.cols = cols;
    textArea.id = id;
    textArea.autofocus = autofocus;
    return textArea;
}