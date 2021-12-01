/*
NOV 30 PRACTICE

NORMAL FUNCTION
function functionName(){
}
functionName();

FUNCTION SAVED INTO VARIABLE
const functionName = function () {
}
functionName();

ARROW FUNCTION
const functionName = () => {};
functionName();
*/

const inputElement = (type, name, labelText) => { 
    return `
    <div>
        <label>${labelText}</label>
        <input type="${type}" name="${name}">
    </div>
    `;
}

const formElement = `
    <form id="form">
        ${inputElement('text', 'firstName', 'Keresztneved')}
        ${inputElement('file', 'profilePicture', 'Profilképed')}
        ${inputElement('email', 'personalEmail', 'Email címed')}
        ${inputElement('radio', 'newsletter', 'Hírlevelet szeretnél kapni')}
        ${inputElement('checkbox', 'terms', 'Elfogadod a felhasználási feltételeket')}
        <button>OK</button>
    </form>
`;

const formSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    event.target.classList.add('submitted');
}

const inputUpdate = (event) => {
    if(event.target.getAttribute('name') === 'firstName'){
        document.getElementById('inputValue').innerHTML = event.target.value;
    }
}

function loadEvent() {
    const root = document.getElementById('root');
    root.insertAdjacentHTML('afterbegin', formElement);
    root.insertAdjacentHTML('afterbegin', `
        <div id="inputValue"></div>
    `);

    const form = document.getElementById('form');
    form.addEventListener('submit', formSubmit);

    const inputList = form.querySelectorAll('input')

    for (const input of inputList) {
        input.addEventListener('input', inputUpdate)
    }
};

window.addEventListener('load', loadEvent);