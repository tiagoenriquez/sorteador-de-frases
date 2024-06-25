/**
 * @returns {HTMLBodyElement}
 */
function Page() {
    const page = document.getElementsByTagName('body')[0];
    page.innerHTML = '';
    return page;
}