/**
 * 
 * @param {HTMLButtonElement[]} buttons 
 * @returns {HTMLDivElement}
 */
function Buttons(buttons) {
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'buttons';

    buttons.forEach((button) => {
        buttonsContainer.appendChild(button);
    });

    return buttonsContainer;
}