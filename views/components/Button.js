/**
 * 
 * @param {() => void} action 
 * @param {string} textContent 
 */
function Button(action, textContent) {
    const button = document.createElement('button');
    button.addEventListener('click', action);
    button.textContent = textContent;
    return button;
}