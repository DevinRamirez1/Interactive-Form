//variable for form
const form = document.querySelector('form');
const submit = document.querySelector('button[type="submit"]');
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
    let clicked = e.target
    let clickedCost = clicked.getAttribute('data-cost');
    let clickedDateTime = clicked.getAttribute('data-day-and-time');
    let totalCost = 0;

    for (let i = 0; i < activityCheckbox.length; i ++){
        let checkBoxes = activityCheckbox[i];
        let checkBoxesDateTime = activityCheckbox[i].getAttribute('data-day-and-time');
    if (checkBoxes.checked){
        totalCost += Number(clickedCost);
        
    }  
}
(e.target.checked) ? activityTotal++ : activityTotal--;
document.getElementById('activities-cost').textContent = `Total: $${totalCost}`;
console.log(activityTotal);
console.log(totalCost);
console.log(clickedCost);
});



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
    const emailValue = nameInput.value;
    const emailValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
    return emailValid;
};

const activityValidator = () => {
    const activityValid = activityTotal > 0
    return activityValid;
};

const creditCardValidator = () => {
    const creditCardValue = creditCard.value;
    const creditCardValid = /^[\d]{13,16}$/.test(creditCardValue);
    const zipCodeValue = zipCode.value;
    const zipCodeValid = /^[\d]{5}$/.test(zipCodeValue);
    const cvvValue = cvvNumber.value;
    const cvvValid = /^[\d]{3}$/.test(cvvValue);
};

//submit eventlistener
submit.addEventListener('click', () => {
    nameValidator();
    emailValidator();
    activityValidator();
    creditCardValidator();

    if (!nameValidator()) {
        e.preventDefault();
      }
      if (!emailValidator()) {
        e.preventDefault();
      }
      if (!activityValidator()) {
        e.preventDefault();
      }
      //if (!creditCardValidator()) {
       // e.preventDefault();
     // }
});