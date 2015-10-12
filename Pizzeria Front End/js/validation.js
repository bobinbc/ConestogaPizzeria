function validateForm(){
    var bName, bTel, bEmail, bStreet, bSuite, bCity, bProvince, bPostal, bSize, bCrust, bToppings;
    
    var formRef = document.pizzaForm;
    
    
    bName = isEmpty(formRef.name.value);
    if(!isEmpty(formRef.telephone.value)){
        btel = isPhoneValid(formRef.telephone.value);
    }
    if(!isEmpty(formRef.email.value)){
        bEmail = isEmailValid(formRef.email.value);
    }
    
    bStreet = isEmpty(formRef.address1.value);
    bSuite = isEmpty(formRef.address2.value);
    bCity = isEmpty(formRef.city.value);
    
    bProvince = isEmpty(formRef.province.value);
    
    if(!isEmpty(formRef.postalCode.value)){
        bPostal = isPostalCodeValid(formRef.postalCode.value);
    }
    bSize = isEmpty(formRef.size.value);
    bCrust = isEmpty(formRef.crust.value);
    bToppings = isEmpty(formRef.toppings.value);
    
}

function isEmpty(str) {
    return (!str || 0 === str.length);
}

function areEquivalent(value1, value2) {
    return (value1 === value2);
}

function isPhoneValid(phoneNumber) {
    var phonenoexp = /^\(?([0-9]{3})\)?[- ]?([0-9]{3})[- ]?([0-9]{4})$/;  
    if(!phoneNumber.match(phonenoexp))
       return false;
    else
        return true;
}

function isPostalCodeValid(postalCode) {
    var postcodeexp = /^[A-Za-z]\d[A-Za-z]( )?\d[A-Za-z]\d$/;

    if(!postalCode.match(postcodeexp))
       return false;
    else 
        return true;
}

function isChecked(inputSet) {
    
}

function isEmailValid(email) {
    var emailexp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;  
    if(!email.match(emailexp))
       return false;
    else
        return true;
}