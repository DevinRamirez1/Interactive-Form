//variable for form
const form = document.querySelector('form');
const submit = document.querySelector('button[type="submit"]');
const emailInput = document.getElementById('email');

//variable for namefocus
const nameInput = document.getElementById('name');

//variables for job role
const jobRoleList = document.getElementById('title');
const jobRoleOther = document.getElementById('other-job-role');

//variables for shirt design, disable selection box
const colorSelection = document.getElementById('color');
const shirtDesign = document.getElementById('design');
let designOptions = colorSelection.querySelectorAll('option')
colorSelection.disabled = true;

//activity selection variables
const activityOptions = document.getElementById('activities');
const activityCheckbox = document.querySelectorAll('.activities input');
const totalCostParagraph = document.getElementById('activites-cost');

//variables for payment
const paymentOptions = document.getElementById('payment');
const creditCard = paymentOptions.querySelector(`option[value="credit-card"]`)
const creditCardField = document.getElementById('credit-card');
const creditCardNum = document.getElementById('cc-num');
const paypal = document.querySelector('#paypal');
const bitcoin = document.querySelector('#bitcoin');

//form validation variable
const zipCode = document.getElementById('zip');
const cvvNumber = document.getElementById('cvv');
let activityTotal = 0

//setting credit card as default choice and hiding other options
creditCard.selected = 'true';
paypal.style.display = 'none';
bitcoin.style.display = 'none';

// .focus to put focus on the name field when page is loaded
nameInput.focus();

//hide other job textbox upon loading page
jobRoleOther.style.display = 'none';

//valid input function
const inputValid = (input) => {
    input.parentElement.className = 'valid';
    input.parentElement.className.remove = 'not-valid';
    input.parentElement.lastElementChild.style.display = 'none';
}

//not valid function
const inputNotValid = (input) => {
    input.parentElement.className = 'not-valid';
    input.parentElement.className.remove = 'valid';
    input.parentElement.lastElementChild.style.display = 'block';
}

//event listener for 'other' selection
jobRoleList.addEventListener('change', () => {
    if (jobRoleList.value === 'other'){
        jobRoleOther.style.display = 'block';
    } else {
        jobRoleOther.style.display = 'none';
    }

});


// event listener for selecting shirt design
shirtDesign.addEventListener('change', (e) =>{

    colorSelection.disabled = false;
    for (let i = 0; i < designOptions.length; i++){
        designOptions[i].hidden = true;
    
    }

    if (shirtDesign.value === "js puns") {
        designOptions = colorSelection.querySelectorAll('[data-theme="js puns"]');
        designOptions[0].selected = true
        for (let i = 0; i < designOptions.length; i++){
            designOptions[i].hidden = false;
        }
    } else {
        designOptions = colorSelection.querySelectorAll('[data-theme="heart js"]');
        designOptions[0].selected = true
        for (let i = 0; i < designOptions.length; i++){
            designOptions[i].hidden = false;
    }
}

});


//event listenver for activity selection
activityOptions.addEventListener('change', e => {
    let totalCost = 0;
    let clicked = e.target;
    let selectedTime = clicked.getAttribute('data-day-and-time');

    for (let i = 0; i < activityCheckbox.length; i ++){
        let checkBoxes = activityCheckbox[i];
        let dayAndTime = activityCheckbox[i].getAttribute('data-day-and-time');
    if (dayAndTime === selectedTime){
        checkBoxes.disabled = true;
        clicked.disabled = false;
    }
    if (checkBoxes.checked){
        totalCost += parseInt(checkBoxes.getAttribute('data-cost'));
    }  
    if (clicked != clicked.checked){
        if (dayAndTime === selectedTime){
            checkBoxes.disabled = false;
            clicked.disabled = false;
        }
    }
}
(e.target.checked) ? activityTotal++ : activityTotal--;
document.getElementById('activities-cost').textContent = `Total: $${totalCost}`;

});

for (let i = 0; i < activityCheckbox.length; i++) {
    activityCheckbox[i].addEventListener('focus', e => {
     e.target.parentElement.className = 'focus';
    });

    activityCheckbox[i].addEventListener('blur', e => {
        e.target.parentElement.classList.remove('focus');
    });
};   

