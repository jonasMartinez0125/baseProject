// selectors
const year = document.querySelector('#year');

addEventListeners();

// functions
function addEventListeners() {
    document.addEventListener('DOMContentLoaded', () => {
        currentYear();
    });
}

function currentYear() {
    let date = new Date();
    year.textContent = date.getFullYear();
}