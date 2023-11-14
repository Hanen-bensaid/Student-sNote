//recupére les valeurs des champs du formulaire
const FullName = document.querySelector('.fullname');//recreparation de champs 
const dateOfBirth = document.querySelector('.dateofbirth');
const gender = document.querySelector('select[name="gender"]');
const task1 = document.querySelector('.task1');
const task2 = document.querySelector('.task2');
const task3 = document.querySelector('.task3');
// récuperer les buttons
const result = document.querySelector('.result');
const submit = document.querySelector('.submit');
const reset = document.querySelector('.reset');
// validation ule full name
function validateFullName(FullName){
    //check if the full name is required
    if (!FullName) {
        return "full name is required.";
    }
    //check the length of full name 
    if (FullName.length < 3 || FullName.length > 20) {
        return "Full name must be between 3 and 20 characters long.";
    }
    //check the format of full name 
    if (!/^[a-zA-Z ]+$/.test(FullName)) {
        return "full name must contain only letters and spaces.";
    }
    //if the ful name pases allof the validation rules , return nule.
    return null;
}
function validateDateOfBirth(dateofbirth) {
    //check if the date is required
    if (!date) {
        return "date is required.";
    }
    // check the format of the date 
    if (!/^d{4}-\d{2}$/.test(date)) {
        return "date must be in format YYYY-MM-DD";
    }
    // check the renge of the date
    const today = new Date();
    const minDate = new Date(today.getFullYear(),today.getMonth(),today.getDate());
    const maxDate =new date ( today.getFullYear()+1,today.getMonth(),today.getDate());
    if (date < minDate|| date > maxDate) {
        return "date must be between today and one year from today";
    }
    //if the date passes all of the validation rules return null
    return null;
}