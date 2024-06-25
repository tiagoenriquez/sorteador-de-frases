/**
 * 
 * @param {string} textContent 
 * @returns {HTMLHeadingElement}
 */
function Heading(textContent) {
    const heading = document.createElement('h1');
    heading.textContent = textContent;
    return heading;
}