//variable for namefocus
const nameFocus = document.getElementById('name');
//variables for job role
const jobRoleList = document.getElementById('title');
const jobRoleOther = document.getElementById('other-job-role');
//variables for shirt design, disable selection box
const colorSelection = document.getElementById('color');
const shirtDesign = document.getElementById('design');
let designOptions = colorSelection.querySelectorAll('option')
colorSelection.disabled = true;


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


// event listener for selecting shirt design
shirtDesign.addEventListener('change', (e) =>{
    let design = e.target.value;
    colorSelection.disabled = false;
    for (let i = 0; i < designOptions.length; i++){
        designOptions[i].hidden = true;
    }


    if (design.value === "js puns") {
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