//event listener for payment options
paymentOptions.addEventListener('change', e =>{
    let paymentChoice = e.target;

    if (paymentChoice.value === 'bitcoin'){
        bitcoin.style.display = 'block';
        paypal.style.display = 'none';
        creditCardField.style.display = 'none';
    }
    if (paymentChoice.value === 'paypal'){
        bitcoin.style.display = 'none';
        paypal.style.display = 'block';
        creditCardField.style.display = 'none';
    }
    if (paymentChoice.value === 'credit-card'){
        bitcoin.style.display = 'none';
        paypal.style.display = 'none';
        creditCardField.style.display = 'block';
    }
});



//helper functions for form validation
const nameValidator = () => {
    const nameValue = nameInput.value;
    const nameValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue);
    return nameValid;
};

const emailValidator = () => {
    const emailValue = emailInput.value;
    const emailValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
    return emailValid;
};

const activityValidator = () => {
    const activityValid = activityTotal > 0
    return activityValid;
};

const creditCardValidator = () => {
    const creditCardValue = creditCardNum.value;
    const creditCardValid = /^[\d]{13,16}$/.test(creditCardValue);
    return creditCardValid;
};

const zipValidator = () => {
    const zipCodeValue = zipCode.value;
    const zipCodeValid = /^[\d]{5}$/.test(zipCodeValue);
    return zipCodeValid;
}

const cvvValidator = () => {
    const cvvValue = cvvNumber.value;
    const cvvValid = /^[\d]{3}$/.test(cvvValue);
    return cvvValid
}

//submit eventlistener
form.addEventListener('submit', e => {

    if (!nameValidator()) {
        e.preventDefault();
        nameInput.parentElement.className = 'not-valid';
        nameInput.parentElement.className.remove = 'valid';
        if (nameInput.value === ''){
        nameInput.parentElement.lastElementChild.innerHTML = 'Name field cannot be blank';
        nameInput.parentElement.lastElementChild.style.display = 'block';
        } else {
            nameInput.parentElement.lastElementChild.innerHTML = 'Cannot include numbers or special symbols';
            nameInput.parentElement.lastElementChild.style.display = 'block';
        }
    } else {
        nameValidator();
        inputValid(nameInput);
    }

    if (!emailValidator()) {
        e.preventDefault();
        inputNotValid(emailInput);
    } else {
        emailValidator();
        inputValid(emailInput);
    }

    if (!activityValidator()) {
        e.preventDefault();
        activityOptions.className = 'not-valid';
        activityOptions.className.remove = 'valid';
        activityOptions.lastElementChild.style.display = 'block';
    } else {
        activityValidator();
        activityOptions.className = 'valid';
        activityOptions.className.remove = 'not-valid';
        activityOptions.lastElementChild.style.display = 'none';

    }

    if (paymentOptions.value === 'credit-card') {
        if (!creditCardValidator()) {
            e.preventDefault();
            inputNotValid(creditCardNum);
        } else {
            creditCardValidator();
            inputValid(creditCardNum);
        }
        if (!zipValidator()) {
            e.preventDefault();
            inputNotValid(zipCode);
        } else {
            zipValidator();
            inputValid(zipCode);
        }  
        if (!cvvValidator()) {
            e.preventDefault();
            inputNotValid(cvvNumber);
        } else {
            cvvValidator();
            inputValid(cvvNumber);
        }
    }
    
});

//real time validation for credit card info
if (paymentOptions.value === 'credit-card') {
creditCardField.addEventListener('keyup', (e) => {
    if (!creditCardValidator()) {
        e.preventDefault();
        inputNotValid(creditCardNum);
    } else {
        creditCardValidator();
        inputValid(creditCardNum);
    }
    if (!zipValidator()) {
        e.preventDefault();
        inputNotValid(zipCode);
    } else {
        zipValidator();
        inputValid(zipCode);
    }  
    if (!cvvValidator()) {
        e.preventDefault();
        inputNotValid(cvvNumber);
    } else {
        cvvValidator();
        inputValid(cvvNumber);
    }
 });
}