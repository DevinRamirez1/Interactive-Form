//variables
const nameFocus = document.getElementById('name');
const jobRoleList = document.getElementById('title');
const jobRoleOther = document.getElementById('other-job-role');
const colorSelection = document.getElementById('color');
const shirtDesign = document.getElementById('design');

// .focus to put focus on the name field when page is loaded
nameFocus.focus();

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

colorSelection.disabled = true;

shirtDesign.addEventListener('change', () => {
    colorSelection.disabled = false;    
    let colorOptions = colorSelection.option;


    if (shirtDesign.value === "js puns"){

        colorOptions = document.querySelectorAll('option, [data-theme*="js puns"]');
        colorOptions[0].selected = true;
        for (let i = 0; i <= colorOptions.length; i++){
        colorOptions[i];
    }
    } else {

        colorOptions = document.querySelectorAll('option, [data-theme*="heart js"]');
        colorOptions[0].selected = true;
        for (let i = 0; i <= colorOptions.length; i++){
        colorOptions[i];
        }
    }
})
