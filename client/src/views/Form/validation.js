
const validation = (form) =>{
    let errors = {};

    if(!form.forename) {
        errors.forename = "Write a forename for your driver"
    }
    if(form.forename.length > 20){
        errors.forename = "Your driver's forename is too long"
    }
    if(! /^[^\d\s]+$/.test(form.forename)){
        errors.forename = "Your driver's forename can only have letters"
    }

    if(!form.surname) {
        errors.surname = "Write a surname for your driver"
    }
    if(form.surname.length > 20){
        errors.surname = "Your driver's surname is too long"
    }
    if(! /^[^\d\s]+$/.test(form.surname)){
        errors.surname = "Your driver's surname can only have letters"
    }

    if(form.nationality ===""){
        errors.nationality = "Write a nationality for your driver"
    }

    if(form.image ===""){
        errors.image = "Enter the url of your Pokemon image"
    }
    if(! /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(form.image)){
        errors.image = "Please enter a valid URL"
    }


    if(form.dob ===""){
        errors.life = "Enter a date. For example: 1975/05/28"
    }
    if(! /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/.test(form.dob)){
        errors.dob = "Enter a date. For example: 1975/05/28"
    }


    if(form.description ===""){
        errors.description = "Write a description for your driver"
    }

    if(!form.teams){
        errors.teams = "Select at least one team"
    }

    // if(form.description ===""){
    //     errors.description = "Write one or more teams for your driver"
    // }

    return errors;
}

export default validation;