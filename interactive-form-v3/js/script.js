//variables
const nameFocus = document.getElementById('name');
const jobRoleList = document.getElementById('title');
const jobRoleOther = document.getElementById('other-job-role');
const colorSelection = document.getElementById('color');

// .focus to put focus on the name field when page is loaded
nameFocus.focus();

//hide other job textbox upon loading page
jobRoleOther.style.display = "none";

//event listener for 'other' selection
jobRoleList.addEventListener("change", () => {
    if (jobRoleList.value === "other"){
        jobRoleOther.style.display = "block";
    } else {
        jobRoleOther.style.display = "none";
    }

});

colorSelection.style.display = 'none';


