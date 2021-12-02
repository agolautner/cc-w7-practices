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

const inputElement = (type, name, labelText, req = '') => { 
    return `
    <div id="${name}InputDiv" class="${type}">
        <label for="${name}">${labelText}</label>
        <input type="${type}" name="${name}" ${req}>
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
    <div id="${name}InputDiv">
        <label for="${name}">${labelText}</label>
        <${type} name="${name}">
            ${optionsToSelect}
        </${type}>
    </div>
    `;
}

const nameData = {
    type: 'text',
    name: 'firstName',
    label: 'Keresztneved'
};

const anotherFormFields = [
    {
        type: 'text',
        name: 'street',
        label: 'Közterület neve'
    },
    {
        type: 'number',
        name: 'houseNumber',
        label: 'Házszám'
    },
    {
        type: 'number',
        name: 'zipCode',
        label: 'Irányítószám'
    },
    {
        type: 'text',
        name: 'city',
        label: 'Település neve'
    }
];

const formFields = [
    {
        type: 'text',
        name: 'firstName',
        label: 'Keresztneved'
    },
    {
        type: 'email',
        name: 'personalEmail',
        label: 'Email címed',
        req: 'required'
    },
    {
        type: 'file',
        name: 'profilePicture',
        label: 'Profilképed'
    },
    {
        type: 'checkbox',
        name: 'newsletter',
        label: 'Szeretnék feliratkozni a hírlevélre.'
    },
    {
        type: 'checkbox',
        name: 'terms',
        label: 'Megismertem és elfogadom a felhasználási feltételeket, valamint az adatkezelési tájékozatót.'
    }
];

/* const formElement = `
    <form id="form">
        ${inputElement(nameData.type, nameData.name, nameData.label)}
        ${inputElement('email', 'personalEmail', 'Email címed', 'required')}
        ${inputElement('file', 'profilePicture', 'Profilképed')}
        ${inputElement('radio', 'newsletter', 'Szeretnék feliratkozni a hírlevélre.')}
        ${inputElement('checkbox', 'terms', 'Megismertem és elfogadom a felhasználási feltételeket, valamint az adatkezelési tájékozatót.')}
        ${selectElement('select', 'where', 'Hol hallottál rólunk?', ['interneten','ismerőstől', 'egyéb'])}
        <button>OK</button>
    </form>
`; */

const formElement = (ffs, id) => {
    let inputs = '';
    for (const ff of ffs) {
        inputs += inputElement(ff.type, ff.name, ff.label, ff.req)
    };
    return `
    <form id="${id}">
        ${inputs}
        ${selectElement('select', 'where', 'Hol hallottál rólunk?', ['interneten','ismerőstől', 'egyéb'])}
        <button>OK</button>
    </form>
    `;
}

const formSubmit = (event) => {
    event.preventDefault();
    const et = event.target;
    console.log(et);
    et.classList.add('submitted');
    let selectValue = et.querySelector(`select[name='where']`).value;
    console.log(selectValue);
}

const inputUpdate = (event) => {
    /* if(event.target.getAttribute('name') === 'firstName'){
        console.log(event.target);
        document.getElementById('inputValue').innerHTML = event.target.value;
    } */

    if(event.target.getAttribute('name') === 'profilePicture'){
        console.log(event.target.files[0]);
        const image = URL.createObjectURL(event.target.files[0]);
        document.getElementById('inputValue').insertAdjacentHTML('beforeend', `<img src="${image}">`);
    }

    console.log(event.target.closest('#form'));
}

function loadEvent() {
    const root = document.getElementById('root');
    root.insertAdjacentHTML('afterbegin', formElement(formFields, 'form'));
    // root.insertAdjacentHTML('afterbegin', formElement(anotherFormFields, 'form2'));
    root.insertAdjacentHTML('afterbegin', headingElement);
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