function getPin() {
    const pin = genaretPin();
    const pinString = pin + '';
    if(pinString.length===4){
        return pin;
    }
    else {
        return getPin();
    }
}


function genaretPin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}


document.getElementById('genarat-pin').addEventListener('click', function () {
    const pin = getPin();
    const displayPinFind = document.getElementById('display-pin');
    displayPinFind.value = pin;
    
})

document.getElementById('calculetor').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('type-numbers');
     const previousTypeNumber = typeNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typeNumberField.value = '';
        }
        else if(number === '<') {
            const digits = previousTypeNumber.split('');
            digits.pop();
            const remainingDegits = digits.join('');
            typeNumberField.value = remainingDegits;
        
        }
    }
    else {
        
        const newTypeNumber=previousTypeNumber+number
        typeNumberField.value = newTypeNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click', function () {
    const displayPinFind = document.getElementById('display-pin');
    const currentPin = displayPinFind.value;

    const typeNumberField = document.getElementById('type-numbers');
    const typeNumber = typeNumberField.value;
    const pinSuccessMgs = document.getElementById('pin-success');
    const pinUnsuccessMgs = document.getElementById('pin-unsuccess');
    if (typeNumber === currentPin) {
       
        pinSuccessMgs.style.display = 'block';
        pinUnsuccessMgs.style.display = 'none';
    }
    else {
        
        pinUnsuccessMgs.style.display = 'block';
        pinSuccessMgs.style.display = 'none';
    }
})