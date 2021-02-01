function getPin() {
    const randomNumber = Math.random() * 10000;
    const pin = (randomNumber + '').split('.')[0];
    if (pin.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
//display generate pin
document.getElementById('generate-button').addEventListener('click', function () {
    const pinInput = document.getElementById('pin');
    pinInput.value = getPin();
})

//calculator button handler
document.getElementById('digits-container').addEventListener('click', function(event){
    const buttonValue = event.target.innerText;
    if(isNaN(buttonValue)){
        //handle backspace button
        //handle clear button
    }
    else{
        const newButtonValue = document.getElementById('display-digit');
        newButtonValue.value = newButtonValue.value + buttonValue;
    }
})

function verifyPin(){
    const typedPin = document.getElementById('display-digit').value;
    const generatePin = document.getElementById('pin').value;

    if(typedPin == generatePin && generatePin > 0){
        const pinMatch = document.getElementById('pin-match');
        pinMatch.style.display = 'block';
    }
    else{
        const incorrectPin = document.getElementById('incorrect-pin');
        incorrectPin.style.display = 'block';
    }
}