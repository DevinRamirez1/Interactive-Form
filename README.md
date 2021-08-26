# Interactive Form
 Applying Javascript to a sign up form

##Installation
```bash
You can download program using https://github.com/DevinRamirez1/Interactive-Form
```
##Usage
```python
#adds javascript to registration form to make interactive.

nameInput.focus()
#puts focus on nameInput when page loads

jobRoleOther.style.display
#hides other role input until selected in dropdown box

inputValid()
#block of code to set inputs to valid and remove invalid

inputNotValid()
#block of code to set inputs to invalid and remove valid

nameValidator()
#code to validate nameInput

emailValidator()
#code to validate emailInput

activityValidator()
#code to validate activity selection amount

creditCardValidator()
#code to validate creditCardNum input

zipValidator()
#code to validate zipCode

cvvValidator()
#code to validate cvvNumber

jobRoleList.addEventListener
#listens for other job role option to display input

shirtDesign.addEventListener
#listens for shirt design selection to provide correct colors

activityOptions.addEventListener
#listens for activity selections, adds the cost together, disables selections with same date and time

paymentOptions.addEventListener
#listens for payment selection to display

creditCardField.addEventListener
#real time validator for credit card info

form.addEventListener
#validates form when submitted, inside this listener the nameValidator offers a different error message depending on the reason, this is my conditional input
```
##Contributing

TeamTreehouse with starter files