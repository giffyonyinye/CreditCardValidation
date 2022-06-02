import valid from 'card-validator';

export default function ValidateInfo(values) {
    let errors = {}
    let creditCard = valid.number(values.number)
    creditCard.expirationDate = valid.expirationDate(values.expiry)
    creditCard.cardholderName = valid.cardholderName(values.name)
    creditCard.cvv = valid.cvv(values.cvv)
    errors.show = true
    errors.variant = 'danger'
    errors.message = 'An unknown error'
    errors.cname = false
    errors.cnumber = false
    errors.cexp = false
    errors.ccvv = false

    if(values.cvc === null || !values.cvc) {
        errors.message = 'credit card CVC is not complete'
    } else if (creditCard.cvv.isValid) {
        errors.ccvv = true
    } else {
        errors.message = 'Credit card cvc is not valid'
    }

    // expiration
    if(values.expiration === null || !values.expiration) {
        errors.message = 'credit card expiration date is not complete'
    } else if (creditCard.expirationDate.isValid) {
        errors.cexp = true
    } else {
        errors.message = 'Credit card expiration date is not valid'
    }

     // number
     if(values.number === null || !values.number) {
        errors.message = 'credit card expiration date is not complete'
    } else if (creditCard.isValid) {
        errors.cnumber = true
    } else {
        errors.message = 'Credit card number date is not valid'
    }

    // name
    if(values.name === null || !values.name) {
        errors.message = 'credit card expiration date is not complete'
    } else if (creditCard.CardholderName.isValid) {
        errors.cname = true
    } else {
        errors.message = 'Credit card name date is not valid'
    }

    if(errors.cname && errors.cnumber && errors.ccvv && errors.cexp) {
        errors.message = "credit card is valid"
    }
    return errors
}