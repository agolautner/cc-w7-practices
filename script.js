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
const headingElement = `
    <div id="heading-div">
        <h1>REGISZTRÁCIÓ</h1>
    </div>
`;

const inputElement = (type, name, labelText) => { 
    return `
    <div>
        <label>${labelText}</label>
        <input type="${type}" name="${name}">
    </div>
    `;
}
const selectElement = (type, name, labelText, options) => { 
    let optionsToSelect = '';
    for (const option of options) {
        optionsToSelect += `
            <option value="${option}">
                ${option}
            </option>
        `
    }

    return `
    <div>
        <label>${labelText}</label>
        <${type} name="${name}">
            ${optionsToSelect}
        </${type}>
    </div>
    `;
}

const formElement = `
    <form id="form">
        ${inputElement('text', 'firstName', 'Keresztneved')}
        ${inputElement('email', 'personalEmail', 'Email címed')}
        ${inputElement('file', 'profilePicture', 'Profilképed')}
        ${inputElement('radio', 'newsletter', 'Szeretnék feliratkozni a hírlevélre.')}
        ${inputElement('checkbox', 'terms', 'Megismertem és elfogadom a felhasználási feltételeket, valamint az adatkezelési tájékozatót.')}
        ${selectElement('select', 'where', 'Hol hallottál rólunk?', ['interneten','ismerőstől', 'egyéb'])}
        <button>OK</button>
    </form>
`;

const formSubmit = (event) => {
    event.preventDefault();
    const et = event.target;
    console.log(et);
    et.classList.add('submitted');
    let selectValue = et.querySelector(`select[name='where']`).value;
    console.log(selectValue);
}

const inputUpdate = (event) => {
    if(event.target.getAttribute('name') === 'firstName'){
        document.getElementById('inputValue').innerHTML = event.target.value;
    }

    console.log(event.target.closest('#form'));
}

function loadEvent() {
    const root = document.getElementById('root');
    root.insertAdjacentHTML('afterbegin', formElement);
    root.insertAdjacentHTML('afterbegin', headingElement);
    // root.insertAdjacentHTML('afterbegin', `
    //     <div id="inputValue"></div>
    // `);

    const form = document.getElementById('form');
    form.addEventListener('submit', formSubmit);

    const inputList = form.querySelectorAll('input')

    for (const input of inputList) {
        input.addEventListener('input', inputUpdate)
    }
};

window.addEventListener('load', loadEvent);